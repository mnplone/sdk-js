import { number, object, optional, string, } from 'valibot';
export const valiObjectSessionSchema = object({
    user_id: string(),
    access_token: string(),
    expires_in: number(),
    refresh_token: optional(string()),
});
export const valiResponseTotpSessionTokenSchema = object({
    totp_session_token: string(),
});
