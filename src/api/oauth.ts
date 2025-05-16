import { M1ApiBase } from './base.js';
import { isRecord } from '../utils.js';
import { type ApiResponse } from '../types.js';
import {
	type Session,
	valiObjectSessionSchema,
} from '../valibot/auth.js';

export class M1ApiOauth extends M1ApiBase {
	/**
	 * Exchange a code for a session
	 * @param parameters - The parameters for the exchange
	 * @param parameters.app_id - The app ID
	 * @param parameters.app_secret - The app secret
	 * @param parameters.code - The code
	 * @param parameters.redirect_uri - The redirect URI
	 * @returns Session object
	 */
	exchangeCode({
		app_id,
		app_secret,
		code,
		redirect_uri,
	}: {
		app_id: number,
		app_secret: string,
		code: string,
		redirect_uri: string,
	}): Promise<ApiResponse<Session>> {
		if (
			app_id === undefined
			|| app_secret === undefined
			|| code === undefined
			|| redirect_uri === undefined
		) {
			throw new Error('Invalid parameters');
		}

		const data = {
			app_id,
			app_secret,
			code,
			redirect_uri,
		};

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'oauth.exchangeCode',
			data,
			valiResponseSchema: valiObjectSessionSchema,
		});
	}
}

