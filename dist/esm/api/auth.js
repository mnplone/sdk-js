import { union } from 'valibot';
import { M1ApiBase } from './base.js';
import { valiObjectSessionSchema, valiResponseTotpSessionTokenSchema, } from '../valibot/auth.js';
// import { isRecord } from '../utils.js';
const valiResponseAuthSigninSchema = union([
    valiObjectSessionSchema,
    valiResponseTotpSessionTokenSchema,
]);
export class M1ApiAuth extends M1ApiBase {
    /**
     * Sign in with email and password.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @returns Session or TOTP session token.
     */
    signin(email, password) {
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
    totpVerify(totp_session_token, code) {
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
    refresh(refresh_token) {
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
