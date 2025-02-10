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
