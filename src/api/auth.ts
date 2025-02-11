import { union } from 'valibot';

import { type M1 } from '../m1.js';
import {
	valiObjectSessionSchema,
	valiResponseTotpSessionTokenSchema,
	type Session,
	type TotpSessionToken,
} from '../valibot/auth.js';
import { type ApiResponse } from '../types.js';
// import { isRecord } from '../utils.js';

const valiResponseAuthSigninSchema = union([
	valiObjectSessionSchema,
	valiResponseTotpSessionTokenSchema,
]);

export class M1ApiAuth {
	// eslint-disable-next-line no-useless-constructor
	constructor(protected baseClient: M1) {
		// do nothing
		// win
	}

	/**
	 * Sign in with email and password.
	 * @param email The email address of the user.
	 * @param password The password of the user.
	 * @returns Session or TOTP session token.
	 */
	signin(email: string, password: string): Promise<ApiResponse<Session | TotpSessionToken>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'auth.signin',
			data: {
				email,
				password,
			},
			valiResponseSchema: valiResponseAuthSigninSchema,
		});
	}

	/**
	 * Verify the TOTP code.
	 * @param totp_session_token The TOTP session token.
	 * @param code The TOTP code.
	 * @returns Session.
	 */
	totpVerify(totp_session_token: string, code: string): Promise<ApiResponse<Session>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'auth.totpVerify',
			data: {
				totp_session_token,
				code,
			},
			valiResponseSchema: valiObjectSessionSchema,
		});
	}

	/**
	 * Refresh the access token.
	 * @param refresh_token The refresh token.
	 * @returns New session.
	 */
	refresh(refresh_token: string): Promise<ApiResponse<Session>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'auth.refresh',
			data: {
				refresh_token,
			},
			valiResponseSchema: valiObjectSessionSchema,
		});
	}
}
