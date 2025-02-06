import * as v from 'valibot';
export declare const itemVariantSchema: v.ObjectSchema<{
    readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly unlock: v.OptionalSchema<v.ObjectSchema<{
        readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    }, undefined>, never>;
}, undefined>;
export declare const thingPrototypeSchema: v.ObjectSchema<{
    readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly thing_prototype_status: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly thing_type: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>;
    readonly image: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly title: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly description: v.StringSchema<undefined>;
    readonly group: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>, never>;
    readonly quality: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 5, undefined>]>;
    readonly collection: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly delete_price: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly can_be_upgraded: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly key: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly cases: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly drop: v.OptionalSchema<v.ObjectSchema<{
        readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, never>;
    }, undefined>, never>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        }, undefined>, never>;
    }, undefined>, undefined>, never>;
}, undefined>;
export declare const thingSchema: v.ObjectSchema<{
    readonly thing_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly owned_time: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly can_give: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly can_sell: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, never>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly text: v.OptionalSchema<v.StringSchema<undefined>, never>;
    }, undefined>, never>;
    readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly transactions: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
        readonly money: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>, v.ObjectSchema<{
        readonly numbers: v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly count: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
    }, undefined>], undefined>, never>;
    readonly uses_left: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly uses_origin: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly variants: v.OptionalSchema<v.ObjectSchema<{
        readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        }, undefined>, never>;
    }, undefined>, never>;
    readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly thing_prototype_status: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly thing_type: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>;
    readonly image: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly title: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly description: v.StringSchema<undefined>;
    readonly group: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>, never>;
    readonly quality: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 5, undefined>]>;
    readonly collection: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly delete_price: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly can_be_upgraded: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly key: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly cases: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly drop: v.OptionalSchema<v.ObjectSchema<{
        readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, never>;
    }, undefined>, never>;
}, undefined>;
export declare const itemProtoSchema: v.ObjectSchema<{
    readonly item_proto_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly item_proto_status: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly type: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>;
    readonly image: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly title: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly description: v.StringSchema<undefined>;
    readonly quality_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 5, undefined>]>;
    readonly moneybox: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        }, undefined>, never>;
    }, undefined>, undefined>, never>;
    readonly monopoly_id: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>, never>;
    readonly sticker_group_id: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly collection_id: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly prices: v.OptionalSchema<v.ObjectSchema<{
        readonly buy: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, v.RecordSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>], undefined>, never>;
        readonly quick_sell: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    }, undefined>, never>;
    readonly key_item_proto_id: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly drop: v.OptionalSchema<v.RecordSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, v.UnknownSchema, undefined>, never>;
    readonly can_craft: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>;
declare const itemShortSchema: v.ObjectSchema<{
    readonly item_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly item_ids: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly ts_owned: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly ts_can_trade: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly ts_can_sell: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly souvenir: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly text: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    }, undefined>, never>;
    readonly moneybox: v.OptionalSchema<v.RecordSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, v.UnknownSchema, undefined>, never>;
    readonly seed: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        }, undefined>, never>;
    }, undefined>, undefined>, never>;
    readonly xp_boost: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
}, undefined>;
export declare const itemSchema: v.ObjectSchema<{
    readonly can_delete: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly uses: v.OptionalSchema<v.ObjectSchema<{
        readonly left: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly origin: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    }, undefined>, never>;
    readonly item_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly item_ids: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
    readonly ts_owned: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly ts_can_trade: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly ts_can_sell: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
    readonly souvenir: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly text: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    }, undefined>, never>;
    readonly moneybox: v.OptionalSchema<v.RecordSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, v.UnknownSchema, undefined>, never>;
    readonly seed: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        }, undefined>, never>;
    }, undefined>, undefined>, never>;
    readonly xp_boost: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
}, undefined>;
export type ThingPrototype = v.InferOutput<typeof thingPrototypeSchema>;
export type Thing = v.InferOutput<typeof thingSchema>;
export type ItemProto = v.InferOutput<typeof itemProtoSchema>;
export type Item = v.InferOutput<typeof itemSchema>;
export type ItemShort = v.InferOutput<typeof itemShortSchema>;
export type ItemVariant = v.InferOutput<typeof itemVariantSchema>;
export {};
