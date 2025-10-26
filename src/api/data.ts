import * as v from 'valibot';
import { type ApiResponse } from '../types.js';
import { valiResponseDataSearchItemProtosSchema } from '../valibot/data.js';
import {
	type ItemProto,
	type ThingPrototype,
	valiObjectItemProtoLegacySchema,
	valiObjectItemProtoSchema,
} from '../valibot/items.js';
import { M1ApiBase } from './base.js';

export class M1ApiData extends M1ApiBase {
	/**
	 * Returns item prototypes by their IDs.
	 * @param item_proto_ids - The IDs of the item prototypes.
	 * @returns -
	 */
	getItemProtos(
		item_proto_ids: number[] | Set<number> | IterableIterator<number>,
	): Promise<
		ApiResponse<{
			item_protos: Map<number, ItemProto>;
			collections: {
				collection_id: number;
				title: string;
			}[];
		}>
	>;
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
	): Promise<
		ApiResponse<{
			item_protos: Map<number, ItemProto & ThingPrototype>;
			collections: {
				collection_id: number;
				title: string;
			}[];
		}>
	>;
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
			add_legacy: true;
			add_metadata: false;
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
		item_proto_ids: number[] | Set<number> | IterableIterator<number>,
		options?: {
			add_legacy?: true;
			add_metadata?: false;
		},
	) {
		const add_legacy = options?.add_legacy === true;
		const add_metadata = options?.add_metadata !== false;

		const valiCurrentItemProtosSchema = v.pipe(
			v.array(
				add_legacy
					? valiObjectItemProtoLegacySchema
					: valiObjectItemProtoSchema,
			),
			v.transform(
				(value) =>
					new Map(
						value.map((item_proto) => [item_proto.item_proto_id, item_proto]),
					),
			),
		);

		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'data.getItemProtos',
			data: {
				item_proto_ids: [...item_proto_ids].join(','),
				add_legacy: Number(add_legacy),
				add_metadata: Number(add_metadata),
			},
			valiResponseSchema: add_metadata
				? v.object({
						item_protos: valiCurrentItemProtosSchema,
						collections: v.array(
							v.object({
								collection_id: v.number(),
								title: v.string(),
							}),
						),
					})
				: v.pipe(
						v.object({
							item_protos: valiCurrentItemProtosSchema,
						}),
						v.transform((value) => value.item_protos),
					),
		});
	}

	/**
	 * Return item prototypes by their properties.
	 * @param options =
	 * @param options.type -
	 * @param options.quality_id -
	 * @param options.collection_id -
	 * @param options.group_id -
	 * @param options.offset -
	 * @param options.count -
	 * @returns -
	 */
	searchItemProtos(options: {
		type?: number[];
		quality_id?: number[];
		collection_id?: number[];
		group_id?: number[];
		offset?: number;
		count?: number;
	}) {
		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'data.searchItemProtos',
			data: {
				type: options.type?.join(','),
				quality_id: options.quality_id?.join(','),
				collection_id: options.collection_id?.join(','),
				group_id: options.group_id?.join(','),
				offset: options.offset,
				count: options.count,
			},
			valiResponseSchema: valiResponseDataSearchItemProtosSchema,
		});
	}
}
