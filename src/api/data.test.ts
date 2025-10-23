import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';

describe('data.getItemProtos', () => {
	describe('just item protos', () => {
		test('as array', async () => {
			const response = await sdk.data.getItemProtos([ 1 ]);

			expect(response.success).toBe(true);
			expect(response.data.item_protos instanceof Map).toBe(true);
			expect(response.data.item_protos.get(1)).not.toBeUndefined();
			expect(response.data.item_protos.get(1)?.item_proto_id).toStrictEqual(1);
			expect(response.data.item_protos.get(1)?.collection_id).toStrictEqual(3);

			// collections
			expect(response.data.collections).toStrictEqual([
				{
					collection_id: 3,
					title: 'Коллекция «Tre»',
				},
			]);
		});

		test('as set', async () => {
			const response = await sdk.data.getItemProtos(new Set([ 1 ]));

			expect(response.success).toBe(true);
			expect(response.data.item_protos instanceof Map).toBe(true);
			expect(response.data.item_protos.get(1)).not.toBeUndefined();
			expect(response.data.item_protos.get(1)?.item_proto_id).toStrictEqual(1);
			expect(response.data.item_protos.get(1)?.collection_id).toStrictEqual(3);

			// collections
			expect(response.data.collections).toStrictEqual([
				{
					collection_id: 3,
					title: 'Коллекция «Tre»',
				},
			]);
		});
	});

	test('with legacy properties', async () => {
		const response = await sdk.data.getItemProtos(
			[ 1 ],
			{ add_legacy: true },
		);

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.item_protos.get(1)).not.toBeUndefined();
		expect(response.data.item_protos.get(1)?.item_proto_id).toStrictEqual(1);
		expect(response.data.item_protos.get(1)?.collection_id).toStrictEqual(3);
		// legacy properties
		expect(response.data.item_protos.get(1)?.thing_prototype_id).toStrictEqual(1);
		expect(response.data.item_protos.get(1)?.collection).toStrictEqual(3);

		// collections
		expect(response.data.collections).toStrictEqual([
			{
				collection_id: 3,
				title: 'Коллекция «Tre»',
			},
		]);
	});

	test('with no metadata', async () => {
		const response = await sdk.data.getItemProtos(
			[ 1 ],
			{
				add_legacy: true,
				add_metadata: false,
			},
		);

		expect(response.success).toBe(true);
		expect(response.data instanceof Map).toBe(true);
		expect(response.data.get(1)).not.toBeUndefined();
		expect(response.data.get(1)?.item_proto_id).toStrictEqual(1);
		expect(response.data.get(1)?.collection_id).toStrictEqual(3);
	});
});

describe('data.searchItemProtos', () => {
	test('new year and spectrum red items', async () => {
		const response = await sdk.data.searchItemProtos({
			quality_id: [ 4 ],
			collection_id: [ 49, 54 ],
		});

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.collections.size).toBe(2);
		expect(response.data.collections.get(54)?.title).toBe('Новогодняя коллекция');
		expect(response.data.item_protos.size).toBe(4);
		expect(response.data.item_protos.get(1106)?.title).toBe('Ёлка');
		expect(response.data.item_protos.has(999)).toBe(true);
	});

	test('red drinks', async () => {
		const response = await sdk.data.searchItemProtos({
			quality_id: [ 4 ],
			group_id: [ 4 ],
		});

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.collections.size).toBe(3);
		expect(response.data.collections.get(34)?.title).toBe('Коллекция «Infinity»');
		expect(response.data.item_protos.size).toBe(4);
		expect(response.data.item_protos.get(629)?.title).toBe('Purelosophy');
		expect(response.data.item_protos.has(157)).toBe(true);
	});

	test('31 red badges with offset', async () => {
		const response = await sdk.data.searchItemProtos({
			quality_id: [ 4 ],
			type: [ 5 ],
			count: 31,
			offset: 5,
		});

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.item_protos.size).toBe(31);
		expect(response.data.item_protos.get(284)?.title).toBe('Йода');
		expect(response.data.item_protos.has(1111)).toBe(true);
		expect(response.data.item_protos.has(1112)).toBe(false);
	});

	test('no items', async () => {
		const response = await sdk.data.searchItemProtos({
			quality_id: [ 5 ],
			collection_id: [ 54 ],
		});

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.collections instanceof Map).toBe(true);
		expect(response.data.item_protos.size).toBe(0);
		expect(response.data.collections.size).toBe(0);
	});

	test('stickers', async () => {
		const response = await sdk.data.searchItemProtos({
			// collection_id: [ 1, 2, 3 ],
			type: [ 9 ],
			quality_id: [ 5 ],
		});

		expect(response.success).toBe(true);
		expect(response.data.item_protos instanceof Map).toBe(true);
		expect(response.data.collections instanceof Map).toBe(true);
		expect(response.data.item_protos.get(846)?.collection_id).toBeUndefined();
		expect(response.data.item_protos.get(880)?.sticker_group_id).toBe(100);
	});
});
