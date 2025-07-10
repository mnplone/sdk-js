import { BaseSchema, InferOutput } from "valibot";
import { ExtWSClient } from "@extws/client";

//#region src/valibot/auth.d.ts
declare const valiObjectSessionSchema: any;
declare const valiResponseTotpSessionTokenSchema: any;
type TotpSessionToken = InferOutput<typeof valiResponseTotpSessionTokenSchema>;
type Session = InferOutput<typeof valiObjectSessionSchema>;

//#endregion
//#region src/types.d.ts
type ValiBaseSchema = BaseSchema<any, any, any>;
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
declare const valiObjectThingPrototypeSchema: any;
declare const valiObjectThingSchema: any;
declare const valiObjectItemProtoSchema: any;
declare const valiObjectItemShortSchema: any;
declare const valiObjectItemSchema: any;
declare const valiObjectItemProtoLegacySchema: any;
type ThingPrototype = InferOutput<typeof valiObjectThingPrototypeSchema>;
type Thing = InferOutput<typeof valiObjectThingSchema>;
type ItemProto = InferOutput<typeof valiObjectItemProtoSchema>;
type Item = InferOutput<typeof valiObjectItemSchema>;
type ItemShort = InferOutput<typeof valiObjectItemShortSchema>;
type ItemVariant = InferOutput<typeof valiObjectItemVariantSchema>;

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
declare const valiResponseFriendsGetRequestsSchema: any;
declare const valiResponseFriendsGetSchema: any;
declare const valiResponseFriendsGetRequestsShortSchema: any;
declare const valiResponseFriendsGetShortSchema: any;
type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
type ResponseFriendsGet = InferOutput<typeof valiResponseFriendsGetSchema>;
type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;

//#endregion
//#region src/api/friends.d.ts
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
  getRequests(options: {
    count?: number;
    offset?: number;
    short?: false;
  }): Promise<ApiResponse<ResponseFriendsGetRequests>>;
  /**
   * Returns a list of friends.
   * @param user_id - The ID of the user to get friends for.
   * @returns A list of friends and their count.
   */
  get(user_id: number | string): Promise<ApiResponse<ResponseFriendsGet>>;
  /**
   * Returns a list of friends.
   * @param options -
   * @param options.user_id The ID of the user to get friends for.
   * @param options.online Whether to return online friends.
   * @param options.add_user Whether to return friends who have added the user.
   * @param options.short Whether to return a short list of friends.
   * @param options.offset The number of friends to skip.
   * @param options.count The number of friends to return.
   * @returns A list of friends and their count.
   */
  get(options: {
    user_id?: number | string;
    online?: boolean;
    add_user?: boolean;
    short: true;
    offset?: number;
    count?: number;
  }): Promise<ApiResponse<ResponseFriendsGetShort>>;
  /**
   * Returns a list of friends.
   * @param options -
   * @param options.user_id The ID of the user to get friends for.
   * @param options.online Whether to return online friends.
   * @param options.add_user Whether to return friends who have added the user.
   * @param options.short Whether to return a short list of friends.
   * @param options.offset The number of friends to skip.
   * @param options.count The number of friends to return.
   * @returns A list of friends and their count.
   */
  get(options: {
    user_id?: number | string;
    online?: boolean;
    add_user?: boolean;
    short?: false;
    offset?: number;
    count?: number;
  }): Promise<ApiResponse<ResponseFriendsGet>>;
}

//#endregion
//#region src/valibot/gchat.d.ts
declare const valiResponseGchatGetSchema: any;
declare const valiResponseGchatSendSchema: any;
type ResponseGchatGet = InferOutput<typeof valiResponseGchatGetSchema>;
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
   * @param options -
   * @param options.is_public Whether the message is public.
   * @returns Returns the message id.
   */
  send(message: string, options: {
    is_public?: boolean;
  }): Promise<ApiResponse<ResponseGchatSend>>;
  send(parameters: {
    message: string;
    is_public?: boolean;
  }): Promise<ApiResponse<ResponseGchatSend>>;
}

//#endregion
//#region src/valibot/im.d.ts
declare const valiResponseImSendSchema: any;
declare const valiResponseImDialogsGetSchema: any;
declare const valiResponseImHistoryGetSchema: any;
type ResponseImSend = InferOutput<typeof valiResponseImSendSchema>;
type ResponseImDialogsGet = InferOutput<typeof valiResponseImDialogsGetSchema>;
type ResponseImHistoryGet = InferOutput<typeof valiResponseImHistoryGetSchema>;

