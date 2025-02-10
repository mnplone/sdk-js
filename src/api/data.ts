import {
	array,
	number,
	object,
	pipe,
	string,
	transform,
} from 'valibot';
import { type M1 } from '../m1.js';
import { type ApiResponse } from '../types.js';
import {
	valiObjectItemProtoLegacySchema,
	valiObjectItemProtoSchema,
	type ItemProto,
	type ThingPrototype,
} from '../valibot/items.js';

export class M1ApiData {
	// eslint-disable-next-line no-useless-constructor
	constructor(protected baseClient: M1) {
		// do nothing
		// win
	}

	/**
	 * Returns item prototypes by their IDs.
	 * @param item_proto_ids - The IDs of the item prototypes.
	 * @returns -
	 */
	getItemProtos(item_proto_ids: number[] | Set<number> | IterableIterator<number>): Promise<ApiResponse<{
		item_protos: Map<number, ItemProto>,
		collections: {
			collection_id: number,
			title: string,
		}[],
	}>>;
	/**
	 * Returns item prototypes by their IDs.
	 * @param item_proto_ids - The IDs of the item prototypes.
	 * @param options -
	 * @param options.add_legacy - Whether to add properties from the legacy `ThingPrototype` interface.
	 * @returns -
	 */
	getItemProtos(
		item_proto_ids: number[] | Set<number> | IterableIterator<number>,
		options: { add_legacy: true },
	): Promise<ApiResponse<{
		item_protos: Map<number, ItemProto & ThingPrototype>,
		collections: {
			collection_id: number,
			title: string,
		}[],
	}>>;
	/**
	 * Returns item prototypes by their IDs.
	 * @param item_proto_ids - The IDs of the item prototypes.
	 * @param options -
	 * @param options.add_metadata - Whether to return metadata along with the item prototypes.
	 * @returns -
	 */
	getItemProtos(
		item_proto_ids: number[] | Set<number> | IterableIterator<number>,
		options: { add_metadata: false },
	): Promise<ApiResponse<Map<number, ItemProto>>>;
	/**
	 * Returns item prototypes by their IDs.
	 * @param item_proto_ids - The IDs of the item prototypes.
	 * @param options -
	 * @param options.add_legacy - Whether to add properties from the legacy `ThingPrototype` interface.
	 * @param options.add_metadata - Whether to return metadata along with the item prototypes.
	 * @returns -
	 */
	getItemProtos(
		item_proto_ids: number[] | Set<number> | IterableIterator<number>,
		options: {
			add_legacy: true,
			add_metadata: false,
		},
	): Promise<ApiResponse<Map<number, ItemProto & ThingPrototype>>>;
	// generic for typescript 5.8
	// getItemProtos<
	// 	const OL extends boolean | undefined = undefined,
	// 	const OM extends boolean | undefined = undefined,
	// 	IP = OL extends true ? ItemProto & ThingPrototype : ItemProto,
	// 	R = OM extends true
	// 		? {
	// 			item_protos: Map<number, IP>,
	// 			collections: {
	// 				collection_id: number,
	// 				title: string,
	// 			}[],
	// 		}
	// 		: Map<number, IP>,
	// >(
	getItemProtos(
		item_proto_ids: number[]
			| Set<number>
			| IterableIterator<number>,
		options?: {
			add_legacy?: true,
			add_metadata?: false,
		},
	) {
		const add_legacy = options?.add_legacy === true;
		const add_metadata = options?.add_metadata !== false;

		const valiCurrentItemProtosSchema = pipe(
			array(
				add_legacy
					? valiObjectItemProtoLegacySchema
					: valiObjectItemProtoSchema,
			),
			transform((value) => new Map(
				value.map((item_proto) => [
					item_proto.item_proto_id,
					item_proto,
				]),
			)),
		);

		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'data.getItemProtos',
			data: {
				item_proto_ids: [ ...item_proto_ids ].join(','),
				add_legacy: Number(add_legacy),
				add_metadata: Number(add_metadata),
			},
			valiResponseSchema: add_metadata
				? object({
					item_protos: valiCurrentItemProtosSchema,
					collections: array(
						object({
							collection_id: number(),
							title: string(),
						}),
					),
				})
				: pipe(
					object({
						item_protos: valiCurrentItemProtosSchema,
					}),
					transform((value) => value.item_protos),
				),
		});
	}
}
