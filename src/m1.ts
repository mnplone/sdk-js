
import { type Dictionary } from './types.ts';
import {
	httpGetRequest,
	httpPostRequest,
} from './http.ts';
import { ExtWSClient } from '@extws/client';
import { UsersApi } from './api/users/index.ts';

const M1_API_URL = 'https://monopoly-one.com/api';
const REQUESTS = {
	GET: httpGetRequest,
	POST: httpPostRequest,
};

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
	private access_token: string;
	private refresh_token: string;
	private headers: Dictionary<string>;
	public users: UsersApi;
	public ws: ExtWSClient | null;

	constructor({
		access_token,
		refresh_token,
		polling = false,
		subs = '',
		headers = {},
	}: {
		access_token?: string,
		refresh_token?: string,
		polling?: boolean,
		subs?: string,
		headers?: Dictionary<string>,
	}) {
		this.access_token = access_token ?? '';
		this.refresh_token = refresh_token ?? '';
		this.headers = headers;

		this.users = new UsersApi(this);

		if (polling === true) {
			const ws_url = new URL('wss://monopoly-one.com/ws');
			if (this.access_token.length > 0) {
				ws_url.searchParams.set('access_token', this.access_token);
			}

			if (subs.length > 0) {
				ws_url.searchParams.set('subs', subs);
			}

			const has_headers = Object.keys(this.headers).length > 0;
			this.ws = new ExtWSClient(
				ws_url as URL,
				{
					connect: has_headers === false,
				},
			);
			if (has_headers) {
				this.ws.headers = this.headers;
				this.ws.connect();
			}
		}
		else {
			this.ws = null;
		}
	}

	async callMethod(
		method: string,
		parameters: Dictionary<unknown>,
		api_method?: 'GET' | 'POST',
	) {
		const url = `${M1_API_URL}/${method}`;
		const sendRequest = REQUESTS[api_method ?? 'GET'];

		const response = await sendRequest(
			url,
			{
				access_token: this.access_token,
				...parameters,
			},
			this.headers,
		);

		return response;
	}
}
