import { InferOutput } from 'valibot';
export declare const valiObjectSessionSchema: import("valibot").ObjectSchema<{
    readonly user_id: import("valibot").StringSchema<undefined>;
    readonly access_token: import("valibot").StringSchema<undefined>;
    readonly expires_in: import("valibot").NumberSchema<undefined>;
    readonly refresh_token: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
}, undefined>;
export declare const valiResponseTotpSessionTokenSchema: import("valibot").ObjectSchema<{
    readonly totp_session_token: import("valibot").StringSchema<undefined>;
}, undefined>;
export type TotpSessionToken = InferOutput<typeof valiResponseTotpSessionTokenSchema>;
export type Session = InferOutput<typeof valiObjectSessionSchema>;
