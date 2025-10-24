import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';

describe('friends.getRequests', () => {
	test('short: true', async () => {
		const response = await sdk.friends.getRequests({
			short: true,
		});

		expect(response.request.data.type === 'short');

		if (response.data.requests.length > 0) {
			const user = response.data.requests[0];
			if (user.inactive === undefined) {
				// @ts-expect-error yep we know it should be undefined
				expect(user.games).toBe(undefined);
			}
		}

		// expect(isRecord(response.data.status)).toBe(true);
	});
});

describe('friends.get', () => {
	test('check options handling', async () => {
		const response = await sdk.friends.get(
			1,
			{
				short: true,
				add_user: true,
				online: true,
			},
		);

		expect(response.request.data.type === 'short');
		expect(response.request.data.add_user === 1);
		expect(response.request.data.online === 1);
		expect(response.request.data.user_id === 1);

		const first_friend = response.data.friends?.[0];

		if (
			first_friend
			&& first_friend.inactive === undefined
		) {
			// @ts-expect-error yep, same
			expect(first_friend.games).toBeUndefined(); // user to be short
			expect(first_friend.online).toBe(true);
			expect(response.data.user).toBeDefined();
		}

		// expect(isRecord(response.data.status)).toBe(true);
	});

	test('user not exists', async () => {
		const response = await sdk.friends.get(1337 ** 4);

		expect(response.success).toBe(false);
		expect(response.request.data.online).toBeUndefined();
		expect(response.request.data.type).toBeUndefined();
		expect(response.request.data.add_user).toBeUndefined();
	});
});
