import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';

const BOT_USER_ID = Number.parseInt(process.env.TEST_BOT_USER_ID ?? '112426');

describe('users.get', () => {
	describe('single user', () => {
		test('user', async () => {
			const response = await sdk.users.get(1);

			expect(response.data.user_id).toBe(1);
			expect(response.data.bot).toBeNull();
		});

		test('bot', async () => {
			const response = await sdk.users.get(BOT_USER_ID);

			expect(response.data.bot).toStrictEqual({
				owner_user_id: 1,
			});
			// @ts-expect-error Property 'bot_owner' does not exist
			expect(response.data.bot_owner).toBeUndefined();
		});
	});
});
