import { ApiResponse, CallMethodOptions, CallMethodResponse, Dialog, GchatMessage, Item, ItemProto, ItemShort, ItemVariant, M1ApiAuth$1 as M1ApiAuth, M1ApiBase$1 as M1ApiBase, M1ApiBots$1 as M1ApiBots, M1ApiData$1 as M1ApiData, M1ApiFriends$1 as M1ApiFriends, M1ApiGchat$1 as M1ApiGchat, M1ApiIm$1 as M1ApiIm, M1ApiTrades$1 as M1ApiTrades, M1ApiUsers$1 as M1ApiUsers, Message, ObjectNewTrade, ObjectTrade, ObjectTradeId, ObjectTradeList, ResponseFriendsGet, ResponseFriendsGetBase, ResponseFriendsGetRequests, ResponseFriendsGetRequestsShort, ResponseFriendsGetShort, ResponseFriendsGetShortWithUser, ResponseFriendsGetWithUser, ResponseGchatGet, ResponseGchatSend, ResponseImDialogsGet, ResponseImHistoryGet, ResponseImSend, Session, Thing, ThingPrototype, TotpSessionToken, User, UserShort, valiObjectDialogSchema$1 as valiObjectDialogSchema, valiObjectGchatMessageAdditionalDataSchema$1 as valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageBaseSchema$1 as valiObjectGchatMessageBaseSchema, valiObjectGchatMessageSchema$1 as valiObjectGchatMessageSchema, valiObjectItemProtoLegacySchema$1 as valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema$1 as valiObjectItemProtoSchema, valiObjectItemSchema$1 as valiObjectItemSchema, valiObjectItemVariantSchema$1 as valiObjectItemVariantSchema, valiObjectMessageSchema$1 as valiObjectMessageSchema, valiObjectNewTradeSchema$1 as valiObjectNewTradeSchema, valiObjectSessionSchema$1 as valiObjectSessionSchema, valiObjectThingPrototypeSchema$1 as valiObjectThingPrototypeSchema, valiObjectThingSchema$1 as valiObjectThingSchema, valiObjectTradeIdSchema$1 as valiObjectTradeIdSchema, valiObjectTradeListSchema$1 as valiObjectTradeListSchema, valiObjectTradeSchema$1 as valiObjectTradeSchema, valiObjectUserSchema$1 as valiObjectUserSchema, valiObjectUserShortSchema$1 as valiObjectUserShortSchema, valiResponseFriendsGetBaseSchema$1 as valiResponseFriendsGetBaseSchema, valiResponseFriendsGetRequestsSchema$1 as valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema$1 as valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetShortSchema$1 as valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema$1 as valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetWithUserSchema$1 as valiResponseFriendsGetWithUserSchema, valiResponseGchatGetSchema$1 as valiResponseGchatGetSchema, valiResponseGchatSendSchema$1 as valiResponseGchatSendSchema, valiResponseImDialogsGetSchema$1 as valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema$1 as valiResponseImHistoryGetSchema, valiResponseImSendSchema$1 as valiResponseImSendSchema, valiResponseTotpSessionTokenSchema$1 as valiResponseTotpSessionTokenSchema } from "./auth-DHUVVYre.js";
import { InferOutput } from "valibot";

//#region src/api/oauth.d.ts
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
} //#endregion
//#region src/valibot/data.d.ts
declare const valiObjectPropertyTitleSchema: any;
type ObjectPropertyTitle = InferOutput<typeof valiObjectPropertyTitleSchema>;
declare const valiObjectCollectionSchema: any;
type ObjectCollection = InferOutput<typeof valiObjectCollectionSchema>;
declare const valiObjectQualitySchema: any;
type ObjectQuality = InferOutput<typeof valiObjectQualitySchema>;

//#endregion
export { CallMethodOptions, CallMethodResponse, Dialog, GchatMessage, Item, ItemProto, ItemShort, ItemVariant, M1ApiAuth, M1ApiBase, M1ApiBots, M1ApiData, M1ApiFriends, M1ApiGchat, M1ApiIm, M1ApiOauth, M1ApiTrades, M1ApiUsers, Message, ObjectCollection, ObjectNewTrade, ObjectPropertyTitle, ObjectQuality, ObjectTrade, ObjectTradeId, ObjectTradeList, ResponseFriendsGet, ResponseFriendsGetBase, ResponseFriendsGetRequests, ResponseFriendsGetRequestsShort, ResponseFriendsGetShort, ResponseFriendsGetShortWithUser, ResponseFriendsGetWithUser, ResponseGchatGet, ResponseGchatSend, ResponseImDialogsGet, ResponseImHistoryGet, ResponseImSend, Session, Thing, ThingPrototype, TotpSessionToken, User, UserShort, valiObjectCollectionSchema, valiObjectDialogSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageSchema, valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemVariantSchema, valiObjectMessageSchema, valiObjectNewTradeSchema, valiObjectPropertyTitleSchema, valiObjectQualitySchema, valiObjectSessionSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectTradeIdSchema, valiObjectTradeListSchema, valiObjectTradeSchema, valiObjectUserSchema, valiObjectUserShortSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetWithUserSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, valiResponseImSendSchema, valiResponseTotpSessionTokenSchema };