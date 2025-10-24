import { test, expect, describe } from 'vitest';
import { sdk } from '../../test/sdk.js';

const BOT_USER_ID = Number.parseInt(process.env.TEST_BOT_USER_ID ?? '112426');

describe('users.get', () => {
	describe('single user', () => {
		test('user', async () => {
			const response = await sdk.users.get(1);

			expect(response.data.user_id).toBe(1);
			if (typeof response.data.inactive !== 'string') {
				expect(response.data.inactive).toBeUndefined();
				expect(response.data.bot).toBeNull();
			}
		});

		test('multiple users', async () => {
			const response = await sdk.users.get([1, 2]);

			expect(response.request.data.user_ids).toBe('1,2');
			expect(response.data.size).toBe(2);
		});

		test('short user', async () => {
			const response = await sdk.users.get(1, { short: true });
			expect(response.request.data.type).toBe('short');
			expect(response.data.user_id).toBe(1);

			// @ts-expect-error yep we know it should be undefined
			expect(response.data.nicks_old).toBeUndefined();
		});

		test('bot', async () => {
			const response = await sdk.users.get(BOT_USER_ID);
			if (response.data.inactive === undefined) {
				expect(response.data.bot).toStrictEqual({
					owner_user_id: 1,
				});
				// @ts-expect-error yep we know it should be undefined
				expect(response.data.bot_owner).toBeUndefined();
			}
		});

		test('user not exists', async () => {
			const response = await sdk.users.get(1337 ** 4);

			expect(response.success).toBe(true);
			expect(response.data.inactive).toBe('not_exists');
		});

		test('0 id', async () => {
			const response = await sdk.users.get(0);

			// user_id has to ∈ N
			expect(response.success).toBe(false);
		});

		test('negative id', async () => {
			const response = await sdk.users.get(-1);

			// user_id has to ∈ N
			expect(response.success).toBe(false);
		});

		test('1 symbol domain', async () => {
			const response = await sdk.users.get('a');

			expect(response.data.inactive).toBe('not_exists');
		});
	});
});
