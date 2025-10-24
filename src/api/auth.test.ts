import { authenticator } from 'otplib';
import * as v from 'valibot';
import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';
import {
	Session,
	TotpSessionToken,
} from '../valibot/auth.js';
import { ApiResponse } from '../types.js';

describe.skip('authorization flow', () => {
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

	let session: Session | undefined;
	let auth_signin_response: ApiResponse<Session | TotpSessionToken>;

	test('auth.signin', async () => {
		auth_signin_response = await sdk.auth.signin(
			TEST_AUTH_EMAIL,
			TEST_AUTH_PASSWORD,
		);

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
		expect(session?.expires_in).toBeTypeOf('number');
		expect(session?.user_id).toBeTypeOf('number');
		expect(session?.user_id).toBe(TEST_AUTH_USER_ID);
	});

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

// auth.totpVerify
// auth.signin
// auth.refresh

describe('auth.signin', () => {
	test('success', async () => {
		const response = await sdk.auth.signin(
			'not_an_email',
			'deadbeef1337',
		);

		expect(response.success).toBe(false);
	});
});
