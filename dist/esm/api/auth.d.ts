import { M1ApiBase } from './base.js';
import { type Session, type TotpSessionToken } from '../valibot/auth.js';
import { type ApiResponse } from '../types.js';
export declare class M1ApiAuth extends M1ApiBase {
    /**
     * Sign in with email and password.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @returns Session or TOTP session token.
     */
    signin(email: string, password: string): Promise<ApiResponse<Session | TotpSessionToken>>;
    /**
     * Verify the TOTP code.
     * @param totp_session_token The TOTP session token.
     * @param code The TOTP code.
     * @returns Session.
     */
    totpVerify(totp_session_token: string, code: string): Promise<ApiResponse<Session>>;
    /**
     * Refresh the access token.
     * @param refresh_token The refresh token.
     * @returns New session.
     */
    refresh(refresh_token: string): Promise<ApiResponse<Session>>;
}
