import * as v       from 'valibot';
import { isRecord } from './utils.ts';
import type {
	Dictionary,
	M1APIResponseData,
	M1APIErrorResponse,
} from './types.ts';

const M1APIResponseDataSchema = v.union([
	v.record(
		v.string(),
		v.unknown(),
	),
	v.array(
		v.unknown(),
	),
]);

const M1APIErrorSchema = v.object({
	code: v.number(),
	description: v.string(),
	data: v.optional(
		v.record(
			v.string(),
			v.unknown(),
		),
	),
});

const M1APIOldResponseSchema = v.object({
	code: v.number(),
	data: v.optional(
		M1APIResponseDataSchema,
	),
});

export class M1Error extends Error {
	/** Код ошибки */
	code: number;
	/** Описание ошибки */
	description?: string;
	/** Данные ошибки */
	data?: Dictionary<unknown>;

	constructor(error: M1APIErrorResponse) {
		super(`${error.description} (code ${error.code})`);

		this.code = error.code;

		if ('description' in error) {
			this.description = error.description;
		}

		if ('data' in error && isRecord(error.data)) {
			this.data = error.data;
		}
	}
}

/**
 * @param {Response} response - The response to handle.
 * @returns {Promise<M1APIResponse | undefined>} - Typed response.
 */
async function handleResponse(response: Response): Promise<M1APIResponseData | undefined> {
	const raw_data = await response.json();

	if (
		isRecord(raw_data) !== true
		&& Array.isArray(raw_data) !== true
	) {
		throw new Error('Invalid API response');
	}

	if (Array.isArray(raw_data) === true || 'code' in raw_data !== true) {
		return raw_data as M1APIResponseData;
	}

	if (typeof raw_data.code === 'number' && raw_data.code === 0) {
		const result = v.safeParse(
			M1APIOldResponseSchema,
			raw_data,
		);

		if (result.success) {
			return result.output.data as M1APIResponseData;
		}

		throw new Error('Something went wrong');
	}

	const error = v.safeParse(
		M1APIErrorSchema,
		raw_data,
	);

	if (error.success) {
		throw new M1Error(error.output as M1APIErrorResponse);
	}

	throw new Error('Something went wrong');
}

/**
 * @param {string} url - The URL to send the request to.
 * @param {Record<string, unknown>} parameters - The parameters to send with the request.
 * @param {Record<string, string>} headers - The headers to send with the request.
 * @returns {Promise<M1APIResponseData | undefined>} -
 */
export async function httpGETRequest(
	url: string,
	parameters: Record<string, unknown>,
	headers: Record<string, string>,
): Promise<M1APIResponseData | undefined> {
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

		return handleResponse(response);
	}
	catch (error) {
		if (error instanceof M1Error) {
			throw error;
		}

		console.error(error);
		throw new Error('Something went wrong');
	}
}

/**
 * @param {string} url - The URL to send the request to.
 * @param {Record<string, unknown>} body - The body of the request.
 * @param {Record<string, string>} headers - The headers to send with the request.
 * @returns {Promise<M1APIResponse | undefined>} -
 */
export async function httpPOSTRequest(
	url: string,
	body: Dictionary<unknown>,
	headers: Dictionary<string>,
): Promise<M1APIResponseData | undefined> {
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

		return handleResponse(response);
	}
	catch (error) {
		if (error instanceof M1Error) {
			throw error;
		}

		console.error(error);
		throw new Error('Something went wrong');
	}
}
