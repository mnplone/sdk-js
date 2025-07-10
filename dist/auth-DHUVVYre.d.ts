import * as v from "valibot";
import { InferOutput } from "valibot";
import { ExtWSClient } from "@extws/client";
import { If } from "type-fest";

//#region src/valibot/auth.d.ts
declare const valiObjectSessionSchema: any;
declare const valiResponseTotpSessionTokenSchema: any;
type TotpSessionToken = InferOutput<typeof valiResponseTotpSessionTokenSchema>;
type Session = InferOutput<typeof valiObjectSessionSchema>;

//#endregion
//#region src/types.d.ts
type ValiBaseSchema = v.BaseSchema<any, any, any>;
type ApiResponse<DR, DE = never> = {
  success: true;
  data: DR;
} | {
  success: false;
  code: number;
  description?: string;
  data: DE;
};

//#endregion
//#region src/api/bots.d.ts
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

//#endregion
//#region src/valibot/items.d.ts
declare const valiObjectItemVariantSchema: any;
type ItemVariant = InferOutput<typeof valiObjectItemVariantSchema>;
declare const valiObjectThingPrototypeSchema: any;
type ThingPrototype = InferOutput<typeof valiObjectThingPrototypeSchema>;
declare const valiObjectThingSchema: any;
type Thing = InferOutput<typeof valiObjectThingSchema>;
declare const valiObjectItemProtoSchema: any;
type ItemProto = InferOutput<typeof valiObjectItemProtoSchema>;
declare const valiObjectItemShortSchema: any;
type ItemShort = InferOutput<typeof valiObjectItemShortSchema>;
declare const valiObjectItemSchema: any;
type Item = InferOutput<typeof valiObjectItemSchema>;
declare const valiObjectItemProtoLegacySchema: any;

//#endregion
//#region src/api/data.d.ts
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

//#endregion
//#region src/valibot/friends.d.ts
declare const valiResponseFriendsGetBaseSchema: any;
type ResponseFriendsGetBase = InferOutput<typeof valiResponseFriendsGetBaseSchema>;
declare const valiResponseFriendsGetWithUserSchema: any;
type ResponseFriendsGetWithUser = InferOutput<typeof valiResponseFriendsGetWithUserSchema>;
declare const valiResponseFriendsGetShortSchema: any;
type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
declare const valiResponseFriendsGetShortWithUserSchema: any;
type ResponseFriendsGetShortWithUser = InferOutput<typeof valiResponseFriendsGetShortWithUserSchema>;
type ResponseFriendsGet<S extends boolean, U extends boolean> = If<S, If<U, ResponseFriendsGetShortWithUser, ResponseFriendsGetShort>, If<U, ResponseFriendsGetWithUser, ResponseFriendsGetBase>>;
declare const valiResponseFriendsGetRequestsSchema: any;
type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
declare const valiResponseFriendsGetRequestsShortSchema: any;
type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;

//#endregion
//#region src/api/friends.d.ts
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

//#endregion
//#region src/valibot/gchat.d.ts
declare const valiObjectGchatMessageBaseSchema: any;
declare const valiObjectGchatMessageAdditionalDataSchema: any;
declare const valiObjectGchatMessageSchema: any;
declare const valiResponseGchatGetSchema: any;
declare const valiResponseGchatSendSchema: any;
type ResponseGchatGet = InferOutput<typeof valiResponseGchatGetSchema>;
type GchatMessage = InferOutput<typeof valiObjectGchatMessageSchema>;
type ResponseGchatSend = InferOutput<typeof valiResponseGchatSendSchema>;

//#endregion
//#region src/api/gchat.d.ts
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

//#endregion
//#region src/valibot/im.d.ts
declare const valiResponseImSendSchema: any;
declare const valiObjectMessageSchema: any;
declare const valiObjectDialogSchema: any;
declare const valiResponseImDialogsGetSchema: any;
declare const valiResponseImHistoryGetSchema: any;
type ResponseImSend = InferOutput<typeof valiResponseImSendSchema>;
type ResponseImDialogsGet = InferOutput<typeof valiResponseImDialogsGetSchema>;
type ResponseImHistoryGet = InferOutput<typeof valiResponseImHistoryGetSchema>;
type Dialog = InferOutput<typeof valiObjectDialogSchema>;
type Message = InferOutput<typeof valiObjectMessageSchema>;

