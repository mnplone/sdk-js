import * as v       from 'valibot';
import { isRecord } from './utils.ts';
import {
	type M1ApiResponseData,
	type M1ApiError,
	M1ApiOldResponseSchema,
	M1ApiErrorSchema,
} from './valibot/api.ts';

const M1_API_URL = 'https://monopoly-one.com/api/';

export class M1Error extends Error {
	/** Код ошибки */
	code: number;
	/** Описание ошибки */
	description?: string;
	/** Данные ошибки */
	data?: Record<string, unknown>;
	/** Данные запроса */
	request: {
		/** Метод API */
		api_method: string,
		/** Параметры запроса */
		parameters: Record<string, unknown>,
	};

	constructor(error: M1ApiError, request: {
		api_method: string,
		parameters: Record<string, unknown>,
	}) {
		super(`${error.description} (code ${error.code})`);

		this.code = error.code;

		if ('description' in error) {
			this.description = error.description;
		}

		if ('data' in error && isRecord(error.data)) {
			this.data = error.data;
		}

		this.request = request;
	}
}

/**
 * @param response The response to handle.
 * @param request The request to handle.
 * @param request.api_method The API method.
 * @param request.parameters The parameters of the request.
 * @returns Typed response.
 */
async function handleResponse(response: Response, request: {
	api_method: string,
	parameters: Record<string, unknown>,
}): Promise<M1ApiResponseData | undefined> {
	let raw_data: unknown;

	try {
		raw_data = await response.json();
	}
	catch (error) {
		if (process.env.DEBUG === '1') {
			console.error(error);
		}

		throw new Error('Unexpected API response.');
	}

	if (
		isRecord(raw_data) !== true
	&& Array.isArray(raw_data) !== true
	) {
		throw new Error('Invalid API response');
	}

	if (Array.isArray(raw_data) === true || 'code' in raw_data !== true) {
		return raw_data as M1ApiResponseData;
	}

	if (typeof raw_data.code === 'number' && raw_data.code === 0) {
		const result = v.safeParse(
			M1ApiOldResponseSchema,
			raw_data,
		);

		if (result.success) {
			return result.output.data as M1ApiResponseData;
		}

		throw new Error('Something went wrong');
	}

	const error = v.safeParse(
		M1ApiErrorSchema,
		raw_data,
	);

	if (error.success) {
		throw new M1Error(
			error.output as M1ApiError,
			request,
		);
	}

	throw new Error('Something went wrong');
}

/**
 * @param url - The URL to send the request to.
 * @param parameters - The parameters to send with the request.
 * @param headers - The headers to send with the request.
 * @returns {Promise<M1ApiResponseData | undefined>} -
 */
export async function httpGetRequest(
	url: string,
	parameters: Record<string, unknown>,
	headers: Record<string, string>,
): Promise<M1ApiResponseData | undefined> {
	const urlWithParams = new URL(url);
	const searchParams = new URLSearchParams(parameters as Record<string, string>);
	urlWithParams.search = searchParams.toString();

	try {
		const response = await fetch(
			urlWithParams.toString(),
			{
				method: 'GET',
				headers,
			},
		);

		return handleResponse(
			response,
			{
				api_method: url.replace(M1_API_URL, ''),
				parameters,
			},
		);
	}
	catch (error) {
		if (error instanceof M1Error) {
			throw error;
		}

		if (process.env.DEBUG === '1') {
			console.error(error);
		}

		throw new Error('Something went wrong');
	}
}

/**
 * @param url The URL to send the request to.
 * @param body The body of the request.
 * @param headers The headers to send with the request.
 * @returns Typed response.
 */
export async function httpPostRequest(
	url: string,
	body: Record<string, unknown>,
	headers: Record<string, string>,
): Promise<M1ApiResponseData | undefined> {
	try {
		const response = await fetch(
			url,
			{
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'content-type': 'application/json',
					...headers,
				},
			},
		);

		return handleResponse(
			response,
			{
				api_method: url.replace(M1_API_URL, ''),
				parameters: body,
			},
		);
	}
	catch (error) {
		if (error instanceof M1Error) {
			throw error;
		}

		if (process.env.DEBUG === '1') {
			console.error(error);
		}

		throw new Error('Something went wrong');
	}
}
