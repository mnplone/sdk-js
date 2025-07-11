import {
  M1ApiAuth,
  M1ApiBase,
  M1ApiBots,
  M1ApiData,
  M1ApiFriends,
  M1ApiGchat,
  M1ApiIm,
  M1ApiTrades,
  M1ApiUsers,
  valiObjectDialogSchema,
  valiObjectGchatMessageAdditionalDataSchema,
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageSchema,
  valiObjectItemProtoLegacySchema,
  valiObjectItemProtoSchema,
  valiObjectItemSchema,
  valiObjectItemVariantSchema,
  valiObjectMessageSchema,
  valiObjectNewTradeSchema,
  valiObjectSessionSchema,
  valiObjectThingPrototypeSchema,
  valiObjectThingSchema,
  valiObjectTradeIdSchema,
  valiObjectTradeListSchema,
  valiObjectTradeSchema,
  valiObjectUserSchema,
  valiObjectUserShortSchema,
  valiResponseFriendsGetBaseSchema,
  valiResponseFriendsGetRequestsSchema,
  valiResponseFriendsGetRequestsShortSchema,
  valiResponseFriendsGetShortSchema,
  valiResponseFriendsGetShortWithUserSchema,
  valiResponseFriendsGetWithUserSchema,
  valiResponseGchatGetSchema,
  valiResponseGchatSendSchema,
  valiResponseImDialogsGetSchema,
  valiResponseImHistoryGetSchema,
  valiResponseImSendSchema,
  valiResponseTotpSessionTokenSchema
} from "./main-t4a7hnxe.js";
// src/api/oauth.ts
class M1ApiOauth extends M1ApiBase {
  exchangeCode(options) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "oauth.exchangeCode",
      data: options,
      valiResponseSchema: valiObjectSessionSchema
    });
  }
}
// src/valibot/data.ts
import {
  number,
  object,
  optional,
  string
} from "valibot";
var valiObjectPropertyTitleSchema = object({
  id: number(),
  title: string()
});
var valiObjectCollectionSchema = object({
  collection_id: number(),
  id: optional(number()),
  title: string()
});
var valiObjectQualitySchema = object({
  coeff_rent: number(),
  color: string(),
  ...valiObjectPropertyTitleSchema.entries
});
export {
  valiResponseTotpSessionTokenSchema,
  valiResponseImSendSchema,
  valiResponseImHistoryGetSchema,
  valiResponseImDialogsGetSchema,
  valiResponseGchatSendSchema,
  valiResponseGchatGetSchema,
  valiResponseFriendsGetWithUserSchema,
  valiResponseFriendsGetShortWithUserSchema,
  valiResponseFriendsGetShortSchema,
  valiResponseFriendsGetRequestsShortSchema,
  valiResponseFriendsGetRequestsSchema,
  valiResponseFriendsGetBaseSchema,
  valiObjectUserShortSchema,
  valiObjectUserSchema,
  valiObjectTradeSchema,
  valiObjectTradeListSchema,
  valiObjectTradeIdSchema,
  valiObjectThingSchema,
  valiObjectThingPrototypeSchema,
  valiObjectSessionSchema,
  valiObjectQualitySchema,
  valiObjectPropertyTitleSchema,
  valiObjectNewTradeSchema,
  valiObjectMessageSchema,
  valiObjectItemVariantSchema,
  valiObjectItemSchema,
  valiObjectItemProtoSchema,
  valiObjectItemProtoLegacySchema,
  valiObjectGchatMessageSchema,
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageAdditionalDataSchema,
  valiObjectDialogSchema,
  valiObjectCollectionSchema,
  M1ApiUsers,
  M1ApiTrades,
  M1ApiOauth,
  M1ApiIm,
  M1ApiGchat,
  M1ApiFriends,
  M1ApiData,
  M1ApiBots,
  M1ApiBase,
  M1ApiAuth
};
