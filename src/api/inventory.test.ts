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
});

describe('inventory.get (items mode)', () => {
	test('no add_legacy returns things', async () => {
		const response = await sdk.inventory.get(TEST_USER_ID);

		expect(response.success).toBe(true);
		expect(response.data.things).toBeInstanceOf(Array);
	});
});
