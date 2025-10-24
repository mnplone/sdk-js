import * as v from 'valibot';

export const valiObjectSessionSchema = v.object({
	user_id: v.number(),
	access_token: v.string(),
	expires_in: v.number(),
	refresh_token: v.optional(v.string()),
});

export const valiResponseTotpSessionTokenSchema = v.object({
	totp_session_token: v.string(),
});

export type TotpSessionToken = v.InferOutput<
	typeof valiResponseTotpSessionTokenSchema
>;
export type Session = v.InferOutput<typeof valiObjectSessionSchema>;