//#endregion
//#region src/api/im.d.ts
declare class M1ApiIm extends M1ApiBase {
  /**
   * Send a message to a user
   * @param user_id - The user ID of the recipient
   * @param text - The message text
   * @returns The message ID
   */
  send(user_id: number, text: string): Promise<ApiResponse<ResponseImSend>>;
  /**
   * Send a message to a user
   * @param parameters - The object with the user ID of the recipient and the message text
   * @returns The message ID
   */
  send(parameters: {
    user_id: number;
    text: string;
    send_id?: string;
  }): Promise<ApiResponse<ResponseImSend>>;
  /**
   * Get dialogs
   * @param parameters -
   * @param parameters.id_last -
   * @param parameters.offset -
   * @param parameters.count -
   * @returns -
   */
  dialogsGet({
    id_last,
    offset,
    count
  }: {
    id_last?: string;
    offset?: number;
    count?: number;
  }): Promise<ApiResponse<ResponseImDialogsGet>>;
  /**
   * Get history
   * @param parameters -
   * @param parameters.user_id -
   * @param parameters.id_last -
   * @param parameters.offset -
   * @param parameters.count -
   * @returns -
   */
  historyGet({
    user_id,
    id_last,
    offset,
    count
  }: {
    user_id: number;
    id_last?: string;
    offset?: number;
    count?: number;
  }): Promise<ApiResponse<ResponseImHistoryGet>>;
  /**
   * Get history
   * @param user_id -
   * @param parameters -
   * @param parameters.id_last -
   * @param parameters.offset -
   * @param parameters.count -
   * @returns -
   */
  historyGet(user_id: number, parameters: {
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
//#region src/valibot/trades.d.ts
declare const valiObjectTradeIdSchema: any;
declare const valiObjectTradeListSchema: any;
type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;
type ObjectTradeList = InferOutput<typeof valiObjectTradeListSchema>;

//#endregion
//#region src/api/trades.d.ts
declare class M1ApiTrades extends M1ApiBase {
  create(param0: {
    item_ids_to?: (number | string)[];
    item_ids_from?: (number | string)[];
    user_id: number;
  }): Promise<ApiResponse<ObjectTradeId>>;
  accept(trade_id: number): Promise<ApiResponse<void>>;
  decline(trade_id: number): Promise<ApiResponse<void>>;
  revoke(trade_id: number): Promise<ApiResponse<void>>;
  incoming({
    count,
    offset
  }: {
    count?: number;
    offset?: number;
  }): Promise<ApiResponse<ObjectTradeList>>;
  outgoing({
    count,
    offset
  }: {
    count?: number;
    offset?: number;
  }): Promise<ApiResponse<ObjectTradeList>>;
  /**
   * Get the history of trades.
   * @param param0 -
   * @param param0.user_id - The user ID.
   * @param param0.count - The count of trades to return.
   * @param param0.offset - The offset of the trades to return.
   * @returns The history of trades.
   */
  history(param0: {
    user_id?: number;
    count?: number;
    offset?: number;
  }): Promise<ApiResponse<ObjectTradeList>>;
  /**
   * Get the history of trades.
   * @param user_id - The user ID.
   * @param param1 -
   * @param param1.count - The count of trades to return.
   * @param param1.offset - The offset of the trades to return.
   * @returns The history of trades.
   */
  history(user_id: number, param1?: {
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
type CallMethodOptions<ValiResponseSchema extends ValiBaseSchema, ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined> = {
  http_method: 'GET' | 'POST';
  api_method: string;
  data?: Record<string, string | number | undefined | null>;
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
  headers?: Record<string, string>;
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
export { CallMethodOptions, CallMethodResponse, Item, ItemProto, ItemShort, ItemVariant, M1 as M1$1, M1ApiAuth as M1ApiAuth$1, M1ApiBase as M1ApiBase$1, M1ApiBots as M1ApiBots$1, M1ApiData as M1ApiData$1, M1ApiFriends as M1ApiFriends$1, M1ApiUsers as M1ApiUsers$1, ResponseFriendsGet, ResponseFriendsGetRequests, ResponseFriendsGetRequestsShort, ResponseFriendsGetShort, Session, Thing, ThingPrototype, TotpSessionToken, User, UserShort, valiObjectItemProtoLegacySchema as valiObjectItemProtoLegacySchema$1, valiObjectItemProtoSchema as valiObjectItemProtoSchema$1, valiObjectItemSchema as valiObjectItemSchema$1, valiObjectItemVariantSchema as valiObjectItemVariantSchema$1, valiObjectSessionSchema as valiObjectSessionSchema$1, valiObjectThingPrototypeSchema as valiObjectThingPrototypeSchema$1, valiObjectThingSchema as valiObjectThingSchema$1, valiObjectUserSchema as valiObjectUserSchema$1, valiObjectUserShortSchema as valiObjectUserShortSchema$1, valiResponseFriendsGetRequestsSchema as valiResponseFriendsGetRequestsSchema$1, valiResponseFriendsGetRequestsShortSchema as valiResponseFriendsGetRequestsShortSchema$1, valiResponseFriendsGetSchema as valiResponseFriendsGetSchema$1, valiResponseFriendsGetShortSchema as valiResponseFriendsGetShortSchema$1, valiResponseTotpSessionTokenSchema as valiResponseTotpSessionTokenSchema$1 };