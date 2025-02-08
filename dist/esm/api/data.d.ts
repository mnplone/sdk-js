import { type M1 } from '../m1.js';
import { type ApiResponse } from '../types.js';
import { type ItemProto, type ThingPrototype } from '../valibot/items.js';
export declare class M1ApiData {
    private baseClient;
    constructor(baseClient: M1);
    /**
     * Returns item prototypes by their IDs.
     * @param item_proto_ids - The IDs of the item prototypes.
     * @returns -
     */
    getItemProtos(item_proto_ids: number[] | Set<number> | IterableIterator<number>): Promise<ApiResponse<{
        item_protos: Map<number, ItemProto>;
        collections: {
            collection_id: number;
            title: string;
        }[];
    }>>;
    /**
     * Returns item prototypes by their IDs.
     * @param item_proto_ids - The IDs of the item prototypes.
     * @param options -
     * @param options.add_legacy - Whether to add properties from the legacy `ThingPrototype` interface.
     * @returns -
     */
    getItemProtos(item_proto_ids: number[] | Set<number> | IterableIterator<number>, options: {
        add_legacy: true;
    }): Promise<ApiResponse<{
        item_protos: Map<number, ItemProto & ThingPrototype>;
        collections: {
            collection_id: number;
            title: string;
        }[];
    }>>;
    /**
     * Returns item prototypes by their IDs.
     * @param item_proto_ids - The IDs of the item prototypes.
     * @param options -
     * @param options.add_metadata - Whether to return metadata along with the item prototypes.
     * @returns -
     */
    getItemProtos(item_proto_ids: number[] | Set<number> | IterableIterator<number>, options: {
        add_metadata: false;
    }): Promise<ApiResponse<Map<number, ItemProto>>>;
    /**
     * Returns item prototypes by their IDs.
     * @param item_proto_ids - The IDs of the item prototypes.
     * @param options -
     * @param options.add_legacy - Whether to add properties from the legacy `ThingPrototype` interface.
     * @param options.add_metadata - Whether to return metadata along with the item prototypes.
     * @returns -
     */
    getItemProtos(item_proto_ids: number[] | Set<number> | IterableIterator<number>, options: {
        add_legacy: true;
        add_metadata: false;
    }): Promise<ApiResponse<Map<number, ItemProto & ThingPrototype>>>;
}
