import { M as M1ApiBase, A as ApiResponse, S as Session } from './auth-DO_v0hSB.js';
export { C as CallMethodOptions, i as CallMethodResponse, Q as Dialog, G as GchatMessage, a3 as Item, a0 as ItemProto, a1 as ItemShort, W as ItemVariant, a as M1ApiAuth, b as M1ApiBots, c as M1ApiData, d as M1ApiFriends, e as M1ApiGchat, f as M1ApiIm, g as M1ApiTrades, h as M1ApiUsers, U as Message, aa as ObjectNewTrade, a8 as ObjectTrade, a6 as ObjectTradeId, ac as ObjectTradeList, r as ResponseFriendsGet, R as ResponseFriendsGetBase, t as ResponseFriendsGetRequests, w as ResponseFriendsGetRequestsShort, o as ResponseFriendsGetShort, q as ResponseFriendsGetShortWithUser, m as ResponseFriendsGetWithUser, E as ResponseGchatGet, F as ResponseGchatSend, O as ResponseImDialogsGet, P as ResponseImHistoryGet, N as ResponseImSend, _ as Thing, Y as ThingPrototype, T as TotpSessionToken, af as User, ag as UserShort, J as valiObjectDialogSchema, y as valiObjectGchatMessageAdditionalDataSchema, x as valiObjectGchatMessageBaseSchema, z as valiObjectGchatMessageSchema, a4 as valiObjectItemProtoLegacySchema, $ as valiObjectItemProtoSchema, a2 as valiObjectItemSchema, V as valiObjectItemVariantSchema, I as valiObjectMessageSchema, a9 as valiObjectNewTradeSchema, v as valiObjectSessionSchema, X as valiObjectThingPrototypeSchema, Z as valiObjectThingSchema, a5 as valiObjectTradeIdSchema, ab as valiObjectTradeListSchema, a7 as valiObjectTradeSchema, ae as valiObjectUserSchema, ad as valiObjectUserShortSchema, k as valiResponseFriendsGetBaseSchema, s as valiResponseFriendsGetRequestsSchema, u as valiResponseFriendsGetRequestsShortSchema, n as valiResponseFriendsGetShortSchema, p as valiResponseFriendsGetShortWithUserSchema, l as valiResponseFriendsGetWithUserSchema, B as valiResponseGchatGetSchema, D as valiResponseGchatSendSchema, K as valiResponseImDialogsGetSchema, L as valiResponseImHistoryGetSchema, H as valiResponseImSendSchema, j as valiResponseTotpSessionTokenSchema } from './auth-DO_v0hSB.js';
import * as valibot from 'valibot';
import { InferOutput } from 'valibot';
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

declare const valiObjectPropertyTitleSchema: valibot.ObjectSchema<{
    readonly id: valibot.NumberSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
}, undefined>;
type ObjectPropertyTitle = InferOutput<typeof valiObjectPropertyTitleSchema>;
declare const valiObjectCollectionSchema: valibot.ObjectSchema<{
    readonly collection_id: valibot.NumberSchema<undefined>;
    readonly id: valibot.OptionalSchema<valibot.NumberSchema<undefined>, undefined>;
    readonly title: valibot.StringSchema<undefined>;
}, undefined>;
type ObjectCollection = InferOutput<typeof valiObjectCollectionSchema>;
declare const valiObjectQualitySchema: valibot.ObjectSchema<{
    readonly id: valibot.NumberSchema<undefined>;
    readonly title: valibot.StringSchema<undefined>;
    readonly coeff_rent: valibot.NumberSchema<undefined>;
    readonly color: valibot.StringSchema<undefined>;
}, undefined>;
type ObjectQuality = InferOutput<typeof valiObjectQualitySchema>;

export { M1ApiBase, M1ApiOauth, type ObjectCollection, type ObjectPropertyTitle, type ObjectQuality, Session, valiObjectCollectionSchema, valiObjectPropertyTitleSchema, valiObjectQualitySchema };
