
import type { Dictionary } from './types.ts';
import {
	httpGETRequest, httpPOSTRequest,
} from './http.ts';

const M1_API_URL = 'https://monopoly-one.com/api';
const REQUESTS = {
	GET: httpGETRequest,
	POST: httpPOSTRequest,
};

/**
 * @class M1
 * @classdesc A class to interact with Monopoly One API
 * @param {object} options - The options to use
 * @param {string} options.access_token - Access token
 * @param {string} options.refresh_token - Refresh token
 * @param {Dictionary<string>} options.headers - Headers
 */
export class M1 {
	private access_token: string;
	private refresh_token: string;
	private headers: Dictionary<string>;

	constructor({
		access_token,
		refresh_token,
		headers = {},
	}: {
		access_token?: string,
		refresh_token?: string,
		headers?: Dictionary<string>,
	}) {
		this.access_token = access_token ?? '';
		this.refresh_token = refresh_token ?? '';
		this.headers = headers;
	}

	async callMethod(
		method: string,
		parameters: Dictionary<unknown>,
		api_method: 'GET' | 'POST' = 'GET',
	) {
		const url = `${M1_API_URL}/${method}`;
		const sendRequest = REQUESTS[api_method];

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
