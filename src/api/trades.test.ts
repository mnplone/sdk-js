import { describe, expect, test } from 'vitest';
import { sdk } from '../../test/sdk.js';

describe('trades', () => {
	test('trades.create', async () => {
		const response = await sdk.trades.create({
			user_id: 1,
			item_ids_offer: [1, 2, 3],
			item_ids_request: [4, 5, 6],
		});

		expect(response.request.data.thing_ids_from).toBe('1,2,3');
		expect(response.request.data.thing_ids_to).toBe('4,5,6');
	});

	test('trades.create gift', async () => {
		const response = await sdk.trades.create({
			user_id: 1,
			item_ids_offer: [1, 2, 3],
		});

		expect(response.request.data.thing_ids_from).toBe('1,2,3');
		expect(response.request.data.thing_ids_to).toBeUndefined();
	});

	test('trades.create ask gift', async () => {
		const response = await sdk.trades.create({
			user_id: 1,
			item_ids_request: [1, 2, 3],
		});

		expect(response.request.data.thing_ids_from).toBeUndefined();
		expect(response.request.data.thing_ids_to).toBe('1,2,3');
	});
});
