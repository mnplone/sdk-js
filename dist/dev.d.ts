import { M as M1ApiBase, A as ApiResponse, S as Session } from './auth-DwFUDUlx.js';
export { C as CallMethodOptions, j as CallMethodResponse, P as Dialog, G as GchatMessage, aw as Item, at as ItemProto, au as ItemShort, an as ItemVariant, a as M1ApiAuth, b as M1ApiBots, c as M1ApiData, d as M1ApiFriends, e as M1ApiGchat, f as M1ApiIm, g as M1ApiInventory, h as M1ApiTrades, i as M1ApiUsers, N as Message, aD as ObjectNewTrade, aB as ObjectTrade, az as ObjectTradeId, aF as ObjectTradeList, R as RequestOptions, t as ResponseFriendsGet, m as ResponseFriendsGetBase, w as ResponseFriendsGetRequests, y as ResponseFriendsGetRequestsShort, q as ResponseFriendsGetShort, s as ResponseFriendsGetShortWithUser, o as ResponseFriendsGetWithUser, F as ResponseGchatGet, I as ResponseGchatSend, U as ResponseImDialogsGet, W as ResponseImHistoryGet, K as ResponseImSend, Y as ResponseInventoryCraft, al as ResponseInventoryGet, _ as ResponseInventoryGetBase, a0 as ResponseInventoryGetLegacy, ae as ResponseInventoryGetLegacyWithEquippedArray, ag as ResponseInventoryGetLegacyWithEquippedTree, a4 as ResponseInventoryGetLegacyWithUser, ai as ResponseInventoryGetLegacyWithUserAndEquippedArray, ak as ResponseInventoryGetLegacyWithUserAndEquippedTree, a6 as ResponseInventoryGetWithEquippedArray, a8 as ResponseInventoryGetWithEquippedTree, a2 as ResponseInventoryGetWithUser, aa as ResponseInventoryGetWithUserAndEquippedArray, ac as ResponseInventoryGetWithUserAndEquippedTree, ar as Thing, ap as ThingPrototype, T as TotpSessionToken, aL as User, aM as UserShort, aI as valiObjectActiveUserSchema, aG as valiObjectActiveUserShortSchema, O as valiObjectDialogSchema, B as valiObjectGchatMessageAdditionalDataSchema, z as valiObjectGchatMessageBaseSchema, D as valiObjectGchatMessageSchema, aH as valiObjectInactiveUserSchema, ax as valiObjectItemProtoLegacySchema, as as valiObjectItemProtoSchema, av as valiObjectItemSchema, am as valiObjectItemVariantSchema, L as valiObjectMessageSchema, aC as valiObjectNewTradeSchema, v as valiObjectSessionSchema, ao as valiObjectThingPrototypeSchema, aq as valiObjectThingSchema, ay as valiObjectTradeIdSchema, aE as valiObjectTradeListSchema, aA as valiObjectTradeSchema, aK as valiObjectUserSchema, aJ as valiObjectUserShortSchema, l as valiResponseFriendsGetBaseSchema, u as valiResponseFriendsGetRequestsSchema, x as valiResponseFriendsGetRequestsShortSchema, p as valiResponseFriendsGetShortSchema, r as valiResponseFriendsGetShortWithUserSchema, n as valiResponseFriendsGetWithUserSchema, E as valiResponseGchatGetSchema, H as valiResponseGchatSendSchema, Q as valiResponseImDialogsGetSchema, V as valiResponseImHistoryGetSchema, J as valiResponseImSendSchema, X as valiResponseInventoryCraftSchema, Z as valiResponseInventoryGetBaseSchema, $ as valiResponseInventoryGetLegacySchema, ad as valiResponseInventoryGetLegacyWithEquippedArraySchema, af as valiResponseInventoryGetLegacyWithEquippedTreeSchema, ah as valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema, aj as valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema, a3 as valiResponseInventoryGetLegacyWithUserSchema, a5 as valiResponseInventoryGetWithEquippedArraySchema, a7 as valiResponseInventoryGetWithEquippedTreeSchema, a9 as valiResponseInventoryGetWithUserAndEquippedArraySchema, ab as valiResponseInventoryGetWithUserAndEquippedTreeSchema, a1 as valiResponseInventoryGetWithUserSchema, k as valiResponseTotpSessionTokenSchema } from './auth-DwFUDUlx.js';
import * as v from 'valibot';
import '@extws/client';
import 'type-fest';

declare class M1ApiOauth extends M1ApiBase {
    /**
     * Exchange a code for a session
     * @param options - The parameters for the exchange
     * @param options.app_id - The app ID
     * @param options.app_secret - The app secret
     * @param options.code - The code
     * @param options.redirect_uri - The redirect URI
     * @returns Session object
     */
    exchangeCode(options: {
        app_id: number;
        app_secret: string;
        code: string;
        redirect_uri: string;
    }): Promise<ApiResponse<Session>>;
}

declare const valiObjectPropertyTitleSchema: v.ObjectSchema<{
    readonly id: v.NumberSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
}, undefined>;
type ObjectPropertyTitle = v.InferOutput<typeof valiObjectPropertyTitleSchema>;
declare const valiObjectCollectionSchema: v.ObjectSchema<{
    readonly collection_id: v.NumberSchema<undefined>;
    readonly id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly title: v.StringSchema<undefined>;
}, undefined>;
type ObjectCollection = v.InferOutput<typeof valiObjectCollectionSchema>;
declare const valiObjectQualitySchema: v.ObjectSchema<{
    readonly id: v.NumberSchema<undefined>;
    readonly title: v.StringSchema<undefined>;
    readonly coeff_rent: v.NumberSchema<undefined>;
    readonly color: v.StringSchema<undefined>;
}, undefined>;
type ObjectQuality = v.InferOutput<typeof valiObjectQualitySchema>;
declare const valiResponseDataSearchItemProtosSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
}>]>;
type ResponseDataSearchItemProtos = v.InferOutput<typeof valiResponseDataSearchItemProtosSchema>;

export { M1ApiBase, M1ApiOauth, type ObjectCollection, type ObjectPropertyTitle, type ObjectQuality, type ResponseDataSearchItemProtos, Session, valiObjectCollectionSchema, valiObjectPropertyTitleSchema, valiObjectQualitySchema, valiResponseDataSearchItemProtosSchema };
