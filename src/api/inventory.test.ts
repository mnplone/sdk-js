/* eslint-disable @stylistic/array-element-newline */
import {
	describe,
	expect,
	test,
} from 'vitest';
import { sdk } from '../../test/sdk.js';

const TEST_USER_ID = 623087;

describe('inventory.get (items mode)', () => {
	test('default parameters', async () => {
		const response = await sdk.inventory.get(
			TEST_USER_ID,
			{
				add_legacy: false,
			},
		);

		expect(response.success).toBe(true);
		expect(response.data.count).toBeTypeOf('number');
		expect(response.data.items).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
	});

	test('with user', async () => {
		const response = await sdk.inventory.get(
			TEST_USER_ID,
			{
				add_legacy: false,
				add_user: true,
			},
		);

		expect(response.success).toBe(true);
		expect(response.data.count).toBeTypeOf('number');
		expect(response.data.items).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect(response.data.user).toBeInstanceOf(Object);
	});

	test('stock quality items', async () => {
		const response = await sdk.inventory.get(
			{
				add_legacy: false,
				add_user: true,
				include_stock: true,
			},
		);

		expect(response.success).toBe(true);
		expect(response.data.count).toBeTypeOf('number');
		expect(response.data.items).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect(response.data.user).toBeInstanceOf(Object);

		const stock_items = response.data.items.filter((item) => item.quality_id === 0);

		expect(stock_items).toBeInstanceOf(Array);

		// if user is a bot, then there are no stock items
		expect(stock_items.length).toBe(response.data.user.bot ? 0 : 29); // 28 fields + 1 dice
	});
});

describe('inventory.get (things mode)', () => {
	test('no add_legacy returns things', async () => {
		const response = await sdk.inventory.get(TEST_USER_ID);

		expect(response.success).toBe(true);
		expect(response.data.things).toBeInstanceOf(Array);
	});
});

describe('inventory.craft', () => {
	test.skip('craft an item', async () => {
		const response = await sdk.inventory.craft([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);

		expect(response.success).toBe(true);
		expect(response.data.item).toBeInstanceOf(Object);
		expect(response.data.item.quality_id).toBe(2);
		expect(response.data.item.collection_id).toBeOneOf([ 1, 2, 3 ]);
	});
});
