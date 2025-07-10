import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';

const TEST_USER_ID = 623087;

describe('inventory.get', () => {
	describe('without user_id parameter', () => {
		test('default parameters (legacy mode)', async () => {
			const response = await sdk.inventory.get();
			console.log(response.data);
			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
		});

		test('new mode (add_legacy=false)', async () => {
			const response = await sdk.inventory.get({ add_legacy: false });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
		});

		test('with user info (legacy mode)', async () => {
			const response = await sdk.inventory.get({ add_user: true });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBeTypeOf('number');
		});

		test('with user info (new mode)', async () => {
			const response = await sdk.inventory.get({
				add_legacy: false,
				add_user: true,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBeTypeOf('number');
		});

		test('with equipped array (legacy mode)', async () => {
			const response = await sdk.inventory.get({ add_equipped: 'array' });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		});

		test('with equipped array (new mode)', async () => {
			const response = await sdk.inventory.get({
				add_legacy: false,
				add_equipped: 'array',
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		});

		test('with equipped tree (legacy mode)', async () => {
			const response = await sdk.inventory.get({ add_equipped: 'tree' });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.equipped).toBeDefined();
			expect(typeof response.data.equipped).toBe('object');
		});

		test('with equipped tree (new mode)', async () => {
			const response = await sdk.inventory.get({
				add_legacy: false,
				add_equipped: 'tree',
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.equipped).toBeDefined();
			expect(typeof response.data.equipped).toBe('object');
		});

		test('all options combined (legacy mode)', async () => {
			const response = await sdk.inventory.get({
				add_user: true,
				add_equipped: 'array',
				include_stock: true,
				order: 'quality',
				count: 5,
				shrink: true,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		});

		test('all options combined (new mode)', async () => {
			const response = await sdk.inventory.get({
				add_legacy: false,
				add_user: true,
				add_equipped: 'tree',
				include_stock: true,
				order: 'time',
				count: 10,
				shrink: false,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.equipped).toBeDefined();
		});
	});

	describe('with user_id parameter', () => {
		test('default parameters (legacy mode)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID);

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
		});

		test('new mode (add_legacy=false)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, { add_legacy: false });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
		});

		test('with user info (legacy mode)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, { add_user: true });

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBe(TEST_USER_ID);
		});

		test('with user info (new mode)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, {
				add_legacy: false,
				add_user: true,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBe(TEST_USER_ID);
		});

		test('with equipped array and user (legacy mode)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, {
				add_user: true,
				add_equipped: 'array',
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.things).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBe(TEST_USER_ID);
			expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		});

		test('with equipped tree and user (new mode)', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, {
				add_legacy: false,
				add_user: true,
				add_equipped: 'tree',
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBe(TEST_USER_ID);
			expect(response.data.equipped).toBeDefined();
		});

		test('string user_id with options', async () => {
			const response = await sdk.inventory.get('user_domain', {
				add_legacy: false,
				count: 3,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
		});

		test('complex scenario with all options', async () => {
			const response = await sdk.inventory.get(TEST_USER_ID, {
				add_legacy: false,
				add_user: true,
				add_equipped: 'array',
				include_stock: false,
				order: 'quality',
				count: 15,
				shrink: true,
			});

			expect(response.success).toBe(true);
			expect(response.data.count).toBeTypeOf('number');
			expect(response.data.items).toBeInstanceOf(Array);
			expect(response.data.collections).toBeInstanceOf(Array);
			expect(response.data.user).toBeDefined();
			expect(response.data.user.user_id).toBe(TEST_USER_ID);
			expect(response.data.item_ids_equipped).toBeInstanceOf(Array);
		});
	});
});
