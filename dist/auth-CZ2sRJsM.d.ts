import * as v from 'valibot';
import { InferOutput } from 'valibot';
import { ExtWSClient } from '@extws/client';
import { If } from 'type-fest';

declare const valiObjectSessionSchema: v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly access_token: v.StringSchema<undefined>;
    readonly expires_in: v.NumberSchema<undefined>;
    readonly refresh_token: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
}, undefined>;
declare const valiResponseTotpSessionTokenSchema: v.ObjectSchema<{
    readonly totp_session_token: v.StringSchema<undefined>;
}, undefined>;
type TotpSessionToken = v.InferOutput<typeof valiResponseTotpSessionTokenSchema>;
type Session = v.InferOutput<typeof valiObjectSessionSchema>;

declare class M1ApiBase {
    protected baseClient: M1;
    constructor(baseClient: M1);
}

declare class M1ApiBots extends M1ApiBase {
    /**
     * Creates a new bot.
     * @param nick - A nickname of a new bot.
     * @returns -
     */
    create(nick: string): Promise<ApiResponse<{
        user_id: number;
    }>>;
    /**
     * Generates access_token for a bot.
     * @param user_id - The ID of the bot.
     * @param ip - The IP address (IPv4 or IPv6).
     * @returns -
     */
    getToken(user_id: number, ip?: string): Promise<ApiResponse<Session>>;
}

