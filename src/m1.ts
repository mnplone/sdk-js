import { ExtWSClient } from '@extws/client';
import {
	getDotPath,
	minValue,
	never,
	number,
	object,
	optional,
	parse,
	pipe,
	safeParse,
	string,
	type InferOutput,
} from 'valibot';
import { M1ApiData } from './api/data.js';
import { M1ApiUsers } from './api/users.js';
import { M1ApiAuth } from './api/auth.js';
import { type ValiBaseSchema } from './types.js';

type M1Options = {
	hostname?: string,
	access_token?: string,
	refresh_token?: string,
	websocket?: {
		subs?: string,
	},
	// headers?: Headers,
	headers?: Record<string, string>,
};

/**
 * Parses value with schema like valibot, but prints issue paths.
 * @param schema Valibot schema.
 * @param value Value to parse.
 * @returns Parsed value.
 */
function parseWithNotice<const V extends ValiBaseSchema>(schema: V, value: unknown): InferOutput<V> {
	const result = safeParse(schema, value);

	if (result.success) {
		return result.output;
	}

	for (const issue of result.issues) {
		// eslint-disable-next-line no-console
		console.error();
		// eslint-disable-next-line no-console
		console.error(`Valibot found an issue at ${getDotPath(issue)}`);
		// eslint-disable-next-line no-console
		console.error('issue', JSON.stringify(issue));
	}

	throw new TypeError('Valibot found issues.');
}

/**
 * @class M1
 * @classdesc A class to interact with Monopoly One API
 * @param options - The options to use
 * @param options.access_token - Access token
 * @param options.refresh_token - Refresh token
 * @param options.polling - Connect to WebSocket
 * @param options.subs - Websocket subscriptions
 * @param options.headers - Headers
 */
export class M1 {
	options: M1Options;
	ws: ExtWSClient | null = null;
	users = new M1ApiUsers(this);
	data = new M1ApiData(this);
	auth = new M1ApiAuth(this);
  
	constructor(options?: M1Options) {
		this.options = {
			hostname: globalThis.location?.hostname ?? 'monopoly-one.com',
			...options,
		};

		const { websocket } = this.options;
		if (websocket) {
			const {
				access_token,
				headers,
			} = this.options;

			const ws_url = new URL('/ws', `wss://${this.options.hostname}`);
			if (access_token !== undefined) {
				ws_url.searchParams.set('access_token', access_token);
			}

			if (typeof websocket.subs === 'string') {
				ws_url.searchParams.set('subs', websocket.subs);
			}

			this.ws = new ExtWSClient(
				ws_url as URL,
				{
					connect: false,
				},
			);

			if (headers) {
				this.ws.headers = headers;
			}

			this.ws.connect();
		}
	}

	/**
	 * Makes an API call.
	 * @param options -
	 * @param options.http_method - HTTP method.
	 * @param options.api_method - API method.
	 * @param options.data - Data to send.
	 * @param options.valiResponseSchema - Response validator.
	 * @param options.valiErrorDataSchema - Error data validator.
	 * @returns - API response.
	 */
	async callMethod<
		const ValiResponseSchema extends ValiBaseSchema,
		const ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
	>(options: {
		http_method: 'GET' | 'POST',
		api_method: string,
		data?: Record<
			string,
			string | number | undefined | null
		>,
		valiResponseSchema: ValiResponseSchema,
		valiErrorDataSchema?: ValiErrorDataSchema,
	}): Promise<{
		success: true,
		data: InferOutput<ValiResponseSchema>,
	} | {
		success: false,
		code: number,
		description?: string,
		data: ValiErrorDataSchema extends undefined
			? never
			: InferOutput<Exclude<ValiErrorDataSchema, undefined>>,
	}> {
		const url = new URL(
			`/api/${options.api_method}`,
			`https://${this.options.hostname}`,
		);
		let body;

		const request_headers = structuredClone(this.options.headers ?? {});
		const request_data = {
			...options.data,
			access_token: this.options.access_token,
		};

		if (options.http_method === 'GET') {
			for (const [ key, value ] of Object.entries(request_data)) {
				if (
					value !== undefined
					&& value !== null
				) {
					url.searchParams.set(key, value);
				}
			}
		}
		else {
			request_headers['Content-Type'] = 'application/json';
			body = JSON.stringify(request_data);
		}

		const response = await fetch(
			url,
			{
				method: options.http_method,
				headers: request_headers,
				body,
			},
		);

		const response_data = await response.json();

		const { code } = parse(
			object({
				code: pipe(
					number(),
					minValue(0),
				),
			}),
			response_data,
		);

		if (code === 0) {
			const { data } = parseWithNotice(
				object({
					data: options.valiResponseSchema as ValiBaseSchema,
				}),
				response_data,
			);

			return {
				success: true,
				data,
			};
		}

		const {
			description,
			data,
		} = parse(
			object({
				description: optional(string()),
				data: optional(options.valiErrorDataSchema ?? never() as ValiBaseSchema),
			}),
			response_data,
		);

		return {
			success: false,
			code,
			description,
			data,
		};
	}
}
