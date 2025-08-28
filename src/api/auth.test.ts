import { authenticator } from 'otplib';
import * as v from 'valibot';
import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';
import { Session } from '../valibot/auth.js';

const {
	TEST_AUTH_EMAIL,
	TEST_AUTH_PASSWORD,
	TEST_AUTH_TOTP_SECRET,
	TEST_AUTH_USER_ID,
} = v.parse(
	v.object({
		TEST_AUTH_EMAIL: v.string(),
		TEST_AUTH_PASSWORD: v.string(),
		TEST_AUTH_TOTP_SECRET: v.string(),
		TEST_AUTH_USER_ID: v.pipe(
			v.string(),
			v.transform(Number),
		),
	}),
	process.env,
);

const auth_signin_response = await sdk.auth.signin(
	TEST_AUTH_EMAIL,
	TEST_AUTH_PASSWORD,
);
let session: Session | undefined;

describe('authorization', () => {
	test('auth.signin', () => {
		expect(auth_signin_response.success).toBe(true);

		if ('totp_session_token' in auth_signin_response.data === false) {
			session = auth_signin_response.data;
		}
	});

	test('auth.totpVerify', async () => {
		if ('totp_session_token' in auth_signin_response.data) {
			const TOTP_CODE = authenticator.generate(TEST_AUTH_TOTP_SECRET);
			const totp_verify_response = await sdk.auth.totpVerify(
				auth_signin_response.data.totp_session_token,
				TOTP_CODE,
			);

			expect(totp_verify_response.success).toBe(true);

			session = totp_verify_response.data;
		}
	});

	test('checking session', () => {
		if (session === undefined || session.refresh_token === undefined) {
			throw new Error('Session is undefined');
		}

		expect(session?.access_token).toBeTypeOf('string');
		expect(session?.access_token.length).toBeGreaterThan(0);
		expect(session?.refresh_token).toBeTypeOf('string');
		expect(session?.refresh_token?.length).toBeGreaterThan(0);
		expect(session?.expires_in).toBe(43200);
		expect(session?.user_id).toBeTypeOf('number');
		expect(session?.user_id).toBe(TEST_AUTH_USER_ID);
	});
});

describe('token refresh', () => {
	test('auth.refresh', async () => {
		if (session === undefined || session.refresh_token === undefined) {
			throw new Error('Session is undefined');
		}

		const refresh_response = await sdk.auth.refresh(session.refresh_token);
		expect(refresh_response.success).toBe(true);

		expect(refresh_response.data.access_token).toBeTypeOf('string');
		expect(refresh_response.data.access_token.length).toBeGreaterThan(0);
		expect(refresh_response.data.refresh_token).toBeTypeOf('string');
		expect(refresh_response.data.refresh_token?.length).toBeGreaterThan(0);
	});
});