declare const valiObjectItemVariantSchema: v.ObjectSchema<{
    readonly id: v.NumberSchema<undefined>;
    readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly unlock: v.OptionalSchema<v.ObjectSchema<{
        readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ItemVariant = v.InferOutput<typeof valiObjectItemVariantSchema>;
declare const valiObjectThingPrototypeSchema: v.ObjectSchema<{
    readonly thing_prototype_id: v.NumberSchema<undefined>;
    readonly thing_prototype_status: v.NumberSchema<undefined>;
    readonly thing_type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: v.NumberSchema<undefined>;
    readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ThingPrototype = v.InferOutput<typeof valiObjectThingPrototypeSchema>;
declare const valiObjectThingSchema: v.ObjectSchema<{
    readonly thing_id: v.NumberSchema<undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly owned_time: v.NumberSchema<undefined>;
    readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly transactions: v.NumberSchema<undefined>;
        readonly money_inside: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly count: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly thing_prototype_id: v.NumberSchema<undefined>;
    readonly thing_prototype_status: v.NumberSchema<undefined>;
    readonly thing_type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: v.NumberSchema<undefined>;
    readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type Thing = v.InferOutput<typeof valiObjectThingSchema>;
declare const valiObjectItemProtoSchema: v.ObjectSchema<{
    readonly item_proto_id: v.NumberSchema<undefined>;
    readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
    readonly type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly quality_id: v.NumberSchema<undefined>;
    readonly moneybox: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: v.OptionalSchema<v.ObjectSchema<{
        readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
            readonly use_count: v.NumberSchema<undefined>;
            readonly price: v.NumberSchema<undefined>;
        }, undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, v.TransformAction<{
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[], {
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[]>]>, undefined>;
    readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>;
type ItemProto = v.InferOutput<typeof valiObjectItemProtoSchema>;
declare const valiObjectItemShortSchema: v.ObjectSchema<{
    readonly item_id: v.NumberSchema<undefined>;
    readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: v.NumberSchema<undefined>;
    readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
    readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly item_proto_id: v.NumberSchema<undefined>;
    readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
    readonly type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly quality_id: v.NumberSchema<undefined>;
    readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: v.OptionalSchema<v.ObjectSchema<{
        readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
            readonly use_count: v.NumberSchema<undefined>;
            readonly price: v.NumberSchema<undefined>;
        }, undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, v.TransformAction<{
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[], {
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[]>]>, undefined>;
    readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>;
type ItemShort = v.InferOutput<typeof valiObjectItemShortSchema>;
declare const valiObjectItemSchema: v.ObjectSchema<{
    readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly uses: v.OptionalSchema<v.ObjectSchema<{
        readonly left: v.NumberSchema<undefined>;
        readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly item_id: v.NumberSchema<undefined>;
    readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: v.NumberSchema<undefined>;
    readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly autograph: v.OptionalSchema<v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
    readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly item_proto_id: v.NumberSchema<undefined>;
    readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
    readonly type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly quality_id: v.NumberSchema<undefined>;
    readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: v.OptionalSchema<v.ObjectSchema<{
        readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
            readonly use_count: v.NumberSchema<undefined>;
            readonly price: v.NumberSchema<undefined>;
        }, undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, v.TransformAction<{
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[], {
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[]>]>, undefined>;
    readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>;
type Item = v.InferOutput<typeof valiObjectItemSchema>;
declare const valiObjectItemProtoLegacySchema: v.ObjectSchema<{
    readonly item_proto_id: v.NumberSchema<undefined>;
    readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
    readonly type: v.NumberSchema<undefined>;
    readonly image: v.StringSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly description: v.StringSchema<undefined>;
    readonly quality_id: v.NumberSchema<undefined>;
    readonly moneybox: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly unlock: v.OptionalSchema<v.ObjectSchema<{
            readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: v.OptionalSchema<v.ObjectSchema<{
        readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
            readonly use_count: v.NumberSchema<undefined>;
            readonly price: v.NumberSchema<undefined>;
        }, undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
        readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, v.TransformAction<{
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[], {
        item_proto_id?: number | undefined;
        is_primary?: boolean | undefined;
        is_rare?: number | undefined;
        is_secondary?: number | undefined;
    }[]>]>, undefined>;
    readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly thing_prototype_id: v.NumberSchema<undefined>;
    readonly thing_prototype_status: v.NumberSchema<undefined>;
    readonly thing_type: v.NumberSchema<undefined>;
    readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: v.NumberSchema<undefined>;
    readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
}, undefined>;

declare class M1ApiData extends M1ApiBase {
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
    searchItemProtos(options: {
        type?: number[];
        quality_id?: number[];
        collection_id?: number[];
        group_id?: number[];
        offset?: number;
        count?: number;
    }): Promise<CallMethodResponse<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly item_protos: v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.NumberSchema<undefined>;
            readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
            readonly type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly quality_id: v.NumberSchema<undefined>;
            readonly moneybox: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly prices: v.OptionalSchema<v.ObjectSchema<{
                readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                    readonly use_count: v.NumberSchema<undefined>;
                    readonly price: v.NumberSchema<undefined>;
                }, undefined>, undefined>], undefined>, undefined>;
                readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, v.TransformAction<{
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[], {
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[]>]>, undefined>;
            readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        }, undefined>, undefined>;
        readonly collections: v.ArraySchema<v.ObjectSchema<{
            readonly collection_id: v.NumberSchema<undefined>;
            readonly id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly title: v.StringSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, v.TransformAction<{
        item_protos: {
            item_proto_id: number;
            item_proto_status: 0 | 1 | 2;
            type: number;
            image: string;
            title: string;
            description: string;
            quality_id: number;
            moneybox: boolean;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            monopoly_id?: number | undefined;
            sticker_group_id?: number | undefined;
            collection_id?: number | undefined;
            twin_item_proto_ids?: number[] | undefined;
            prices?: {
                buy?: number | {
                    use_count: number;
                    price: number;
                }[] | undefined;
                quick_sell?: number | undefined;
            } | undefined;
            key_item_proto_id?: number | undefined;
            case_item_proto_ids?: number[] | undefined;
            drop?: {
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
            can_craft: boolean;
        }[];
        collections: {
            collection_id: number;
            id?: number | undefined;
            title: string;
        }[];
    }, {
        item_protos: Map<number, {
            item_proto_id: number;
            item_proto_status: 0 | 1 | 2;
            type: number;
            image: string;
            title: string;
            description: string;
            quality_id: number;
            moneybox: boolean;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            monopoly_id?: number | undefined;
            sticker_group_id?: number | undefined;
            collection_id?: number | undefined;
            twin_item_proto_ids?: number[] | undefined;
            prices?: {
                buy?: number | {
                    use_count: number;
                    price: number;
                }[] | undefined;
                quick_sell?: number | undefined;
            } | undefined;
            key_item_proto_id?: number | undefined;
            case_item_proto_ids?: number[] | undefined;
            drop?: {
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
            can_craft: boolean;
        }>;
        collections: Map<number, {
            collection_id: number;
            id?: number | undefined;
            title: string;
        }>;
    }>]>, undefined>>;
}

declare const valiResponseFriendsGetBaseSchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly friends: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetBase = InferOutput<typeof valiResponseFriendsGetBaseSchema>;
declare const valiResponseFriendsGetWithUserSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly friends: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetWithUser = InferOutput<typeof valiResponseFriendsGetWithUserSchema>;
declare const valiResponseFriendsGetShortSchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly friends: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
declare const valiResponseFriendsGetShortWithUserSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly friends: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetShortWithUser = InferOutput<typeof valiResponseFriendsGetShortWithUserSchema>;
type ResponseFriendsGet<S extends boolean, U extends boolean> = If<S, If<U, ResponseFriendsGetShortWithUser, ResponseFriendsGetShort>, If<U, ResponseFriendsGetWithUser, ResponseFriendsGetBase>>;
declare const valiResponseFriendsGetRequestsSchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly requests: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
declare const valiResponseFriendsGetRequestsShortSchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly requests: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;

type FriendsGetOptions<OS extends boolean, OU extends boolean> = {
    online?: boolean;
    short?: OS;
    add_user?: OU;
    offset?: number;
    count?: number;
};
declare class M1ApiFriends extends M1ApiBase {
    /**
     * Adds a friend.
     * @param user_id - The ID of the user to add.
     * @returns -
     */
    add(user_id: number): Promise<ApiResponse<void>>;
    /**
     * Deletes a friend.
     * @param user_id - The ID of the user to delete.
     * @returns -
     */
    delete(user_id: number): Promise<ApiResponse<void>>;
    /**
     * Returns a list of friend requests.
     * @param options -
     * @param options.count The number of requests to return.
     * @param options.offset The number of requests to skip.
     * @param options.short Whether to return a short list of requests.
     * @returns A list of friend requests and their count.
     */
    getRequests(options: {
        count?: number;
        offset?: number;
        short: true;
    }): Promise<ApiResponse<ResponseFriendsGetRequestsShort>>;
    /**
     * Returns a list of friends.
     * @param options -
     * @param options.count The number of friends to return.
     * @param options.offset The number of friends to skip.
     * @param options.short Whether to return a short list of friends.
     * @returns A list of friends and their count.
     */
    getRequests(options?: {
        count?: number;
        offset?: number;
    }): Promise<ApiResponse<ResponseFriendsGetRequests>>;
    /**
     * Returns a list of friends.
     * @param options -
     * @param options.count The number of friends to return.
     * @param options.offset The number of friends to skip.
     * @param options.short Whether to return a short list of friends.
     * @param options.add_user Whether to add user information to the response.
     * @param options.online Whether to return only online friends.
     * @returns A list of friends and their count.
     */
    get<const OS extends boolean, const OU extends boolean>(options?: FriendsGetOptions<OS, OU>): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
    /**
     * Returns a list of friends.
     * @param user_id - The ID of the user whose friends to get.
     * @param options -
     * @param options.count The number of friends to return.
     * @param options.offset The number of friends to skip.
     * @param options.short Whether to return a short list of friends.
     * @param options.add_user Whether to add user information to the response.
     * @param options.online Whether to return only online friends.
     * @returns A list of friends and their count.
     */
    get<const OS extends boolean, const OU extends boolean>(user_id: number | string, options?: FriendsGetOptions<OS, OU>): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
}

declare const valiObjectGchatMessageBaseSchema: v.ObjectSchema<{
    readonly msg_id: v.StringSchema<undefined>;
    readonly ts: v.NumberSchema<undefined>;
    readonly user_id: v.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectGchatMessageAdditionalDataSchema: v.VariantSchema<"type", [v.ObjectSchema<{
    readonly type: v.LiteralSchema<1, undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly is_public: v.OptionalSchema<v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>, undefined>;
    readonly user_ids_mentioned: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<2, undefined>;
    readonly case_item_proto_id: v.NumberSchema<undefined>;
    readonly drop_item_proto_id: v.NumberSchema<undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<3, undefined>;
    readonly user_id_receiver: v.NumberSchema<undefined>;
    readonly item_proto_id: v.NumberSchema<undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<4, undefined>;
    readonly item_proto_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>;
declare const valiObjectGchatMessageSchema: v.IntersectSchema<[v.ObjectSchema<{
    readonly msg_id: v.StringSchema<undefined>;
    readonly ts: v.NumberSchema<undefined>;
    readonly user_id: v.NumberSchema<undefined>;
}, undefined>, v.VariantSchema<"type", [v.ObjectSchema<{
    readonly type: v.LiteralSchema<1, undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly is_public: v.OptionalSchema<v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>, undefined>;
    readonly user_ids_mentioned: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<2, undefined>;
    readonly case_item_proto_id: v.NumberSchema<undefined>;
    readonly drop_item_proto_id: v.NumberSchema<undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<3, undefined>;
    readonly user_id_receiver: v.NumberSchema<undefined>;
    readonly item_proto_id: v.NumberSchema<undefined>;
}, undefined>, v.ObjectSchema<{
    readonly type: v.LiteralSchema<4, undefined>;
    readonly item_proto_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>], undefined>;
type GchatMessage = v.InferOutput<typeof valiObjectGchatMessageSchema>;
declare const valiResponseGchatGetSchema: v.ObjectSchema<{
    readonly messages: v.ArraySchema<v.IntersectSchema<[v.ObjectSchema<{
        readonly msg_id: v.StringSchema<undefined>;
        readonly ts: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
    }, undefined>, v.VariantSchema<"type", [v.ObjectSchema<{
        readonly type: v.LiteralSchema<1, undefined>;
        readonly text: v.StringSchema<undefined>;
        readonly is_public: v.OptionalSchema<v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>, undefined>;
        readonly user_ids_mentioned: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<2, undefined>;
        readonly case_item_proto_id: v.NumberSchema<undefined>;
        readonly drop_item_proto_id: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<3, undefined>;
        readonly user_id_receiver: v.NumberSchema<undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<4, undefined>;
        readonly item_proto_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>], undefined>, undefined>;
    readonly status: v.ObjectSchema<{
        readonly closed: v.BooleanSchema<undefined>;
        readonly slowmode: v.BooleanSchema<undefined>;
        readonly emoteonly: v.BooleanSchema<undefined>;
    }, undefined>;
    readonly users: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
    readonly item_protos: v.ArraySchema<v.ObjectSchema<{
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly moneybox: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseGchatGet = v.InferOutput<typeof valiResponseGchatGetSchema>;
declare const valiResponseGchatSendSchema: v.ObjectSchema<{
    readonly msg_id: v.StringSchema<undefined>;
}, undefined>;
type ResponseGchatSend = v.InferOutput<typeof valiResponseGchatSendSchema>;

declare class M1ApiGchat extends M1ApiBase {
    /**
     * Get chat messages.
     * @returns Returns gchat status, messages and its users and item_protos.
     */
    get(): Promise<ApiResponse<ResponseGchatGet>>;
    /**
     * Send a message to the chat.
     * @param message The message to send.
     * @returns Message id.
     */
    send(message: string): Promise<ApiResponse<ResponseGchatSend>>;
    /**
     * Send a message to the chat.
     * @param message The message to send.
     * @param options -
     * @param options.is_public Whether the message is public.
     * @returns Message id.
     */
    send(message: string, options: {
        is_public: boolean;
    }): Promise<ApiResponse<ResponseGchatSend>>;
}

declare const valiResponseImSendSchema: v.ObjectSchema<{
    readonly msg_id: v.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectMessageSchema: v.ObjectSchema<{
    readonly msg_id: v.NumberSchema<undefined>;
    readonly is_read: v.NumberSchema<undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly ts_created: v.NumberSchema<undefined>;
    readonly type: v.NumberSchema<undefined>;
    readonly user_id: v.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectDialogSchema: v.ObjectSchema<{
    readonly message: v.ObjectSchema<{
        readonly msg_id: v.NumberSchema<undefined>;
        readonly is_read: v.NumberSchema<undefined>;
        readonly text: v.StringSchema<undefined>;
        readonly ts_created: v.NumberSchema<undefined>;
        readonly type: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
    }, undefined>;
    readonly new_counter: v.NumberSchema<undefined>;
    readonly user_id: v.NumberSchema<undefined>;
}, undefined>;
declare const valiResponseImDialogsGetSchema: v.ObjectSchema<{
    readonly dialogs: v.ArraySchema<v.ObjectSchema<{
        readonly message: v.ObjectSchema<{
            readonly msg_id: v.NumberSchema<undefined>;
            readonly is_read: v.NumberSchema<undefined>;
            readonly text: v.StringSchema<undefined>;
            readonly ts_created: v.NumberSchema<undefined>;
            readonly type: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
        }, undefined>;
        readonly new_counter: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly sync: v.ObjectSchema<{
        readonly events: v.ArraySchema<v.ObjectSchema<{
            readonly chain: v.ArraySchema<v.UnionSchema<[v.NumberSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
            readonly data: v.ObjectSchema<{
                readonly type: v.NumberSchema<undefined>;
                readonly msg_id: v.NumberSchema<undefined>;
                readonly dialog: v.ObjectSchema<{
                    readonly user_id: v.NumberSchema<undefined>;
                }, undefined>;
            }, undefined>;
        }, undefined>, undefined>;
        readonly dialogs: v.ArraySchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly new_counter: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
        readonly messages: v.ArraySchema<v.ObjectSchema<{
            readonly msg_id: v.NumberSchema<undefined>;
            readonly is_read: v.NumberSchema<undefined>;
            readonly text: v.StringSchema<undefined>;
            readonly ts_created: v.NumberSchema<undefined>;
            readonly type: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly users_data: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
declare const valiResponseImHistoryGetSchema: v.ObjectSchema<{
    readonly messages: v.ArraySchema<v.ObjectSchema<{
        readonly msg_id: v.NumberSchema<undefined>;
        readonly is_read: v.NumberSchema<undefined>;
        readonly text: v.StringSchema<undefined>;
        readonly ts_created: v.NumberSchema<undefined>;
        readonly type: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly sync: v.ObjectSchema<{
        readonly events: v.ArraySchema<v.ObjectSchema<{
            readonly chain: v.ArraySchema<v.UnionSchema<[v.NumberSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
            readonly data: v.ObjectSchema<{
                readonly type: v.NumberSchema<undefined>;
                readonly msg_id: v.NumberSchema<undefined>;
                readonly dialog: v.ObjectSchema<{
                    readonly user_id: v.NumberSchema<undefined>;
                }, undefined>;
            }, undefined>;
        }, undefined>, undefined>;
        readonly dialogs: v.ArraySchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly new_counter: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
        readonly messages: v.ArraySchema<v.ObjectSchema<{
            readonly msg_id: v.NumberSchema<undefined>;
            readonly is_read: v.NumberSchema<undefined>;
            readonly text: v.StringSchema<undefined>;
            readonly ts_created: v.NumberSchema<undefined>;
            readonly type: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly users_data: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ResponseImSend = InferOutput<typeof valiResponseImSendSchema>;
type ResponseImDialogsGet = InferOutput<typeof valiResponseImDialogsGetSchema>;
type ResponseImHistoryGet = InferOutput<typeof valiResponseImHistoryGetSchema>;
type Dialog = InferOutput<typeof valiObjectDialogSchema>;
type Message = InferOutput<typeof valiObjectMessageSchema>;

type ImSendOptions = {
    send_id?: string;
};
declare class M1ApiIm extends M1ApiBase {
    /**
     * Sends a text message to a user or a group chat
     * @param options -
     * @param options.user_id - The user ID of the recipient
     * @param options.text - The message text
     * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
     * @returns - The message ID
     */
    send(options: {
        user_id: number;
        text: string;
    } & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
    /**
     * Sends a text message to a group chat
     * @param options -
     * @param options.chat_id - The chat ID
     * @param options.text - The message text
     * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
     * @returns - The message ID
     */
    send(options: {
        chat_id: number;
        text: string;
    } & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
    /**
     * Sends an image to a user
     * @param options -
     * @param options.user_id - The user ID of the recipient
     * @param options.image_token - The image token
     * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
     * @returns - The message ID
     */
    send(options: {
        user_id: number;
        image_token: string;
    } & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
    /**
     * Sends an image to a group chat
     * @param options -
     * @param options.chat_id - The chat ID
     * @param options.image_token - The image token
     * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
     * @returns - The message ID
     */
    send(options: {
        chat_id: number;
        image_token: string;
    } & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
    /**
     * Get dialogs
     * @param options -
     * @param options.id_last -
     * @param options.offset -
     * @param options.count -
     * @returns -
     */
    getDialogs(options?: {
        id_last?: string;
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ResponseImDialogsGet>>;
    /**
     * Get history
     * @param user_id -
     * @param options -
     * @param options.id_last -
     * @param options.offset -
     * @param options.count -
     * @returns -
     */
    getHistory(user_id: number, options?: {
        id_last?: string;
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ResponseImHistoryGet>>;
    /**
     * Send an im.sync ws request
     * @param id_last -
     */
    sync(id_last: number): void;
}

declare const valiResponseInventoryCraftSchema: v.ObjectSchema<{
    readonly item: v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>;
}, undefined>;
type ResponseInventoryCraft = v.InferOutput<typeof valiResponseInventoryCraftSchema>;
declare const valiResponseInventoryGetBaseSchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetBase = v.InferOutput<typeof valiResponseInventoryGetBaseSchema>;
declare const valiResponseInventoryGetLegacySchema: v.ObjectSchema<{
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacy = v.InferOutput<typeof valiResponseInventoryGetLegacySchema>;
declare const valiResponseInventoryGetWithUserSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUser = v.InferOutput<typeof valiResponseInventoryGetWithUserSchema>;
declare const valiResponseInventoryGetLegacyWithUserSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUser = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserSchema>;
declare const valiResponseInventoryGetWithEquippedArraySchema: v.ObjectSchema<{
    readonly item_ids_equipped: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithEquippedArray = v.InferOutput<typeof valiResponseInventoryGetWithEquippedArraySchema>;
declare const valiResponseInventoryGetWithEquippedTreeSchema: v.ObjectSchema<{
    readonly equipped: v.OptionalSchema<v.ObjectSchema<{
        readonly game: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
            readonly cards: v.RecordSchema<v.StringSchema<undefined>, v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: v.NumberSchema<undefined>;
            readonly joke: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithEquippedTree = v.InferOutput<typeof valiResponseInventoryGetWithEquippedTreeSchema>;
declare const valiResponseInventoryGetWithUserAndEquippedArraySchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly item_ids_equipped: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUserAndEquippedArray = v.InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetWithUserAndEquippedTreeSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly equipped: v.OptionalSchema<v.ObjectSchema<{
        readonly game: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
            readonly cards: v.RecordSchema<v.StringSchema<undefined>, v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: v.NumberSchema<undefined>;
            readonly joke: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: v.ArraySchema<v.ObjectSchema<{
        readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: v.OptionalSchema<v.ObjectSchema<{
            readonly left: v.NumberSchema<undefined>;
            readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: v.NumberSchema<undefined>;
        readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: v.NumberSchema<undefined>;
        readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
        readonly type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly quality_id: v.NumberSchema<undefined>;
        readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: v.OptionalSchema<v.ObjectSchema<{
            readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                readonly use_count: v.NumberSchema<undefined>;
                readonly price: v.NumberSchema<undefined>;
            }, undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, v.TransformAction<{
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[], {
            item_proto_id?: number | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[]>]>, undefined>;
        readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUserAndEquippedTree = v.InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithEquippedArraySchema: v.ObjectSchema<{
    readonly item_ids_equipped: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithEquippedArray = v.InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithEquippedTreeSchema: v.ObjectSchema<{
    readonly equipped: v.OptionalSchema<v.ObjectSchema<{
        readonly game: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
            readonly cards: v.RecordSchema<v.StringSchema<undefined>, v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: v.NumberSchema<undefined>;
            readonly joke: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithEquippedTree = v.InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly item_ids_equipped: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUserAndEquippedArray = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema: v.ObjectSchema<{
    readonly user: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>;
    readonly equipped: v.OptionalSchema<v.ObjectSchema<{
        readonly game: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
            readonly cards: v.RecordSchema<v.StringSchema<undefined>, v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: v.NumberSchema<undefined>;
            readonly joke: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly collections: v.ArraySchema<v.ObjectSchema<{
        readonly collection_id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly coeff_rent: v.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUserAndEquippedTree = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema>;
type EquippedResponse<E extends 'array' | 'tree' | undefined, Base, WithArray, WithTree> = E extends 'array' ? WithArray : E extends 'tree' ? WithTree : Base;
type ResponseInventoryGet<OL extends boolean = true, OU extends boolean = false, OE extends 'array' | 'tree' | undefined = undefined> = If<OL, If<OU, EquippedResponse<OE, ResponseInventoryGetLegacyWithUser, ResponseInventoryGetLegacyWithUserAndEquippedArray, ResponseInventoryGetLegacyWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetLegacy, ResponseInventoryGetLegacyWithEquippedArray, ResponseInventoryGetLegacyWithEquippedTree>>, If<OU, EquippedResponse<OE, ResponseInventoryGetWithUser, ResponseInventoryGetWithUserAndEquippedArray, ResponseInventoryGetWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetBase, ResponseInventoryGetWithEquippedArray, ResponseInventoryGetWithEquippedTree>>>;

type InventoryGetOptions<OL extends boolean, OU extends boolean, OE extends 'array' | 'tree' | undefined = undefined> = {
    include_stock?: boolean;
    order?: 'time' | 'quality';
    count?: number;
    add_user?: OU;
    add_legacy?: OL;
    add_equipped?: OE;
    shrink?: boolean;
};
declare class M1ApiInventory extends M1ApiBase {
    /**
     * Craft an item.
     * @param item_ids - The IDs of the items to craft.
     * @returns The crafted item.
     */
    craft(item_ids: number[]): Promise<ApiResponse<ResponseInventoryCraft>>;
    /**
     * Returns information about user's inventory.
     * @param options - The options for the request.
     * @param options.include_stock - Whether to return stock quality items.
     * @param options.order - Sort order for items.
     * @param options.count - Number of items to return.
     * @param options.add_user - Whether to add user information to the response.
     * @param options.add_legacy - Whether to embed legacy Thing parameters into Item objects.
     * @param options.add_equipped - Whether to return equipped items information.
     * @param options.shrink - Whether to compress identical items into one.
     * @returns Inventory information.
     */
    get<const OL extends boolean = true, const OU extends boolean = false, const OE extends 'array' | 'tree' | undefined = undefined>(options?: InventoryGetOptions<OL, OU, OE>): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
    /**
     * Returns information about specified user's inventory.
     * @param user_id - The ID or domain of the user whose inventory to get.
     * @param options - The options for the request.
     * @param options.include_stock - Whether to return stock quality items.
     * @param options.order - Sort order for items.
     * @param options.count - Number of items to return.
     * @param options.add_user - Whether to add user information to the response.
     * @param options.add_legacy - Whether to embed legacy Thing parameters into Item objects.
     * @param options.add_equipped - Whether to return equipped items information.
     * @param options.shrink - Whether to compress identical items into one.
     * @returns Inventory information.
     */
    get<const OL extends boolean = true, const OU extends boolean = false, const OE extends 'array' | 'tree' | undefined = undefined>(user_id: number | string, options?: InventoryGetOptions<OL, OU, OE>): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
}

declare const valiObjectTradeIdSchema: v.ObjectSchema<{
    readonly trade_id: v.NumberSchema<undefined>;
}, undefined>;
type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;
declare const valiObjectTradeSchema: v.ObjectSchema<{
    readonly create_time: v.NumberSchema<undefined>;
    readonly reaction_time: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly status: v.NumberSchema<undefined>;
    readonly trade_id: v.NumberSchema<undefined>;
    readonly things_from: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly things_to: v.ArraySchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly user_id_from: v.NumberSchema<undefined>;
    readonly user_id_to: v.NumberSchema<undefined>;
}, undefined>;
type ObjectTrade = InferOutput<typeof valiObjectTradeSchema>;
declare const valiObjectNewTradeSchema: v.ObjectSchema<{
    readonly trade_id: v.NumberSchema<undefined>;
    readonly status: v.NumberSchema<undefined>;
    readonly ts_created: v.NumberSchema<undefined>;
    readonly ts_completed: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly initiator: v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly item_ids: v.ArraySchema<v.ObjectSchema<{
            readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly uses: v.OptionalSchema<v.ObjectSchema<{
                readonly left: v.NumberSchema<undefined>;
                readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly item_id: v.NumberSchema<undefined>;
            readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly ts_owned: v.NumberSchema<undefined>;
            readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
            readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly item_proto_id: v.NumberSchema<undefined>;
            readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
            readonly type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly quality_id: v.NumberSchema<undefined>;
            readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly prices: v.OptionalSchema<v.ObjectSchema<{
                readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                    readonly use_count: v.NumberSchema<undefined>;
                    readonly price: v.NumberSchema<undefined>;
                }, undefined>, undefined>], undefined>, undefined>;
                readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, v.TransformAction<{
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[], {
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[]>]>, undefined>;
            readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly receiver: v.ObjectSchema<{
        readonly user_id: v.NumberSchema<undefined>;
        readonly item_ids: v.ArraySchema<v.ObjectSchema<{
            readonly can_delete: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly previous_owners_user_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly uses: v.OptionalSchema<v.ObjectSchema<{
                readonly left: v.NumberSchema<undefined>;
                readonly origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly item_id: v.NumberSchema<undefined>;
            readonly item_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly ts_owned: v.NumberSchema<undefined>;
            readonly ts_can_trade: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly ts_can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, undefined>;
            readonly seed: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly xp_boost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly item_proto_id: v.NumberSchema<undefined>;
            readonly item_proto_status: v.OptionalSchema<v.PicklistSchema<[0, 1, 2], undefined>, 0>;
            readonly type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly quality_id: v.NumberSchema<undefined>;
            readonly monopoly_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly sticker_group_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly collection_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly prices: v.OptionalSchema<v.ObjectSchema<{
                readonly buy: v.OptionalSchema<v.UnionSchema<[v.NumberSchema<undefined>, v.ArraySchema<v.ObjectSchema<{
                    readonly use_count: v.NumberSchema<undefined>;
                    readonly price: v.NumberSchema<undefined>;
                }, undefined>, undefined>], undefined>, undefined>;
                readonly quick_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly key_item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly case_item_proto_ids: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                readonly item_proto_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, v.TransformAction<{
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[], {
                item_proto_id?: number | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[]>]>, undefined>;
            readonly can_craft: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        }, undefined>, undefined>;
    }, undefined>;
}, undefined>;
type ObjectNewTrade = InferOutput<typeof valiObjectNewTradeSchema>;
declare const valiObjectTradeListSchema: v.ObjectSchema<{
    readonly collections: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly qualities: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly item_ids_equipped: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly thing_types: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly trades: v.ArraySchema<v.ObjectSchema<{
        readonly create_time: v.NumberSchema<undefined>;
        readonly reaction_time: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
        readonly status: v.NumberSchema<undefined>;
        readonly trade_id: v.NumberSchema<undefined>;
        readonly things_from: v.ArraySchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly things_to: v.ArraySchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly user_id_from: v.NumberSchema<undefined>;
        readonly user_id_to: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly user_data: v.ArraySchema<v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly badge: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_id: v.NumberSchema<undefined>;
            readonly user_id: v.NumberSchema<undefined>;
            readonly owned_time: v.NumberSchema<undefined>;
            readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly autograph: v.OptionalSchema<v.ObjectSchema<{
                readonly user_id: v.NumberSchema<undefined>;
                readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
                readonly transactions: v.NumberSchema<undefined>;
                readonly money_inside: v.NumberSchema<undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, v.ObjectSchema<{
                readonly count: v.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly id: v.NumberSchema<undefined>;
                readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
                readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
                readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                    readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: v.NumberSchema<undefined>;
            readonly thing_prototype_status: v.NumberSchema<undefined>;
            readonly thing_type: v.NumberSchema<undefined>;
            readonly image: v.StringSchema<undefined>;
            readonly title: v.StringSchema<undefined>;
            readonly description: v.StringSchema<undefined>;
            readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: v.NumberSchema<undefined>;
            readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
                readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
                readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly type: v.LiteralSchema<0, undefined>;
            readonly count: v.NumberSchema<undefined>;
            readonly ts_last_ban: v.NumberSchema<undefined>;
            readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.LiteralSchema<1, undefined>;
            readonly ts_end: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
        readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly nick: v.StringSchema<undefined>;
        readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly current_game: v.OptionalSchema<v.ObjectSchema<{
            readonly gs_id: v.StringSchema<undefined>;
            readonly gs_game_id: v.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly hidden: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly qual: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly expired: v.LiteralSchema<1, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly pts: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.TransformAction<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }>, v.TransformAction<Omit<{
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        games?: number | undefined;
        games_wins?: number | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        muted: boolean;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        user_id: number;
        domain?: string | undefined;
        inactive?: undefined;
        approved: boolean;
        nick: string;
        gender: 0 | 1;
        avatar: string;
        online: boolean;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        vip: boolean;
        bot: boolean;
        bot_owner?: number | undefined;
        moderator: boolean;
    }, "bot_owner" | "bot"> & {
        bot: {
            owner_user_id: number;
        } | null;
    }, {
        games: {
            total: number | undefined;
            won: number | undefined;
        };
        user_id: number;
        nick: string;
        domain?: string | undefined;
        inactive?: undefined;
        gender: 0 | 1;
        current_game?: {
            gs_id: string;
            gs_game_id: string;
        } | undefined;
        rank?: {
            hidden: 1;
        } | {
            qual: number;
        } | {
            expired: 1;
        } | {
            id: number;
            pts: number;
        } | undefined;
        approved: boolean;
        avatar: string;
        online: boolean;
        vip: boolean;
        moderator: boolean;
        nicks_old: string[];
        profile_cover?: string | undefined;
        social_vk?: number | undefined;
        social_discord?: string | undefined;
        social_twitch?: string | undefined;
        xp?: number | undefined;
        xp_level?: number | undefined;
        badge?: {
            thing_id: number;
            user_id: number;
            owned_time: number;
            can_give?: number | undefined;
            can_sell?: number | undefined;
            souvenir?: string | undefined;
            autograph?: {
                user_id: number;
                text?: string | undefined;
            } | undefined;
            moneybox?: {
                transactions: number;
                money_inside: number;
            } | {
                numbers: number[];
            } | {
                count: number;
            } | undefined;
            uses_left?: number | undefined;
            uses_origin?: number | undefined;
            variants?: {
                id: number;
                is_default: boolean;
                is_selected: boolean;
                is_unlocked: boolean;
                image?: string | undefined;
                description?: string | undefined;
                unlock?: {
                    moneybox?: number | undefined;
                    buy_tokens_sp?: number | undefined;
                    buy_tokens_cmpt?: number | undefined;
                } | undefined;
            }[] | undefined;
            thing_prototype_id: number;
            thing_prototype_status: number;
            thing_type: number;
            image: string;
            title: string;
            description: string;
            group?: number | undefined;
            quality: number;
            collection?: number | undefined;
            twin_thing_prototype_id?: number[] | undefined;
            delete_price?: number | null | undefined;
            can_be_upgraded: boolean;
            buy_cost?: number | undefined;
            key?: number | undefined;
            cases?: number[] | undefined;
            drop?: {
                thing_prototype_id?: number | undefined;
                hidden?: boolean | undefined;
                is_primary?: boolean | undefined;
                is_rare?: number | undefined;
                is_secondary?: number | undefined;
            }[] | undefined;
        } | undefined;
        friendship?: number | undefined;
        mfp_ban_history?: {
            type: 0;
            count: number;
            ts_last_ban: number;
            ts_end?: number | undefined;
        } | {
            type: 1;
            ts_end: number;
        } | undefined;
        muted: boolean;
        bot: {
            owner_user_id: number;
        } | null;
    }>]>, v.ObjectSchema<{
        readonly nick: v.StringSchema<undefined>;
        readonly avatar: v.StringSchema<undefined>;
        readonly avatar_key: v.StringSchema<undefined>;
        readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
        readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
type ObjectTradeList = InferOutput<typeof valiObjectTradeListSchema>;

declare class M1ApiTrades extends M1ApiBase {
    create(options: {
        item_ids_offer?: number[];
        item_ids_request?: number[];
        user_id: number;
    }): Promise<ApiResponse<ObjectTradeId>>;
    accept(trade_id: number): Promise<ApiResponse<void>>;
    decline(trade_id: number): Promise<ApiResponse<void>>;
    revoke(trade_id: number): Promise<ApiResponse<void>>;
    getIncoming(options: {
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
    getOutgoing(options: {
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
    /**
     * Get the history of trades.
     * @param options -
     * @param options.count - The count of trades to return.
     * @param options.offset - The offset of the trades to return.
     * @returns The history of trades.
     */
    history(options?: {
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
    /**
     * Get the history of trades.
     * @param user_id - The user ID.
     * @param options -
     * @param options.count - The count of trades to return.
     * @param options.offset - The offset of the trades to return.
     * @returns The history of trades.
     */
    history(user_id: number, options?: {
        offset?: number;
        count?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
}

declare const valiObjectActiveUserShortSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
    readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.StringSchema<undefined>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.StringSchema<undefined>;
        readonly gs_game_id: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly qual: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly expired: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, Omit<{
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>]>;
declare const valiObjectInactiveUserSchema: v.ObjectSchema<{
    readonly nick: v.StringSchema<undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly avatar_key: v.StringSchema<undefined>;
    readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
    readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
}, undefined>;
declare const valiObjectActiveUserSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly badge: v.OptionalSchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly type: v.LiteralSchema<0, undefined>;
        readonly count: v.NumberSchema<undefined>;
        readonly ts_last_ban: v.NumberSchema<undefined>;
        readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<1, undefined>;
        readonly ts_end: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
    readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.StringSchema<undefined>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.StringSchema<undefined>;
        readonly gs_game_id: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly qual: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly expired: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, Omit<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>, v.TransformAction<Omit<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}, {
    games: {
        total: number | undefined;
        won: number | undefined;
    };
    user_id: number;
    nick: string;
    domain?: string | undefined;
    inactive?: undefined;
    gender: 0 | 1;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    approved: boolean;
    avatar: string;
    online: boolean;
    vip: boolean;
    moderator: boolean;
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    muted: boolean;
    bot: {
        owner_user_id: number;
    } | null;
}>]>;
declare const valiObjectUserShortSchema: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
    readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.StringSchema<undefined>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.StringSchema<undefined>;
        readonly gs_game_id: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly qual: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly expired: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, Omit<{
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>]>, v.ObjectSchema<{
    readonly nick: v.StringSchema<undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly avatar_key: v.StringSchema<undefined>;
    readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
    readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
}, undefined>], undefined>;
declare const valiObjectUserSchema: v.VariantSchema<"inactive", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly nicks_old: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    readonly profile_cover: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly social_vk: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly social_discord: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly social_twitch: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly games: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly games_wins: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly xp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly xp_level: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly badge: v.OptionalSchema<v.ObjectSchema<{
        readonly thing_id: v.NumberSchema<undefined>;
        readonly user_id: v.NumberSchema<undefined>;
        readonly owned_time: v.NumberSchema<undefined>;
        readonly can_give: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly can_sell: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.NumberSchema<undefined>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.NumberSchema<undefined>;
            readonly money_inside: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly uses_origin: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly id: v.NumberSchema<undefined>;
            readonly is_default: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly description: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: v.NumberSchema<undefined>;
        readonly thing_prototype_status: v.NumberSchema<undefined>;
        readonly thing_type: v.NumberSchema<undefined>;
        readonly image: v.StringSchema<undefined>;
        readonly title: v.StringSchema<undefined>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<readonly [v.NullableSchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: v.NumberSchema<undefined>;
        readonly collection: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: v.OptionalSchema<v.NullableSchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly key: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_primary: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
            readonly is_rare: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
            readonly is_secondary: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly friendship: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly muted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly mfp_ban_history: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly type: v.LiteralSchema<0, undefined>;
        readonly count: v.NumberSchema<undefined>;
        readonly ts_last_ban: v.NumberSchema<undefined>;
        readonly ts_end: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<1, undefined>;
        readonly ts_end: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly domain: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    readonly inactive: v.OptionalSchema<v.UndefinedSchema<undefined>, undefined>;
    readonly approved: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.StringSchema<undefined>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly online: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.StringSchema<undefined>;
        readonly gs_game_id: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly qual: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly expired: v.LiteralSchema<1, undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly moderator: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, Omit<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>, v.TransformAction<Omit<{
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    muted: boolean;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    user_id: number;
    domain?: string | undefined;
    inactive?: undefined;
    approved: boolean;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    online: boolean;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    vip: boolean;
    bot: boolean;
    bot_owner?: number | undefined;
    moderator: boolean;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}, {
    games: {
        total: number | undefined;
        won: number | undefined;
    };
    user_id: number;
    nick: string;
    domain?: string | undefined;
    inactive?: undefined;
    gender: 0 | 1;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    approved: boolean;
    avatar: string;
    online: boolean;
    vip: boolean;
    moderator: boolean;
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    social_discord?: string | undefined;
    social_twitch?: string | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        thing_id: number;
        user_id: number;
        owned_time: number;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        moneybox?: {
            transactions: number;
            money_inside: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        thing_prototype_id: number;
        thing_prototype_status: number;
        thing_type: number;
        image: string;
        title: string;
        description: string;
        group?: number | undefined;
        quality: number;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | null | undefined;
        can_be_upgraded: boolean;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id?: number | undefined;
            hidden?: boolean | undefined;
            is_primary?: boolean | undefined;
            is_rare?: number | undefined;
            is_secondary?: number | undefined;
        }[] | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    muted: boolean;
    bot: {
        owner_user_id: number;
    } | null;
}>]>, v.ObjectSchema<{
    readonly nick: v.StringSchema<undefined>;
    readonly avatar: v.StringSchema<undefined>;
    readonly avatar_key: v.StringSchema<undefined>;
    readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly domain: v.OptionalSchema<v.UnionSchema<[v.StringSchema<undefined>, v.NullSchema<undefined>], undefined>, undefined>;
    readonly inactive: v.PicklistSchema<["not_exists", "global_ban"], undefined>;
}, undefined>], undefined>;
type User = v.InferOutput<typeof valiObjectUserSchema>;
type UserShort = v.InferOutput<typeof valiObjectUserShortSchema>;

declare class M1ApiUsers extends M1ApiBase {
    /**
     * Returns current user.
     * @returns -
     */
    get(): Promise<ApiResponse<User>>;
    /**
     * Returns a user by ID or domain.
     * @param user_id -
     * @returns -
     */
    get(user_id: number | string): Promise<ApiResponse<User>>;
    /**
     * Returns users by IDs or domains.
     * @param user_ids -
     * @returns -
     */
    get(user_ids: (number | string)[] | Set<number | string> | IterableIterator<number | string>): Promise<ApiResponse<Map<number, User>>>;
    /**
     * Returns current user in short form.
     * @param user_ids -
     * @returns -
     */
    get(options: {
        short: true;
    }): Promise<ApiResponse<UserShort>>;
    /**
     * Returns a user by ID or domain in short form.
     * @param user_ids -
     * @returns -
     */
    get(user_id: number | string, options: {
        short: true;
    }): Promise<ApiResponse<UserShort>>;
    /**
     * Returns users by IDs or domains in short form.
     * @param user_ids -
     * @returns -
     */
    get(user_ids: (number | string)[], options: {
        short: true;
    }): Promise<ApiResponse<Map<number, UserShort>>>;
}

type M1ApiResponseHook = <ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined>(this: M1, options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>, data: Record<string, unknown>) => Promise<CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema> | undefined>;
type M1ApiResponseHooks = Record<number, M1ApiResponseHook>;

type CallMethodOptionsData = Record<string, string | number | undefined | null>;
type CallMethodOptions<ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined> = {
    http_method: 'GET' | 'POST';
    api_method: string;
    data?: CallMethodOptionsData;
    valiResponseSchema: ValiResponseSchema;
    valiErrorDataSchema?: ValiErrorDataSchema;
};
type RequestOptions = {
    method: 'GET' | 'POST';
    api_method: string;
    data: CallMethodOptionsData;
};
type CallMethodResponse<ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined> = {
    success: true;
    data: v.InferOutput<ValiResponseSchema>;
    request: RequestOptions;
} | {
    success: false;
    code: number;
    description?: string;
    data: ValiErrorDataSchema extends undefined ? never : v.InferOutput<Exclude<ValiErrorDataSchema, undefined>>;
    request: RequestOptions;
};
type M1Options = {
    hostname?: string;
    access_token?: string;
    refresh_token?: string;
    websocket?: {
        subs?: string;
    };
    headers?: Headers | Record<string, string>;
    hooks?: M1ApiResponseHooks;
};
/**
 * @classdesc A class to interact with Monopoly One API
 * @param options - The options to use
 * @param options.access_token - Access token
 * @param options.refresh_token - Refresh token
 * @param options.websocket - Websocket options
 * @param options.websocket.subs - Websocket subscriptions
 * @param options.headers - Headers
 * @param options.hooks - Hooks
 */
declare class M1 {
    options: M1Options;
    ws: ExtWSClient | null;
    auth: M1ApiAuth;
    bots: M1ApiBots;
    data: M1ApiData;
    friends: M1ApiFriends;
    gchat: M1ApiGchat;
    im: M1ApiIm;
    inventory: M1ApiInventory;
    trades: M1ApiTrades;
    users: M1ApiUsers;
    constructor(options?: M1Options);
    /**
     * Makes an API call.
     * @param options -
     * @param options.http_method - HTTP method.
     * @param options.api_method - API method.
     * @param options.data - Data to send.
     * @param options.valiResponseSchema - Response validator.
     * @param options.valiErrorDataSchema - Error data validator.
     * @returns - API response.
     */
    callMethod<ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined>(options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>): Promise<CallMethodResponse<ValiResponseSchema, ValiErrorDataSchema>>;
}

type ValiBaseSchema = v.BaseSchema<any, any, any>;
type ApiResponse<DR, DE = never> = {
    success: true;
    data: DR;
    request: RequestOptions;
} | {
    success: false;
    code: number;
    description?: string;
    data: DE;
    request: RequestOptions;
};

declare class M1ApiAuth extends M1ApiBase {
    /**
     * Sign in with email and password.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @returns Session or TOTP session token.
     */
    signin(email: string, password: string): Promise<ApiResponse<Session | TotpSessionToken>>;
    /**
     * Verify the TOTP code.
     * @param totp_session_token The TOTP session token.
     * @param code The TOTP code.
     * @returns Session.
     */
    totpVerify(totp_session_token: string, code: string): Promise<ApiResponse<Session>>;
    /**
     * Refresh the access token.
     * @param refresh_token The refresh token.
     * @returns New session.
     */
    refresh(refresh_token: string): Promise<ApiResponse<Session>>;
}

export { valiResponseInventoryGetLegacySchema as $, type ApiResponse as A, valiObjectGchatMessageAdditionalDataSchema as B, type CallMethodOptions as C, valiObjectGchatMessageSchema as D, valiResponseGchatGetSchema as E, type ResponseGchatGet as F, type GchatMessage as G, valiResponseGchatSendSchema as H, type ResponseGchatSend as I, valiResponseImSendSchema as J, valiObjectMessageSchema as K, valiObjectDialogSchema as L, M1ApiBase as M, valiResponseImDialogsGetSchema as N, valiResponseImHistoryGetSchema as O, type ResponseImSend as P, type ResponseImDialogsGet as Q, type RequestOptions as R, type Session as S, type TotpSessionToken as T, type ResponseImHistoryGet as U, type Dialog as V, type Message as W, valiResponseInventoryCraftSchema as X, type ResponseInventoryCraft as Y, valiResponseInventoryGetBaseSchema as Z, type ResponseInventoryGetBase as _, M1ApiAuth as a, type ResponseInventoryGetLegacy as a0, valiResponseInventoryGetWithUserSchema as a1, type ResponseInventoryGetWithUser as a2, valiResponseInventoryGetLegacyWithUserSchema as a3, type ResponseInventoryGetLegacyWithUser as a4, valiResponseInventoryGetWithEquippedArraySchema as a5, type ResponseInventoryGetWithEquippedArray as a6, valiResponseInventoryGetWithEquippedTreeSchema as a7, type ResponseInventoryGetWithEquippedTree as a8, valiResponseInventoryGetWithUserAndEquippedArraySchema as a9, valiObjectTradeSchema as aA, type ObjectTrade as aB, valiObjectNewTradeSchema as aC, type ObjectNewTrade as aD, valiObjectTradeListSchema as aE, type ObjectTradeList as aF, valiObjectActiveUserShortSchema as aG, valiObjectInactiveUserSchema as aH, valiObjectActiveUserSchema as aI, valiObjectUserShortSchema as aJ, valiObjectUserSchema as aK, type User as aL, type UserShort as aM, type M1ApiResponseHook as aN, M1 as aO, type ResponseInventoryGetWithUserAndEquippedArray as aa, valiResponseInventoryGetWithUserAndEquippedTreeSchema as ab, type ResponseInventoryGetWithUserAndEquippedTree as ac, valiResponseInventoryGetLegacyWithEquippedArraySchema as ad, type ResponseInventoryGetLegacyWithEquippedArray as ae, valiResponseInventoryGetLegacyWithEquippedTreeSchema as af, type ResponseInventoryGetLegacyWithEquippedTree as ag, valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema as ah, type ResponseInventoryGetLegacyWithUserAndEquippedArray as ai, valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema as aj, type ResponseInventoryGetLegacyWithUserAndEquippedTree as ak, type ResponseInventoryGet as al, valiObjectItemVariantSchema as am, type ItemVariant as an, valiObjectThingPrototypeSchema as ao, type ThingPrototype as ap, valiObjectThingSchema as aq, type Thing as ar, valiObjectItemProtoSchema as as, type ItemProto as at, type ItemShort as au, valiObjectItemSchema as av, type Item as aw, valiObjectItemProtoLegacySchema as ax, valiObjectTradeIdSchema as ay, type ObjectTradeId as az, M1ApiBots as b, M1ApiData as c, M1ApiFriends as d, M1ApiGchat as e, M1ApiIm as f, M1ApiInventory as g, M1ApiTrades as h, M1ApiUsers as i, type CallMethodResponse as j, valiResponseTotpSessionTokenSchema as k, valiResponseFriendsGetBaseSchema as l, type ResponseFriendsGetBase as m, valiResponseFriendsGetWithUserSchema as n, type ResponseFriendsGetWithUser as o, valiResponseFriendsGetShortSchema as p, type ResponseFriendsGetShort as q, valiResponseFriendsGetShortWithUserSchema as r, type ResponseFriendsGetShortWithUser as s, type ResponseFriendsGet as t, valiResponseFriendsGetRequestsSchema as u, valiObjectSessionSchema as v, type ResponseFriendsGetRequests as w, valiResponseFriendsGetRequestsShortSchema as x, type ResponseFriendsGetRequestsShort as y, valiObjectGchatMessageBaseSchema as z };
