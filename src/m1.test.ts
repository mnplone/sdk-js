import {
	test,
	expect,
	describe,
} from 'vitest';
import { M1 } from './m1.js';

const sdk = new M1({
	hostname: 'new.mnpl.local',
});

describe('single user', () => {
	test('user', async () => {
		const response = await sdk.users.get(1);

		expect(response.data.user_id).toBe(1);
		expect(response.data.bot).toBeNull();
	});

	test('bot', async () => {
		const response = await sdk.users.get(5);

		expect(response.data.bot).toStrictEqual({
			owner_user_id: 1,
		});
		// @ts-expect-error Property 'bot_owner' does not exist
		expect(response.data.bot_owner).toBeUndefined();
	});
});