//#endregion
//#region src/api/im.d.ts
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

//#endregion
//#region src/valibot/inventory.d.ts
declare const valiResponseInventoryGetBaseSchema: any;
type ResponseInventoryGetBase = InferOutput<typeof valiResponseInventoryGetBaseSchema>;
declare const valiResponseInventoryGetLegacySchema: any;
type ResponseInventoryGetLegacy = InferOutput<typeof valiResponseInventoryGetLegacySchema>;
declare const valiResponseInventoryGetWithUserSchema: any;
type ResponseInventoryGetWithUser = InferOutput<typeof valiResponseInventoryGetWithUserSchema>;
declare const valiResponseInventoryGetLegacyWithUserSchema: any;
type ResponseInventoryGetLegacyWithUser = InferOutput<typeof valiResponseInventoryGetLegacyWithUserSchema>;
declare const valiResponseInventoryGetWithEquippedArraySchema: any;
type ResponseInventoryGetWithEquippedArray = InferOutput<typeof valiResponseInventoryGetWithEquippedArraySchema>;
declare const valiResponseInventoryGetWithEquippedTreeSchema: any;
type ResponseInventoryGetWithEquippedTree = InferOutput<typeof valiResponseInventoryGetWithEquippedTreeSchema>;
declare const valiResponseInventoryGetWithUserAndEquippedArraySchema: any;
type ResponseInventoryGetWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetWithUserAndEquippedTreeSchema: any;
type ResponseInventoryGetWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithEquippedArraySchema: any;
type ResponseInventoryGetLegacyWithEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithEquippedTreeSchema: any;
type ResponseInventoryGetLegacyWithEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedTreeSchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema: any;
type ResponseInventoryGetLegacyWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema>;
declare const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema: any;
type ResponseInventoryGetLegacyWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema>;
type EquippedResponse<E extends 'array' | 'tree' | undefined, Base, WithArray, WithTree> = E extends 'array' ? WithArray : E extends 'tree' ? WithTree : Base;
type ResponseInventoryGet<OL extends boolean, OU extends boolean, OE extends 'array' | 'tree' | undefined = undefined> = If<OL, If<OU, EquippedResponse<OE, ResponseInventoryGetLegacyWithUser, ResponseInventoryGetLegacyWithUserAndEquippedArray, ResponseInventoryGetLegacyWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetLegacy, ResponseInventoryGetLegacyWithEquippedArray, ResponseInventoryGetLegacyWithEquippedTree>>, If<OU, EquippedResponse<OE, ResponseInventoryGetWithUser, ResponseInventoryGetWithUserAndEquippedArray, ResponseInventoryGetWithUserAndEquippedTree>, EquippedResponse<OE, ResponseInventoryGetBase, ResponseInventoryGetWithEquippedArray, ResponseInventoryGetWithEquippedTree>>>;

//#endregion
//#region src/api/inventory.d.ts
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

//#endregion
//#region src/valibot/trades.d.ts
declare const valiObjectTradeIdSchema: any;
type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;
declare const valiObjectTradeSchema: any;
type ObjectTrade = InferOutput<typeof valiObjectTradeSchema>;
declare const valiObjectNewTradeSchema: any;
type ObjectNewTrade = InferOutput<typeof valiObjectNewTradeSchema>;
declare const valiObjectTradeListSchema: any;
type ObjectTradeList = InferOutput<typeof valiObjectTradeListSchema>;

//#endregion
//#region src/api/trades.d.ts
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

//#endregion
//#region src/valibot/users.d.ts
declare const valiObjectUserShortSchema: any;
declare const valiObjectUserSchema: any;
type User = InferOutput<typeof valiObjectUserSchema>;
type UserShort = InferOutput<typeof valiObjectUserShortSchema>;

//#endregion
//#region src/api/users.d.ts
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

