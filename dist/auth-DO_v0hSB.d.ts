import { ExtWSClient } from '@extws/client';
import * as valibot from 'valibot';
import { InferOutput } from 'valibot';
import { If } from 'type-fest';

declare const valiObjectSessionSchema: valibot.ObjectSchema<{
    readonly user_id: valibot.StringSchema<undefined>;
    readonly access_token: valibot.StringSchema<undefined>;
    readonly expires_in: valibot.NumberSchema<undefined>;
    readonly refresh_token: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
}, undefined>;
declare const valiResponseTotpSessionTokenSchema: valibot.ObjectSchema<{
    readonly totp_session_token: valibot.StringSchema<undefined>;
}, undefined>;
type TotpSessionToken = InferOutput<typeof valiResponseTotpSessionTokenSchema>;
type Session = InferOutput<typeof valiObjectSessionSchema>;

type ValiBaseSchema = valibot.BaseSchema<any, any, any>;
type ApiResponse<DR, DE = never> = {
    success: true;
    data: DR;
} | {
    success: false;
    code: number;
    description?: string;
    data: DE;
};

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

declare const valiObjectItemVariantSchema: valibot.ObjectSchema<{
    readonly id: valibot.NumberSchema<undefined>;
    readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ItemVariant = InferOutput<typeof valiObjectItemVariantSchema>;
declare const valiObjectThingPrototypeSchema: valibot.ObjectSchema<{
    readonly thing_prototype_id: valibot.NumberSchema<undefined>;
    readonly thing_prototype_status: valibot.NumberSchema<undefined>;
    readonly thing_type: valibot.NumberSchema<undefined>;
    readonly image: valibot.StringSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
    readonly description: valibot.StringSchema<undefined>;
    readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: valibot.NumberSchema<undefined>;
    readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ThingPrototype = InferOutput<typeof valiObjectThingPrototypeSchema>;
declare const valiObjectThingSchema: valibot.ObjectSchema<{
    readonly thing_id: valibot.NumberSchema<undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
    readonly owned_time: valibot.NumberSchema<undefined>;
    readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
        readonly transactions: valibot.NumberSchema<undefined>;
        readonly money: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly count: valibot.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly thing_prototype_id: valibot.NumberSchema<undefined>;
    readonly thing_prototype_status: valibot.NumberSchema<undefined>;
    readonly thing_type: valibot.NumberSchema<undefined>;
    readonly image: valibot.StringSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
    readonly description: valibot.StringSchema<undefined>;
    readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: valibot.NumberSchema<undefined>;
    readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type Thing = InferOutput<typeof valiObjectThingSchema>;
declare const valiObjectItemProtoSchema: valibot.ObjectSchema<{
    readonly item_proto_id: valibot.NumberSchema<undefined>;
    readonly item_proto_status: valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0>;
    readonly type: valibot.NumberSchema<undefined>;
    readonly image: valibot.StringSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
    readonly description: valibot.StringSchema<undefined>;
    readonly quality_id: valibot.NumberSchema<undefined>;
    readonly moneybox: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly collection_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly buy: valibot.OptionalSchema<valibot.UnionSchema<[valibot.NumberSchema<undefined>, valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.NumberSchema<undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
    readonly can_craft: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
}, undefined>;
type ItemProto = InferOutput<typeof valiObjectItemProtoSchema>;
declare const valiObjectItemShortSchema: valibot.ObjectSchema<{
    readonly item_id: valibot.NumberSchema<undefined>;
    readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: valibot.NumberSchema<undefined>;
    readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
    readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
}, undefined>;
type ItemShort = InferOutput<typeof valiObjectItemShortSchema>;
declare const valiObjectItemSchema: valibot.ObjectSchema<{
    readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly left: valibot.NumberSchema<undefined>;
        readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly item_id: valibot.NumberSchema<undefined>;
    readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly ts_owned: valibot.NumberSchema<undefined>;
    readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
    readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
}, undefined>;
type Item = InferOutput<typeof valiObjectItemSchema>;
declare const valiObjectItemProtoLegacySchema: valibot.ObjectSchema<{
    readonly item_proto_id: valibot.NumberSchema<undefined>;
    readonly item_proto_status: valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0>;
    readonly type: valibot.NumberSchema<undefined>;
    readonly image: valibot.StringSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
    readonly description: valibot.StringSchema<undefined>;
    readonly quality_id: valibot.NumberSchema<undefined>;
    readonly moneybox: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly monopoly_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly sticker_group_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly collection_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly twin_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly prices: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly buy: valibot.OptionalSchema<valibot.UnionSchema<[valibot.NumberSchema<undefined>, valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.NumberSchema<undefined>, undefined>], undefined>, undefined>;
        readonly quick_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly key_item_proto_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly case_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly drop: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
    readonly can_craft: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly thing_prototype_id: valibot.NumberSchema<undefined>;
    readonly thing_prototype_status: valibot.NumberSchema<undefined>;
    readonly thing_type: valibot.NumberSchema<undefined>;
    readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
    readonly quality: valibot.NumberSchema<undefined>;
    readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
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
}

declare const valiResponseFriendsGetBaseSchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly friends: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetBase = InferOutput<typeof valiResponseFriendsGetBaseSchema>;
declare const valiResponseFriendsGetWithUserSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly count: valibot.NumberSchema<undefined>;
    readonly friends: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetWithUser = InferOutput<typeof valiResponseFriendsGetWithUserSchema>;
declare const valiResponseFriendsGetShortSchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly friends: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
declare const valiResponseFriendsGetShortWithUserSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    readonly count: valibot.NumberSchema<undefined>;
    readonly friends: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetShortWithUser = InferOutput<typeof valiResponseFriendsGetShortWithUserSchema>;
type ResponseFriendsGet<S extends boolean, U extends boolean> = If<S, If<U, ResponseFriendsGetShortWithUser, ResponseFriendsGetShort>, If<U, ResponseFriendsGetWithUser, ResponseFriendsGetBase>>;
declare const valiResponseFriendsGetRequestsSchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly requests: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
declare const valiResponseFriendsGetRequestsShortSchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly requests: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
}, undefined>;
type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;

type FriendsGetOptions<OS extends boolean, OU extends boolean> = {
    online?: boolean;
    is_short?: OS;
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

declare const valiObjectGchatMessageBaseSchema: valibot.ObjectSchema<{
    readonly msg_id: valibot.StringSchema<undefined>;
    readonly ts: valibot.NumberSchema<undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectGchatMessageAdditionalDataSchema: valibot.UnionSchema<[valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<1, undefined>;
    readonly text: valibot.StringSchema<undefined>;
    readonly is_public: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>, undefined>;
    readonly user_ids_mentioned: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<2, undefined>;
    readonly case_item_proto_id: valibot.NumberSchema<undefined>;
    readonly drop_item_proto_id: valibot.NumberSchema<undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<3, undefined>;
    readonly user_id_receiver: valibot.NumberSchema<undefined>;
    readonly item_proto_id: valibot.NumberSchema<undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<4, undefined>;
    readonly item_proto_ids: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>;
declare const valiObjectGchatMessageSchema: valibot.IntersectSchema<[valibot.ObjectSchema<{
    readonly msg_id: valibot.StringSchema<undefined>;
    readonly ts: valibot.NumberSchema<undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
}, undefined>, valibot.UnionSchema<[valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<1, undefined>;
    readonly text: valibot.StringSchema<undefined>;
    readonly is_public: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>, undefined>;
    readonly user_ids_mentioned: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<2, undefined>;
    readonly case_item_proto_id: valibot.NumberSchema<undefined>;
    readonly drop_item_proto_id: valibot.NumberSchema<undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<3, undefined>;
    readonly user_id_receiver: valibot.NumberSchema<undefined>;
    readonly item_proto_id: valibot.NumberSchema<undefined>;
}, undefined>, valibot.ObjectSchema<{
    readonly type: valibot.LiteralSchema<4, undefined>;
    readonly item_proto_ids: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>], undefined>;
declare const valiResponseGchatGetSchema: valibot.ObjectSchema<{
    readonly messages: valibot.ArraySchema<valibot.IntersectSchema<[valibot.ObjectSchema<{
        readonly msg_id: valibot.StringSchema<undefined>;
        readonly ts: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.UnionSchema<[valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<1, undefined>;
        readonly text: valibot.StringSchema<undefined>;
        readonly is_public: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>, undefined>;
        readonly user_ids_mentioned: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<2, undefined>;
        readonly case_item_proto_id: valibot.NumberSchema<undefined>;
        readonly drop_item_proto_id: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<3, undefined>;
        readonly user_id_receiver: valibot.NumberSchema<undefined>;
        readonly item_proto_id: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<4, undefined>;
        readonly item_proto_ids: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>], undefined>, undefined>;
    readonly status: valibot.ObjectSchema<{
        readonly closed: valibot.BooleanSchema<undefined>;
        readonly slowmode: valibot.BooleanSchema<undefined>;
        readonly emoteonly: valibot.BooleanSchema<undefined>;
    }, undefined>;
    readonly users: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
    readonly item_protos: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly item_proto_id: valibot.NumberSchema<undefined>;
        readonly item_proto_status: valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0>;
        readonly type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly quality_id: valibot.NumberSchema<undefined>;
        readonly moneybox: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly monopoly_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly sticker_group_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly collection_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly prices: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly buy: valibot.OptionalSchema<valibot.UnionSchema<[valibot.NumberSchema<undefined>, valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.NumberSchema<undefined>, undefined>], undefined>, undefined>;
            readonly quick_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly key_item_proto_id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly case_item_proto_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly can_craft: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
}, undefined>;
declare const valiResponseGchatSendSchema: valibot.ObjectSchema<{
    readonly msg_id: valibot.StringSchema<undefined>;
}, undefined>;
type ResponseGchatGet = InferOutput<typeof valiResponseGchatGetSchema>;
type GchatMessage = InferOutput<typeof valiObjectGchatMessageSchema>;
type ResponseGchatSend = InferOutput<typeof valiResponseGchatSendSchema>;

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

declare const valiResponseImSendSchema: valibot.ObjectSchema<{
    readonly msg_id: valibot.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectMessageSchema: valibot.ObjectSchema<{
    readonly msg_id: valibot.NumberSchema<undefined>;
    readonly is_read: valibot.NumberSchema<undefined>;
    readonly text: valibot.StringSchema<undefined>;
    readonly ts_created: valibot.NumberSchema<undefined>;
    readonly type: valibot.NumberSchema<undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
}, undefined>;
declare const valiObjectDialogSchema: valibot.ObjectSchema<{
    readonly message: valibot.ObjectSchema<{
        readonly msg_id: valibot.NumberSchema<undefined>;
        readonly is_read: valibot.NumberSchema<undefined>;
        readonly text: valibot.StringSchema<undefined>;
        readonly ts_created: valibot.NumberSchema<undefined>;
        readonly type: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
    }, undefined>;
    readonly new_counter: valibot.NumberSchema<undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
}, undefined>;
declare const valiResponseImDialogsGetSchema: valibot.ObjectSchema<{
    readonly dialogs: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly message: valibot.ObjectSchema<{
            readonly msg_id: valibot.NumberSchema<undefined>;
            readonly is_read: valibot.NumberSchema<undefined>;
            readonly text: valibot.StringSchema<undefined>;
            readonly ts_created: valibot.NumberSchema<undefined>;
            readonly type: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
        }, undefined>;
        readonly new_counter: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly sync: valibot.ObjectSchema<{
        readonly events: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly chain: valibot.ArraySchema<valibot.UnionSchema<[valibot.NumberSchema<undefined>, valibot.NullSchema<undefined>], undefined>, undefined>;
            readonly data: valibot.ObjectSchema<{
                readonly type: valibot.NumberSchema<undefined>;
                readonly msg_id: valibot.NumberSchema<undefined>;
                readonly dialog: valibot.ObjectSchema<{
                    readonly user_id: valibot.NumberSchema<undefined>;
                }, undefined>;
            }, undefined>;
        }, undefined>, undefined>;
        readonly dialogs: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly new_counter: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
        readonly messages: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly msg_id: valibot.NumberSchema<undefined>;
            readonly is_read: valibot.NumberSchema<undefined>;
            readonly text: valibot.StringSchema<undefined>;
            readonly ts_created: valibot.NumberSchema<undefined>;
            readonly type: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly users_data: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
}, undefined>;
declare const valiResponseImHistoryGetSchema: valibot.ObjectSchema<{
    readonly messages: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly msg_id: valibot.NumberSchema<undefined>;
        readonly is_read: valibot.NumberSchema<undefined>;
        readonly text: valibot.StringSchema<undefined>;
        readonly ts_created: valibot.NumberSchema<undefined>;
        readonly type: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly sync: valibot.ObjectSchema<{
        readonly events: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly chain: valibot.ArraySchema<valibot.UnionSchema<[valibot.NumberSchema<undefined>, valibot.NullSchema<undefined>], undefined>, undefined>;
            readonly data: valibot.ObjectSchema<{
                readonly type: valibot.NumberSchema<undefined>;
                readonly msg_id: valibot.NumberSchema<undefined>;
                readonly dialog: valibot.ObjectSchema<{
                    readonly user_id: valibot.NumberSchema<undefined>;
                }, undefined>;
            }, undefined>;
        }, undefined>, undefined>;
        readonly dialogs: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly new_counter: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
        readonly messages: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly msg_id: valibot.NumberSchema<undefined>;
            readonly is_read: valibot.NumberSchema<undefined>;
            readonly text: valibot.StringSchema<undefined>;
            readonly ts_created: valibot.NumberSchema<undefined>;
            readonly type: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly users_data: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
        user_id: number;
        domain?: string | undefined;
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
    }>]>, undefined>;
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
    getHistory(user_id: number): Promise<ApiResponse<ResponseImHistoryGet>>;
    getHistory(user_id: number, options: {
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

declare const valiResponseInventoryGetBaseSchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetBase = InferOutput<typeof valiResponseInventoryGetBaseSchema>;
declare const valiResponseInventoryGetLegacySchema: valibot.ObjectSchema<{
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacy = InferOutput<typeof valiResponseInventoryGetLegacySchema>;
declare const valiResponseInventoryGetWithUserSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUser = InferOutput<typeof valiResponseInventoryGetWithUserSchema>;
declare const valiResponseInventoryGetLegacyWithUserSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUser = InferOutput<typeof valiResponseInventoryGetLegacyWithUserSchema>;
declare const valiResponseInventoryGetWithEquippedArraySchema: valibot.ObjectSchema<{
    readonly item_ids_equipped: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithEquippedArray = InferOutput<typeof valiResponseInventoryGetWithEquippedArraySchema>;
declare const valiResponseInventoryGetWithEquippedTreeSchema: valibot.ObjectSchema<{
    readonly equipped: valibot.ObjectSchema<{
        readonly game: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ObjectSchema<{
            readonly cards: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: valibot.NumberSchema<undefined>;
            readonly joke: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithEquippedTree = InferOutput<typeof valiResponseInventoryGetWithEquippedTreeSchema>;
declare const valiResponseInventoryGetWithUserAndEquippedArraySchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly item_ids_equipped: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetWithUserAndEquippedTreeSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly equipped: valibot.ObjectSchema<{
        readonly game: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ObjectSchema<{
            readonly cards: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: valibot.NumberSchema<undefined>;
            readonly joke: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly items: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly left: valibot.NumberSchema<undefined>;
            readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly item_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly ts_owned: valibot.NumberSchema<undefined>;
        readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
        readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithEquippedArraySchema: valibot.ObjectSchema<{
    readonly item_ids_equipped: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithEquippedTreeSchema: valibot.ObjectSchema<{
    readonly equipped: valibot.ObjectSchema<{
        readonly game: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ObjectSchema<{
            readonly cards: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: valibot.NumberSchema<undefined>;
            readonly joke: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly item_ids_equipped: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema: valibot.ObjectSchema<{
    readonly user: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    readonly equipped: valibot.ObjectSchema<{
        readonly game: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ObjectSchema<{
            readonly cards: valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly generator: valibot.NumberSchema<undefined>;
            readonly joke: valibot.NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly count: valibot.NumberSchema<undefined>;
    readonly collections: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly collection_id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly things: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly thing_types: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly qualities: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly coeff_rent: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>, undefined>;
}, undefined>;
type ResponseInventoryGetLegacyWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema>;
type EquippedResponse<E extends 'array' | 'tree' | undefined, Base, WithArray, WithTree> = E extends 'array' ? WithArray : E extends 'tree' ? WithTree : Base;
type ResponseInventoryGet<OL extends boolean, OU extends boolean, OE extends 'array' | 'tree' | undefined = undefined> = If<OL, If<OU, EquippedResponse<OE, ResponseInventoryGetLegacyWithUser, ResponseInventoryGetLegacyWithUserAndEquippedArray, ResponseInventoryGetLegacyWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetLegacy, ResponseInventoryGetLegacyWithEquippedArray, ResponseInventoryGetLegacyWithEquippedTree>>, If<OU, EquippedResponse<OE, ResponseInventoryGetWithUser, ResponseInventoryGetWithUserAndEquippedArray, ResponseInventoryGetWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetBase, ResponseInventoryGetWithEquippedArray, ResponseInventoryGetWithEquippedTree>>>;

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
    get<const OL extends boolean, const OU extends boolean, const OE extends 'array' | 'tree' | undefined = undefined>(options?: InventoryGetOptions<OL, OU, OE>): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
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
    get<const OL extends boolean, const OU extends boolean, const OE extends 'array' | 'tree' | undefined = undefined>(user_id: number | string, options?: InventoryGetOptions<OL, OU, OE>): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
}

declare const valiObjectTradeIdSchema: valibot.ObjectSchema<{
    readonly trade_id: valibot.NumberSchema<undefined>;
}, undefined>;
type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;
declare const valiObjectTradeSchema: valibot.ObjectSchema<{
    readonly create_time: valibot.NumberSchema<undefined>;
    readonly reaction_time: valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly status: valibot.NumberSchema<undefined>;
    readonly trade_id: valibot.NumberSchema<undefined>;
    readonly things_from: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly things_to: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly user_id_from: valibot.NumberSchema<undefined>;
    readonly user_id_to: valibot.NumberSchema<undefined>;
}, undefined>;
type ObjectTrade = InferOutput<typeof valiObjectTradeSchema>;
declare const valiObjectNewTradeSchema: valibot.ObjectSchema<{
    readonly trade_id: valibot.NumberSchema<undefined>;
    readonly status: valibot.NumberSchema<undefined>;
    readonly ts_created: valibot.NumberSchema<undefined>;
    readonly ts_completed: valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly initiator: valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly left: valibot.NumberSchema<undefined>;
                readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly item_id: valibot.NumberSchema<undefined>;
            readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly ts_owned: valibot.NumberSchema<undefined>;
            readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
            readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>;
    readonly receiver: valibot.ObjectSchema<{
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly item_ids: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly can_delete: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly previous_owners_user_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly uses: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly left: valibot.NumberSchema<undefined>;
                readonly origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly item_id: valibot.NumberSchema<undefined>;
            readonly item_ids: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly ts_owned: valibot.NumberSchema<undefined>;
            readonly ts_can_trade: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly ts_can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.RecordSchema<valibot.StringSchema<undefined>, valibot.UnknownSchema, undefined>, undefined>;
            readonly seed: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly xp_boost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>;
}, undefined>;
type ObjectNewTrade = InferOutput<typeof valiObjectNewTradeSchema>;
declare const valiObjectTradeListSchema: valibot.ObjectSchema<{
    readonly collections: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly qualities: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly item_ids_equipped: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
    readonly thing_types: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
    readonly trades: valibot.ArraySchema<valibot.ObjectSchema<{
        readonly create_time: valibot.NumberSchema<undefined>;
        readonly reaction_time: valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly status: valibot.NumberSchema<undefined>;
        readonly trade_id: valibot.NumberSchema<undefined>;
        readonly things_from: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly things_to: valibot.ArraySchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly user_id_from: valibot.NumberSchema<undefined>;
        readonly user_id_to: valibot.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly user_data: valibot.ArraySchema<valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
        readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
        readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_id: valibot.NumberSchema<undefined>;
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly owned_time: valibot.NumberSchema<undefined>;
            readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly user_id: valibot.NumberSchema<undefined>;
                readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
                readonly transactions: valibot.NumberSchema<undefined>;
                readonly money: valibot.NumberSchema<undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, valibot.ObjectSchema<{
                readonly count: valibot.NumberSchema<undefined>;
            }, undefined>], undefined>, undefined>;
            readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
                readonly id: valibot.NumberSchema<undefined>;
                readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
                readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
                readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                    readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                    readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                }, undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly thing_prototype_status: valibot.NumberSchema<undefined>;
            readonly thing_type: valibot.NumberSchema<undefined>;
            readonly image: valibot.StringSchema<undefined>;
            readonly title: valibot.StringSchema<undefined>;
            readonly description: valibot.StringSchema<undefined>;
            readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
            readonly quality: valibot.NumberSchema<undefined>;
            readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
            readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly thing_prototype_id: valibot.NumberSchema<undefined>;
                readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<0, undefined>;
            readonly count: valibot.NumberSchema<undefined>;
            readonly ts_last_ban: valibot.NumberSchema<undefined>;
            readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly type: valibot.LiteralSchema<1, undefined>;
            readonly ts_end: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly nick: valibot.StringSchema<undefined>;
        readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
        readonly avatar: valibot.StringSchema<undefined>;
        readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly gs_id: valibot.StringSchema<undefined>;
            readonly gs_game_id: valibot.StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly hidden: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly qual: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly expired: valibot.LiteralSchema<1, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly pts: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    }, undefined>, valibot.TransformAction<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>, valibot.TransformAction<Omit<{
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
                money: number;
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
                thing_prototype_id: number;
                hidden?: boolean | undefined;
            } | undefined;
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
    }>]>, undefined>;
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
        count?: number;
        offset?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
    getOutgoing(options: {
        count?: number;
        offset?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
    /**
     * Get the history of trades.
     * @param options -
     * @param options.count - The count of trades to return.
     * @param options.offset - The offset of the trades to return.
     * @returns The history of trades.
     */
    history(options?: {
        count?: number;
        offset?: number;
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
        count?: number;
        offset?: number;
    }): Promise<ApiResponse<ObjectTradeList>>;
}

declare const valiObjectUserShortSchema: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
    readonly user_id: valibot.NumberSchema<undefined>;
    readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly nick: valibot.StringSchema<undefined>;
    readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: valibot.StringSchema<undefined>;
    readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly gs_id: valibot.StringSchema<undefined>;
        readonly gs_game_id: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
        readonly hidden: valibot.LiteralSchema<1, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly qual: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly expired: valibot.LiteralSchema<1, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly pts: valibot.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
}, undefined>, valibot.TransformAction<{
    user_id: number;
    domain?: string | undefined;
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
declare const valiObjectUserSchema: valibot.SchemaWithPipe<readonly [valibot.ObjectSchema<{
    readonly nicks_old: valibot.ArraySchema<valibot.StringSchema<undefined>, undefined>;
    readonly profile_cover: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly social_vk: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly social_discord: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly social_twitch: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly games: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly games_wins: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly xp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly xp_level: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly badge: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly thing_id: valibot.NumberSchema<undefined>;
        readonly user_id: valibot.NumberSchema<undefined>;
        readonly owned_time: valibot.NumberSchema<undefined>;
        readonly can_give: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly can_sell: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly souvenir: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        readonly autograph: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly user_id: valibot.NumberSchema<undefined>;
            readonly text: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly moneybox: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
            readonly transactions: valibot.NumberSchema<undefined>;
            readonly money: valibot.NumberSchema<undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly numbers: valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>;
        }, undefined>, valibot.ObjectSchema<{
            readonly count: valibot.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
        readonly uses_left: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly uses_origin: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly variants: valibot.OptionalSchema<valibot.ArraySchema<valibot.ObjectSchema<{
            readonly id: valibot.NumberSchema<undefined>;
            readonly is_default: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
            readonly image: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly description: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
            readonly unlock: valibot.OptionalSchema<valibot.ObjectSchema<{
                readonly moneybox: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_sp: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
                readonly buy_tokens_cmpt: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly thing_prototype_id: valibot.NumberSchema<undefined>;
        readonly thing_prototype_status: valibot.NumberSchema<undefined>;
        readonly thing_type: valibot.NumberSchema<undefined>;
        readonly image: valibot.StringSchema<undefined>;
        readonly title: valibot.StringSchema<undefined>;
        readonly description: valibot.StringSchema<undefined>;
        readonly group: valibot.OptionalSchema<valibot.SchemaWithPipe<readonly [valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, valibot.TransformAction<number | null, number | undefined>]>, undefined>;
        readonly quality: valibot.NumberSchema<undefined>;
        readonly collection: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly twin_thing_prototype_id: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly delete_price: valibot.OptionalSchema<valibot.NullableSchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly can_be_upgraded: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly key: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
        readonly cases: valibot.OptionalSchema<valibot.ArraySchema<valibot.NumberSchema<undefined>, undefined>, undefined>;
        readonly drop: valibot.OptionalSchema<valibot.ObjectSchema<{
            readonly thing_prototype_id: valibot.NumberSchema<undefined>;
            readonly hidden: valibot.OptionalSchema<valibot.BooleanSchema<undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly friendship: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly muted: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly mfp_ban_history: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<0, undefined>;
        readonly count: valibot.NumberSchema<undefined>;
        readonly ts_last_ban: valibot.NumberSchema<undefined>;
        readonly ts_end: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly type: valibot.LiteralSchema<1, undefined>;
        readonly ts_end: valibot.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly user_id: valibot.NumberSchema<undefined>;
    readonly domain: valibot.OptionalSchema<valibot.StringSchema<undefined>, undefined>;
    readonly approved: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly nick: valibot.StringSchema<undefined>;
    readonly gender: valibot.UnionSchema<[valibot.LiteralSchema<0, undefined>, valibot.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: valibot.StringSchema<undefined>;
    readonly online: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly current_game: valibot.OptionalSchema<valibot.ObjectSchema<{
        readonly gs_id: valibot.StringSchema<undefined>;
        readonly gs_game_id: valibot.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly rank: valibot.OptionalSchema<valibot.UnionSchema<[valibot.ObjectSchema<{
        readonly hidden: valibot.LiteralSchema<1, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly qual: valibot.NumberSchema<undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly expired: valibot.LiteralSchema<1, undefined>;
    }, undefined>, valibot.ObjectSchema<{
        readonly id: valibot.NumberSchema<undefined>;
        readonly pts: valibot.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly vip: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly bot: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly moderator: valibot.SchemaWithPipe<readonly [valibot.OptionalSchema<valibot.PicklistSchema<[0, 1], undefined>, 0 | 1>, valibot.TransformAction<0 | 1, boolean>]>;
}, undefined>, valibot.TransformAction<{
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
            money: number;
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
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
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
            money: number;
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
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
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
}>, valibot.TransformAction<Omit<{
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
            money: number;
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
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
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
            money: number;
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
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
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
type User = InferOutput<typeof valiObjectUserSchema>;
type UserShort = InferOutput<typeof valiObjectUserShortSchema>;

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
type CallMethodResponse<ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined> = {
    success: true;
    data: valibot.InferOutput<ValiResponseSchema>;
} | {
    success: false;
    code: number;
    description?: string;
    data: ValiErrorDataSchema extends undefined ? never : valibot.InferOutput<Exclude<ValiErrorDataSchema, undefined>>;
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
 * @class M1
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

declare class M1ApiBase {
    protected baseClient: M1;
    constructor(baseClient: M1);
}

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

export { valiObjectItemProtoSchema as $, type ApiResponse as A, valiResponseGchatGetSchema as B, type CallMethodOptions as C, valiResponseGchatSendSchema as D, type ResponseGchatGet as E, type ResponseGchatSend as F, type GchatMessage as G, valiResponseImSendSchema as H, valiObjectMessageSchema as I, valiObjectDialogSchema as J, valiResponseImDialogsGetSchema as K, valiResponseImHistoryGetSchema as L, M1ApiBase as M, type ResponseImSend as N, type ResponseImDialogsGet as O, type ResponseImHistoryGet as P, type Dialog as Q, type ResponseFriendsGetBase as R, type Session as S, type TotpSessionToken as T, type Message as U, valiObjectItemVariantSchema as V, type ItemVariant as W, valiObjectThingPrototypeSchema as X, type ThingPrototype as Y, valiObjectThingSchema as Z, type Thing as _, M1ApiAuth as a, type ItemProto as a0, type ItemShort as a1, valiObjectItemSchema as a2, type Item as a3, valiObjectItemProtoLegacySchema as a4, valiObjectTradeIdSchema as a5, type ObjectTradeId as a6, valiObjectTradeSchema as a7, type ObjectTrade as a8, valiObjectNewTradeSchema as a9, type ObjectNewTrade as aa, valiObjectTradeListSchema as ab, type ObjectTradeList as ac, valiObjectUserShortSchema as ad, valiObjectUserSchema as ae, type User as af, type UserShort as ag, type M1ApiResponseHook as ah, M1 as ai, M1ApiBots as b, M1ApiData as c, M1ApiFriends as d, M1ApiGchat as e, M1ApiIm as f, M1ApiTrades as g, M1ApiUsers as h, type CallMethodResponse as i, valiResponseTotpSessionTokenSchema as j, valiResponseFriendsGetBaseSchema as k, valiResponseFriendsGetWithUserSchema as l, type ResponseFriendsGetWithUser as m, valiResponseFriendsGetShortSchema as n, type ResponseFriendsGetShort as o, valiResponseFriendsGetShortWithUserSchema as p, type ResponseFriendsGetShortWithUser as q, type ResponseFriendsGet as r, valiResponseFriendsGetRequestsSchema as s, type ResponseFriendsGetRequests as t, valiResponseFriendsGetRequestsShortSchema as u, valiObjectSessionSchema as v, type ResponseFriendsGetRequestsShort as w, valiObjectGchatMessageBaseSchema as x, valiObjectGchatMessageAdditionalDataSchema as y, valiObjectGchatMessageSchema as z };
