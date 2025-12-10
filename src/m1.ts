import { ExtWSClient } from '@extws/client';
import * as v from 'valibot';
import { M1ApiAuth } from './api/auth.js';
import { M1ApiBots } from './api/bots.js';
import { M1ApiData } from './api/data.js';
import { M1ApiFriends } from './api/friends.js';
import { M1ApiGchat } from './api/gchat.js';
import { M1ApiIm } from './api/im.js';
import { M1ApiInventory } from './api/inventory.js';
import { M1ApiOauth } from './api/oauth.js';
import { M1ApiTrades } from './api/trades.js';
import { M1ApiUsers } from './api/users.js';
import type { M1ApiResponseHooks } from './hooks.js';
import { type ValiBaseSchema } from './types.js';
import { maskString, parseWithNotice } from './utils.js';

const IS_TEST =
	('process' in globalThis && globalThis.process.env.NODE_ENV === 'test')
	|| ('localStorage' in globalThis // eslint-disable-next-line n/no-unsupported-features/node-builtins
		&& globalThis.localStorage.getItem('test') === '1');

export type CallMethodOptionsData = Record<
	string,
	string | number | undefined | null
>;

export type CallMethodOptions<
	ValiResponseSchema extends ValiBaseSchema,
	ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
> = {
	http_method: 'GET' | 'POST';
	api_method: string;
	data?: CallMethodOptionsData;
	valiResponseSchema: ValiResponseSchema;
	valiErrorDataSchema?: ValiErrorDataSchema;
};

// const InvalidParametersErrorDataSchema = v.object({
// 	issues: v.optional(
// 		v.array(
// 			v.object({
// 				path: v.string(),
// 				message: v.string(),
// 			}),
// 		),
// 	),
// });

export type RequestOptions = {
	method: 'GET' | 'POST';
	api_method: string;
	data: CallMethodOptionsData;
};

export type CallMethodResponse<
	ValiResponseSchema extends ValiBaseSchema,
	ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
> =
	| {
			success: true;
			data: v.InferOutput<ValiResponseSchema>;
			request: RequestOptions;
	  }
	| {
			success: false;
			code: number;
			description?: string;
			data: ValiErrorDataSchema extends undefined
				? never
				: v.InferOutput<Exclude<ValiErrorDataSchema, undefined>>;
			request: RequestOptions;
	  };
type M1Options = {
	hostname?: string;
	access_token?: string;
	refresh_token?: string;
	websocket?: {
		subs?: string;
	};
	headers?: Headers | Record<string, string>;
	hooks?: M1ApiResponseHooks;
};

const apiResponseParser = v.parser(
	v.object({
		code: v.optional(v.pipe(v.number(), v.minValue(0)), 0),
	}),
);

/**
 * @classdesc A class to interact with Monopoly One API
 * @param options - The options to use
 * @param options.access_token - Access token
 * @param options.refresh_token - Refresh token
 * @param options.websocket - Websocket options
 * @param options.websocket.subs - Websocket subscriptions
 * @param options.headers - Headers
 * @param options.hooks - Hooks
 */
export class M1 {
	options: M1Options;
	ws: ExtWSClient | null = null;
	auth = new M1ApiAuth(this);
	bots = new M1ApiBots(this);
	data = new M1ApiData(this);
	friends = new M1ApiFriends(this);
	gchat = new M1ApiGchat(this);
	im = new M1ApiIm(this);
	inventory = new M1ApiInventory(this);
	oauth = new M1ApiOauth(this);
	trades = new M1ApiTrades(this);
	users = new M1ApiUsers(this);

	constructor(options?: M1Options) {
		this.options = {
			hostname: globalThis.location?.hostname ?? 'monopoly-one.com',
			...options,
		};

		const { websocket } = this.options;
		if (websocket) {
			const { access_token, headers } = this.options;

			const ws_url = new URL('/ws', `wss://${this.options.hostname}`);

			if (access_token) {
				ws_url.searchParams.set('access_token', access_token);
			}

			if (typeof websocket.subs === 'string') {
				ws_url.searchParams.set('subs', websocket.subs);
			}

			this.ws = new ExtWSClient(ws_url as URL, {
				connect: false,
			});

			if (headers) {
				this.ws.headers =
					headers instanceof Headers ? headers : new Headers(headers);
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
	// eslint-disable-next-line max-lines-per-function
	async callMethod<
		ValiResponseSchema extends ValiBaseSchema,
		ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
	>(
		options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>,
	): Promise<CallMethodResponse<ValiResponseSchema, ValiErrorDataSchema>> {
		const url = new URL(
			`/api/${options.api_method}`,
			`https://${this.options.hostname}`,
		);
		let body: string | undefined;

		const request_headers = new Headers(this.options.headers ?? {});
		const request_data = {
			...options.data,
			access_token: this.options.access_token,
		};

		if (options.http_method === 'GET') {
			for (const [key, value] of Object.entries(request_data)) {
				if (value !== undefined && value !== null) {
					url.searchParams.set(key, value);
				}
			}
		} else {
			request_headers.set('Content-Type', 'application/json');
			body = JSON.stringify(request_data);
		}

		const request_init: RequestInit = {
			method: options.http_method,
			headers: request_headers,
		};

		if (options.http_method !== 'GET') {
			request_init.body = body;
		}

		const request_options: RequestOptions = {
			method: options.http_method,
			api_method: options.api_method,
			data: request_data,
		};

		if (
			request_options.data.access_token
			&& typeof request_options.data.access_token === 'string'
		) {
			request_options.data.access_token = maskString(
				request_options.data.access_token,
			);
		}

		const response = await fetch(url, request_init);

		const response_data = await response.json();
		if (IS_TEST) {
			console.log('response_data:', response_data);
		}

		// if (IS_TEST && response_data.success === false) {
		// 	// oxlint-disable-next-line no-console
		// 	console.dir(response_data, { depth: null });
		// }

		const { code } = apiResponseParser(response_data);
		if (IS_TEST) {
			console.log('code:', code);
		}

		if (code === 0) {
			const { data } = parseWithNotice(
				v.pipe(
					v.object({
						data: v.optional(options.valiResponseSchema as ValiBaseSchema),
						result: v.optional(options.valiResponseSchema as ValiBaseSchema),
					}),
					v.check(
						(input) =>
							!(input.data && input.result)
							|| (input.data === undefined && input.result === undefined),
					),
					v.transform((input) => {
						return {
							data: input.data ?? input.result,
						};
					}),
				),
				response_data,
			);

			return {
				success: true,
				data,
				request: request_options,
			};
		}

		const { description, data } = v.parse(
			v.object({
				description: v.optional(v.string()),
				data: v.optional(options.valiErrorDataSchema ?? v.unknown()),
			}),
			response_data,
		);

		if (this.options.hooks) {
			const hook = this.options.hooks[code];

			if (hook) {
				const new_request_options = await hook.call(
					this,
					options,
					request_data,
				);

				if (new_request_options) {
					return this.callMethod(new_request_options);
				}
			}
		}

		return {
			success: false,
			code,
			description,
			data: data as ValiErrorDataSchema extends undefined
				? never
				: v.InferOutput<Exclude<ValiErrorDataSchema, undefined>>,
			request: request_options,
		};
	}
}