//#endregion
//#region src/m1.d.ts
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
  data: InferOutput<ValiResponseSchema>;
} | {
  success: false;
  code: number;
  description?: string;
  data: ValiErrorDataSchema extends undefined ? never : InferOutput<Exclude<ValiErrorDataSchema, undefined>>;
};
type M1Options = {
  hostname?: string;
  access_token?: string;
  refresh_token?: string;
  websocket?: {
    subs?: string;
  };
  headers?: Headers | Record<string, string>;
  hooks?: {
    [key: string]: <ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined>(this: M1, options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>, data: Record<string, unknown>) => Promise<CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema> | undefined>;
  };
};
/**
 * @class M1
 * @classdesc A class to interact with Monopoly One API
 * @param options - The options to use
 * @param options.access_token - Access token
 * @param options.refresh_token - Refresh token
 * @param options.polling - Connect to WebSocket
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

//#endregion
//#region src/api/base.d.ts
declare class M1ApiBase {
  protected baseClient: M1;
  constructor(baseClient: M1);
}

//#endregion
//#region src/api/auth.d.ts
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

//#endregion
export { ApiResponse, CallMethodOptions, CallMethodResponse, Dialog, GchatMessage, Item, ItemProto, ItemShort, ItemVariant, M1 as M1$1, M1ApiAuth as M1ApiAuth$1, M1ApiBase as M1ApiBase$1, M1ApiBots as M1ApiBots$1, M1ApiData as M1ApiData$1, M1ApiFriends as M1ApiFriends$1, M1ApiGchat as M1ApiGchat$1, M1ApiIm as M1ApiIm$1, M1ApiTrades as M1ApiTrades$1, M1ApiUsers as M1ApiUsers$1, Message, ObjectNewTrade, ObjectTrade, ObjectTradeId, ObjectTradeList, ResponseFriendsGet, ResponseFriendsGetBase, ResponseFriendsGetRequests, ResponseFriendsGetRequestsShort, ResponseFriendsGetShort, ResponseFriendsGetShortWithUser, ResponseFriendsGetWithUser, ResponseGchatGet, ResponseGchatSend, ResponseImDialogsGet, ResponseImHistoryGet, ResponseImSend, Session, Thing, ThingPrototype, TotpSessionToken, User, UserShort, valiObjectDialogSchema as valiObjectDialogSchema$1, valiObjectGchatMessageAdditionalDataSchema as valiObjectGchatMessageAdditionalDataSchema$1, valiObjectGchatMessageBaseSchema as valiObjectGchatMessageBaseSchema$1, valiObjectGchatMessageSchema as valiObjectGchatMessageSchema$1, valiObjectItemProtoLegacySchema as valiObjectItemProtoLegacySchema$1, valiObjectItemProtoSchema as valiObjectItemProtoSchema$1, valiObjectItemSchema as valiObjectItemSchema$1, valiObjectItemVariantSchema as valiObjectItemVariantSchema$1, valiObjectMessageSchema as valiObjectMessageSchema$1, valiObjectNewTradeSchema as valiObjectNewTradeSchema$1, valiObjectSessionSchema as valiObjectSessionSchema$1, valiObjectThingPrototypeSchema as valiObjectThingPrototypeSchema$1, valiObjectThingSchema as valiObjectThingSchema$1, valiObjectTradeIdSchema as valiObjectTradeIdSchema$1, valiObjectTradeListSchema as valiObjectTradeListSchema$1, valiObjectTradeSchema as valiObjectTradeSchema$1, valiObjectUserSchema as valiObjectUserSchema$1, valiObjectUserShortSchema as valiObjectUserShortSchema$1, valiResponseFriendsGetBaseSchema as valiResponseFriendsGetBaseSchema$1, valiResponseFriendsGetRequestsSchema as valiResponseFriendsGetRequestsSchema$1, valiResponseFriendsGetRequestsShortSchema as valiResponseFriendsGetRequestsShortSchema$1, valiResponseFriendsGetShortSchema as valiResponseFriendsGetShortSchema$1, valiResponseFriendsGetShortWithUserSchema as valiResponseFriendsGetShortWithUserSchema$1, valiResponseFriendsGetWithUserSchema as valiResponseFriendsGetWithUserSchema$1, valiResponseGchatGetSchema as valiResponseGchatGetSchema$1, valiResponseGchatSendSchema as valiResponseGchatSendSchema$1, valiResponseImDialogsGetSchema as valiResponseImDialogsGetSchema$1, valiResponseImHistoryGetSchema as valiResponseImHistoryGetSchema$1, valiResponseImSendSchema as valiResponseImSendSchema$1, valiResponseTotpSessionTokenSchema as valiResponseTotpSessionTokenSchema$1 };