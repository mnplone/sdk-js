import { type InferOutput } from 'valibot';
export declare const valiObjectItemVariantSchema: import("valibot").ObjectSchema<{
    readonly id: import("valibot").NumberSchema<undefined>;
    readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export declare const valiObjectThingPrototypeSchema: import("valibot").ObjectSchema<{
    readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
    readonly thing_prototype_status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
    readonly thing_type: import("valibot").NumberSchema<undefined>;
    readonly image: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").StringSchema<undefined>;
    readonly group: import("valibot").OptionalSchema<import("valibot").SchemaWithPipe<readonly [import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, import("valibot").TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: import("valibot").NumberSchema<undefined>;
    readonly collection: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly can_be_upgraded: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly key: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cases: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
        readonly hidden: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
export declare const valiObjectThingSchema: import("valibot").ObjectSchema<{
    readonly thing_id: import("valibot").NumberSchema<undefined>;
    readonly user_id: import("valibot").NumberSchema<undefined>;
    readonly owned_time: import("valibot").NumberSchema<undefined>;
    readonly can_give: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly can_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly souvenir: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly autograph: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly user_id: import("valibot").NumberSchema<undefined>;
        readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").ObjectSchema<{
        readonly transactions: import("valibot").NumberSchema<undefined>;
        readonly money: import("valibot").NumberSchema<undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly numbers: import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly count: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly uses_left: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly uses_origin: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
    readonly thing_prototype_status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
    readonly thing_type: import("valibot").NumberSchema<undefined>;
    readonly image: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").StringSchema<undefined>;
    readonly group: import("valibot").OptionalSchema<import("valibot").SchemaWithPipe<readonly [import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, import("valibot").TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: import("valibot").NumberSchema<undefined>;
    readonly collection: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly can_be_upgraded: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly key: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cases: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
        readonly hidden: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export declare const valiObjectItemProtoSchema: import("valibot").ObjectSchema<{
    readonly item_proto_id: import("valibot").NumberSchema<undefined>;
    readonly item_proto_status: import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0>;
    readonly type: import("valibot").NumberSchema<undefined>;
    readonly image: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").StringSchema<undefined>;
    readonly quality_id: import("valibot").NumberSchema<undefined>;
    readonly moneybox: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly collection_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly buy: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").NumberSchema<undefined>, import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").NumberSchema<undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").UnknownSchema, undefined>, undefined>;
    readonly can_craft: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
}, undefined>;
declare const valiObjectItemShortSchema: import("valibot").ObjectSchema<{
    readonly item_id: import("valibot").NumberSchema<undefined>;
    readonly item_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: import("valibot").NumberSchema<undefined>;
    readonly ts_can_trade: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly souvenir: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly autograph: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly user_id: import("valibot").NumberSchema<undefined>;
        readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").UnknownSchema, undefined>, undefined>;
    readonly seed: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export declare const valiObjectItemSchema: import("valibot").ObjectSchema<{
    readonly can_delete: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly previous_owners_user_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly uses: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly left: import("valibot").NumberSchema<undefined>;
        readonly origin: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly item_id: import("valibot").NumberSchema<undefined>;
    readonly item_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: import("valibot").NumberSchema<undefined>;
    readonly ts_can_trade: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly souvenir: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly autograph: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly user_id: import("valibot").NumberSchema<undefined>;
        readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").UnknownSchema, undefined>, undefined>;
    readonly seed: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export declare const valiObjectItemProtoLegacySchema: import("valibot").ObjectSchema<{
    readonly item_proto_id: import("valibot").NumberSchema<undefined>;
    readonly item_proto_status: import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0>;
    readonly type: import("valibot").NumberSchema<undefined>;
    readonly image: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").StringSchema<undefined>;
    readonly quality_id: import("valibot").NumberSchema<undefined>;
    readonly moneybox: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly is_default: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_selected: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly collection_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly buy: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").NumberSchema<undefined>, import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").NumberSchema<undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").UnknownSchema, undefined>, undefined>;
    readonly can_craft: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
    readonly thing_prototype_status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
    readonly thing_type: import("valibot").NumberSchema<undefined>;
    readonly group: import("valibot").OptionalSchema<import("valibot").SchemaWithPipe<readonly [import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, import("valibot").TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: import("valibot").NumberSchema<undefined>;
    readonly collection: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly can_be_upgraded: import("valibot").SchemaWithPipe<readonly [import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly key: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cases: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
}, undefined>;
export type ThingPrototype = InferOutput<typeof valiObjectThingPrototypeSchema>;
export type Thing = InferOutput<typeof valiObjectThingSchema>;
export type ItemProto = InferOutput<typeof valiObjectItemProtoSchema>;
export type Item = InferOutput<typeof valiObjectItemSchema>;
export type ItemShort = InferOutput<typeof valiObjectItemShortSchema>;
export type ItemVariant = InferOutput<typeof valiObjectItemVariantSchema>;
export {};
