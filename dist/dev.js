import { M1ApiAuth, M1ApiBase, M1ApiBots, M1ApiData, M1ApiFriends, M1ApiGchat, M1ApiIm, M1ApiTrades, M1ApiUsers, valiObjectDialogSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageSchema, valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemVariantSchema, valiObjectMessageSchema, valiObjectNewTradeSchema, valiObjectSessionSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectTradeIdSchema, valiObjectTradeListSchema, valiObjectTradeSchema, valiObjectUserSchema, valiObjectUserShortSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetWithUserSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, valiResponseImSendSchema, valiResponseTotpSessionTokenSchema } from "./auth-DgnitDvL.js";
import { number, object, optional, string } from "valibot";

//#region src/api/oauth.ts
var M1ApiOauth = class extends M1ApiBase {
	/**
	* Exchange a code for a session
	* @param options - The parameters for the exchange
	* @param options.app_id - The app ID
	* @param options.app_secret - The app secret
	* @param options.code - The code
	* @param options.redirect_uri - The redirect URI
	* @returns Session object
	*/
	exchangeCode(options) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "oauth.exchangeCode",
			data: options,
			valiResponseSchema: valiObjectSessionSchema
		});
	}
};

//#endregion
//#region src/valibot/data.ts
const valiObjectPropertyTitleSchema = object({
	id: number(),
	title: string()
});
const valiObjectCollectionSchema = object({
	collection_id: number(),
	id: optional(number()),
	title: string()
});
const valiObjectQualitySchema = object({
	coeff_rent: number(),
	color: string(),
	...valiObjectPropertyTitleSchema.entries
});

//#endregion
export { M1ApiAuth, M1ApiBase, M1ApiBots, M1ApiData, M1ApiFriends, M1ApiGchat, M1ApiIm, M1ApiOauth, M1ApiTrades, M1ApiUsers, valiObjectCollectionSchema, valiObjectDialogSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageSchema, valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemVariantSchema, valiObjectMessageSchema, valiObjectNewTradeSchema, valiObjectPropertyTitleSchema, valiObjectQualitySchema, valiObjectSessionSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectTradeIdSchema, valiObjectTradeListSchema, valiObjectTradeSchema, valiObjectUserSchema, valiObjectUserShortSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetWithUserSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, valiResponseImSendSchema, valiResponseTotpSessionTokenSchema };