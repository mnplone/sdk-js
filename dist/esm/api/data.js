import { array, number, object, pipe, string, transform, } from 'valibot';
import { valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, } from '../valibot/items.js';
export class M1ApiData {
    baseClient;
    // eslint-disable-next-line no-useless-constructor
    constructor(baseClient) {
        this.baseClient = baseClient;
        // do nothing
        // win
    }
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
    getItemProtos(item_proto_ids, options) {
        const add_legacy = options?.add_legacy === true;
        const add_metadata = options?.add_metadata !== false;
        const valiCurrentItemProtosSchema = pipe(array(add_legacy
            ? valiObjectItemProtoLegacySchema
            : valiObjectItemProtoSchema), transform((value) => new Map(value.map((item_proto) => [
            item_proto.item_proto_id,
            item_proto,
        ]))));
        return this.baseClient.callMethod({
            http_method: 'GET',
            api_method: 'data.getItemProtos',
            data: {
                item_proto_ids: [...item_proto_ids].join(','),
                add_legacy: Number(add_legacy),
                add_metadata: Number(add_metadata),
            },
            valiResponseSchema: add_metadata
                ? object({
                    item_protos: valiCurrentItemProtosSchema,
                    collections: array(object({
                        collection_id: number(),
                        title: string(),
                    })),
                })
                : pipe(object({
                    item_protos: valiCurrentItemProtosSchema,
                }), transform((value) => value.item_protos)),
        });
    }
}
