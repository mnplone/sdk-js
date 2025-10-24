import { describe, expect, test } from 'bun:test';
import * as v from 'valibot';
import { sdk } from '../../test/sdk.js';

const env = v.parse(
	v.object({
		TEST_AUTH_USER_ID: v.pipe(
			v.string(),
			v.minLength(1),
			v.transform((value) => Number.parseInt(value)),
			v.number(),
		),
	}),
	process.env,
);

describe('inventory.get (items mode)', () => {
	test('valiResponseInventoryGetBaseSchema', async () => {
		const response = await sdk.inventory.get(env.TEST_AUTH_USER_ID, {
			add_legacy: false,
		});

		expect(response.request.data.add_legacy).toBe(0);
		expect(response.data.count).toBeTypeOf('number');
		expect(response.data.items).toBeInstanceOf(Array);
		// @ts-expect-error yep
		expect(response.data.user).toBeUndefined();
	});

	test('valiResponseInventoryGetWithUserSchema', async () => {
		const response = await sdk.inventory.get(env.TEST_AUTH_USER_ID, {
			add_legacy: false,
			add_user: true,
		});

		expect(response.success).toBe(true);
		expect(response.request.data.add_user).toBe(1);
		expect(response.request.data.add_legacy).toBe(0);
		expect(response.data.user).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.things).toBeUndefined();
	});

	test('valiResponseInventoryGetWithEquippedArraySchema + stock items', async () => {
		const response = await sdk.inventory.get({
			add_legacy: false,
			add_equipped: 'array',
			include_stock: true,
		});

		if (response.success === false) {
			throw new Error(
				'inventory.get with stock items should be called with access_token',
			);
		}

		expect(response.request.data.include_stock).toBe(1);
		expect(response.request.data.add_equipped).toBe('array');
		expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect('user' in response.data).toBe(false);

		expect(response.data.items.some((item) => item.quality_id === 0)).toBe(
			true,
		);
	});

	test('valiResponseInventoryGetWithEquippedTreeSchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: false,
			add_equipped: 'tree',
		});

		expect(response.request.data.add_user).toBeUndefined();
		expect(response.request.data.add_equipped).toBe('tree');

		expect('user' in response.data).toBe(false);
		expect(response.data.equipped).toBeInstanceOf(Object);
	});

	test('valiResponseInventoryGetWithUserAndEquippedTreeSchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: false,
			add_user: true,
			add_equipped: 'tree',
		});

		expect(response.request.data.add_user).toBe(1);
		expect(response.request.data.add_equipped).toBe('tree');
		expect(response.data.user).toBeInstanceOf(Object);
		expect(response.data.equipped).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.things).toBeUndefined();
	});

	test('valiResponseInventoryGetWithUserAndEquippedArraySchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: false,
			add_user: true,
			add_equipped: 'array',
		});

		expect(response.request.data.add_legacy).toBe(0);
		expect(response.request.data.add_equipped).toBe('array');
		expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect(response.data.user).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.equipped).toBeUndefined();
	});
});

describe('inventory.get (things mode)', () => {
	test('valiResponseInventoryGetLegacySchema', async () => {
		const response = await sdk.inventory.get(env.TEST_AUTH_USER_ID, {
			add_legacy: true,
		});

		expect(response.request.data.add_legacy).toBe(1);
		expect(response.data.count).toBeTypeOf('number');
		expect(response.data.things).toBeInstanceOf(Array);
		// @ts-expect-error yep
		expect(response.data.user).toBeUndefined();
	});

	test('valiResponseInventoryGetLegacyWithUserSchema', async () => {
		const response = await sdk.inventory.get(env.TEST_AUTH_USER_ID, {
			add_legacy: true,
			add_user: true,
		});

		expect(response.success).toBe(true);
		expect(response.request.data.add_user).toBe(1);
		expect(response.request.data.add_legacy).toBe(1);
		expect(response.data.user).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.items).toBeUndefined();
	});

	test('valiResponseInventoryGetLegacyWithEquippedArraySchema + stock items', async () => {
		const response = await sdk.inventory.get({
			add_legacy: true,
			add_equipped: 'array',
			include_stock: true,
		});

		if (response.success === false) {
			throw new Error(
				'inventory.get with stock items should be called with access_token',
			);
		}

		expect(response.request.data.include_stock).toBe(1);
		expect(response.request.data.add_equipped).toBe('array');
		expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect(response.data.thing_types).toBeInstanceOf(Array);
		expect(response.data.qualities).toBeInstanceOf(Array);
		// @ts-expect-error yep
		expect(response.data.user).toBeUndefined();

		const stock_things = response.data.things.filter(
			(thing) => thing.quality === 0,
		);
		expect(stock_things.length).toBe(29); // 28 fields + 1 dice
	});

	test('valiResponseInventoryGetLegacyWithEquippedTreeSchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: true,
			add_equipped: 'tree',
		});

		expect(response.request.data.add_user).toBeUndefined();
		expect(response.request.data.add_equipped).toBe('tree');
		// @ts-expect-error yep
		expect(response.data.user).toBeUndefined();
		expect(response.data.equipped).toBeInstanceOf(Object);
	});

	test('valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: true,
			add_user: true,
			add_equipped: 'tree',
		});

		expect(response.request.data.add_user).toBe(1);
		expect(response.request.data.add_equipped).toBe('tree');
		expect(response.data.user).toBeInstanceOf(Object);
		expect(response.data.equipped).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.items).toBeUndefined();
	});

	test('valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema', async () => {
		const response = await sdk.inventory.get({
			add_legacy: true,
			add_user: true,
			add_equipped: 'array',
		});

		expect(response.request.data.add_legacy).toBe(1);
		expect(response.request.data.add_equipped).toBe('array');
		expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		expect(response.data.collections).toBeInstanceOf(Array);
		expect(response.data.user).toBeInstanceOf(Object);
		// @ts-expect-error yep
		expect(response.data.equipped).toBeUndefined();
	});
});

describe('inventory.craft', () => {
	test('check item_ids array to string', async () => {
		const response = await sdk.inventory.craft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

		expect(response.request.data.item_ids).toBe('1,2,3,4,5,6,7,8,9,10');
	});
});
