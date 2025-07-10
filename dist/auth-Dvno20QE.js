import { array, boolean, getDotPath, intersect, literal, minValue, never, null_, nullable, number, object, optional, parse, picklist, pipe, record, safeParse, string, transform, union, unknown, void as void$1 } from "valibot";
import { ExtWSClient } from "@extws/client";

//#region src/valibot/auth.ts
const valiObjectSessionSchema = object({
	user_id: string(),
	access_token: string(),
	expires_in: number(),
	refresh_token: optional(string())
});
const valiResponseTotpSessionTokenSchema = object({ totp_session_token: string() });

//#endregion
//#region src/api/bots.ts
var M1ApiBots = class extends M1ApiBase {
	/**
	* Creates a new bot.
	* @param nick - A nickname of a new bot.
	* @returns -
	*/
	create(nick) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "bots.create",
			data: { nick },
			valiResponseSchema: object({ user_id: number() })
		});
	}
	/**
	* Generates access_token for a bot.
	* @param user_id - The ID of the bot.
	* @param ip - The IP address (IPv4 or IPv6).
	* @returns -
	*/
	getToken(user_id, ip) {
		const data = { user_id };
		if (ip !== void 0) data.ip = ip;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "bots.getToken",
			data,
			valiResponseSchema: valiObjectSessionSchema
		});
	}
};

//#endregion
//#region src/valibot/common.ts
/**
* Creates bit schema.
* @param default_value -
* @returns -
*/
function bit(default_value) {
	return pipe(optional(picklist([0, 1]), default_value), transform((value) => value === 1));
}

//#endregion
//#region src/valibot/items.ts
const valiObjectItemVariantSchema = object({
	id: number(),
	is_default: bit(0),
	is_selected: bit(0),
	is_unlocked: bit(0),
	image: optional(string()),
	description: optional(string()),
	unlock: optional(object({
		moneybox: optional(number()),
		buy_tokens_sp: optional(number()),
		buy_tokens_cmpt: optional(number())
	}))
});
const valiObjectThingPrototypeSchema = object({
	thing_prototype_id: number(),
	thing_prototype_status: number(),
	thing_type: number(),
	image: string(),
	title: string(),
	description: string(),
	group: optional(pipe(nullable(number()), transform((value) => typeof value === "number" ? value : void 0))),
	quality: number(),
	collection: optional(number()),
	twin_thing_prototype_id: optional(array(number())),
	delete_price: optional(number()),
	can_be_upgraded: bit(0),
	buy_cost: optional(number()),
	key: optional(number()),
	cases: optional(array(number())),
	drop: optional(object({
		thing_prototype_id: number(),
		hidden: optional(boolean())
	})),
	variants: optional(array(valiObjectItemVariantSchema))
});
const valiObjectThingSchema = object({
	...valiObjectThingPrototypeSchema.entries,
	thing_id: number(),
	user_id: number(),
	owned_time: number(),
	can_give: optional(number()),
	can_sell: optional(number()),
	souvenir: optional(string()),
	autograph: optional(object({
		user_id: number(),
		text: optional(string())
	})),
	moneybox: optional(union([
		object({
			transactions: number(),
			money: number()
		}),
		object({ numbers: array(number()) }),
		object({ count: number() })
	])),
	uses_left: optional(number()),
	uses_origin: optional(number()),
	variants: optional(array(valiObjectItemVariantSchema))
});
const valiObjectItemProtoSchema = object({
	item_proto_id: number(),
	item_proto_status: optional(picklist([0, 1]), 0),
	type: number(),
	image: string(),
	title: string(),
	description: string(),
	quality_id: number(),
	moneybox: bit(0),
	variants: optional(array(valiObjectItemVariantSchema)),
	monopoly_id: optional(number()),
	sticker_group_id: optional(number()),
	collection_id: optional(number()),
	twin_item_proto_ids: optional(array(number())),
	prices: optional(object({
		buy: optional(union([number(), record(string(), number())])),
		quick_sell: optional(number())
	})),
	key_item_proto_id: optional(number()),
	case_item_proto_ids: optional(array(number())),
	drop: optional(record(string(), unknown())),
	can_craft: bit(0)
});
const valiObjectItemShortSchema = object({
	item_id: number(),
	item_ids: optional(array(number())),
	ts_owned: number(),
	ts_can_trade: optional(number()),
	ts_can_sell: optional(number()),
	souvenir: optional(string()),
	autograph: optional(object({
		user_id: number(),
		text: optional(string())
	})),
	moneybox: optional(record(string(), unknown())),
	seed: optional(string()),
	variants: optional(array(valiObjectItemVariantSchema)),
	xp_boost: optional(number())
});
const valiObjectItemSchema = object({
	...valiObjectItemShortSchema.entries,
	can_delete: bit(0),
	previous_owners_user_ids: optional(array(number())),
	uses: optional(object({
		left: number(),
		origin: optional(number())
	}))
});
const valiObjectItemProtoLegacySchema = object({
	...valiObjectThingPrototypeSchema.entries,
	...valiObjectItemProtoSchema.entries
});

//#endregion
//#region src/api/data.ts
var M1ApiData = class extends M1ApiBase {
	getItemProtos(item_proto_ids, options) {
		const add_legacy = options?.add_legacy === true;
		const add_metadata = options?.add_metadata !== false;
		const valiCurrentItemProtosSchema = pipe(array(add_legacy ? valiObjectItemProtoLegacySchema : valiObjectItemProtoSchema), transform((value) => new Map(value.map((item_proto) => [item_proto.item_proto_id, item_proto]))));
		return this.baseClient.callMethod({
			http_method: "GET",
			api_method: "data.getItemProtos",
			data: {
				item_proto_ids: [...item_proto_ids].join(","),
				add_legacy: Number(add_legacy),
				add_metadata: Number(add_metadata)
			},
			valiResponseSchema: add_metadata ? object({
				item_protos: valiCurrentItemProtosSchema,
				collections: array(object({
					collection_id: number(),
					title: string()
				}))
			}) : pipe(object({ item_protos: valiCurrentItemProtosSchema }), transform((value) => value.item_protos))
		});
	}
};

//#endregion
//#region src/valibot/users.ts
function transformerBot(value) {
	const { bot, bot_owner,...value_rest } = value;
	return {
		...value_rest,
		bot: bot ? { owner_user_id: bot_owner } : null
	};
}
const valiInputUserShortSchema = object({
	user_id: number(),
	domain: optional(string()),
	approved: bit(0),
	nick: string(),
	gender: union([literal(0), literal(1)]),
	avatar: string(),
	online: bit(0),
	current_game: optional(object({
		gs_id: string(),
		gs_game_id: string()
	})),
	rank: optional(union([
		object({ hidden: literal(1) }),
		object({ qual: number() }),
		object({ expired: literal(1) }),
		object({
			id: number(),
			pts: number()
		})
	])),
	vip: bit(0),
	bot: bit(0),
	bot_owner: optional(number()),
	moderator: bit(0)
});
const valiObjectUserShortSchema = pipe(valiInputUserShortSchema, transform(transformerBot));
const valiObjectUserSchema = pipe(object({
	...valiInputUserShortSchema.entries,
	nicks_old: array(string()),
	profile_cover: optional(string()),
	social_vk: optional(number()),
	social_discord: optional(string()),
	social_twitch: optional(string()),
	games: optional(number()),
	games_wins: optional(number()),
	xp: optional(number()),
	xp_level: optional(number()),
	badge: optional(valiObjectThingSchema),
	friendship: optional(number()),
	muted: bit(0),
	mfp_ban_history: optional(union([object({
		type: literal(0),
		count: number(),
		ts_last_ban: number(),
		ts_end: optional(number())
	}), object({
		type: literal(1),
		ts_end: number()
	})]))
}), transform(transformerBot), transform((value) => {
	const { games, games_wins,...value_rest } = value;
	return {
		...value_rest,
		games: {
			total: games,
			won: games_wins
		}
	};
}));

//#endregion
//#region src/valibot/friends.ts
const valiResponseFriendsGetRequestsSchema = object({
	count: number(),
	requests: array(valiObjectUserSchema)
});
const valiResponseFriendsGetSchema = object({
	count: number(),
	friends: array(valiObjectUserSchema),
	user: optional(valiObjectUserSchema)
});
const valiResponseFriendsGetRequestsShortSchema = object({
	count: number(),
	requests: array(valiObjectUserShortSchema)
});
const valiResponseFriendsGetShortSchema = object({
	count: number(),
	friends: array(valiObjectUserShortSchema),
	user: optional(valiObjectUserShortSchema)
});

//#endregion
//#region src/utils.ts
/**
* Check if a value is a record.
* @param value -
* @returns -
*/
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
/**
* Check if a value is an iterator.
* @param value -
* @returns -
*/
function isIterableIterator(value) {
	return value !== null && typeof value === "object" && typeof Symbol.iterator in value && typeof value[Symbol.iterator] === "function" && typeof value.next === "function";
}

//#endregion
//#region src/api/friends.ts
var M1ApiFriends = class extends M1ApiBase {
	/**
	* Adds a friend.
	* @param user_id - The ID of the user to add.
	* @returns -
	*/
	add(user_id) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "friends.add",
			data: { user_id },
			valiResponseSchema: void$1()
		});
	}
	/**
	* Deletes a friend.
	* @param user_id - The ID of the user to delete.
	* @returns -
	*/
	delete(user_id) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "friends.delete",
			data: { user_id },
			valiResponseSchema: void$1()
		});
	}
	getRequests({ count = 20, offset = 0, short = false } = {}) {
		const is_short = short === true;
		const data = {
			count,
			offset
		};
		if (is_short) data.type = "short";
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "friends.getRequests",
			data,
			valiResponseSchema: is_short ? valiResponseFriendsGetRequestsShortSchema : valiResponseFriendsGetRequestsSchema
		});
	}
	get(param0) {
		const data = {};
		let is_short = false;
		if (typeof param0 === "number" || typeof param0 === "string") data.user_id = param0;
		else if (isRecord(param0)) {
			if (param0.user_id) data.user_id = param0.user_id;
			if (param0.online) data.online = 1;
			if (param0.add_user) data.add_user = 1;
			if (param0.short) {
				data.type = "short";
				is_short = true;
			}
			if (param0.offset) data.offset = param0.offset;
			if (param0.count) data.count = param0.count;
		}
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "friends.get",
			data,
			valiResponseSchema: is_short ? valiResponseFriendsGetShortSchema : valiResponseFriendsGetSchema
		});
	}
};

//#endregion
//#region src/valibot/gchat.ts
const valiObjectGchatMessageBaseSchema = object({
	msg_id: string(),
	ts: number(),
	user_id: number()
});
const valiObjectGchatMessageAdditionalDataSchema = union([
	object({
		type: literal(1),
		text: string(),
		is_public: optional(bit(1)),
		user_ids_mentioned: optional(array(number()))
	}),
	object({
		type: literal(2),
		case_item_proto_id: number(),
		drop_item_proto_id: number()
	}),
	object({
		type: literal(3),
		user_id_receiver: number(),
		item_proto_id: number()
	}),
	object({
		type: literal(4),
		item_proto_ids: array(number())
	})
]);
const valiObjectGchatMessageSchema = intersect([valiObjectGchatMessageBaseSchema, valiObjectGchatMessageAdditionalDataSchema]);
const valiResponseGchatGetSchema = object({
	messages: array(valiObjectGchatMessageSchema),
	status: object({
		closed: boolean(),
		slowmode: boolean(),
		emoteonly: boolean()
	}),
	users: array(valiObjectUserShortSchema),
	item_protos: array(valiObjectItemProtoSchema)
});
const valiResponseGchatSendSchema = object({ msg_id: string() });

//#endregion
//#region src/api/gchat.ts
var M1ApiGchat = class extends M1ApiBase {
	/**
	* Get chat messages.
	* @returns Returns gchat status, messages and its users and item_protos.
	*/
	get() {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "gchat.get",
			data: {},
			valiResponseSchema: valiResponseGchatGetSchema
		});
	}
	send(param0, param1) {
		const data = { message: "" };
		let is_public;
		if (typeof param0 === "string") {
			data.message = param0;
			is_public = Boolean(param1?.is_public);
		} else {
			data.message = param0.message;
			is_public = Boolean(param0?.is_public);
		}
		if (is_public) data.is_public = 1;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "gchat.send",
			data,
			valiResponseSchema: valiResponseGchatSendSchema
		});
	}
};

//#endregion
//#region src/valibot/im.ts
const valiResponseImSendSchema = object({ msg_id: number() });
const valiObjectMessageSchema = object({
	msg_id: number(),
	is_read: number(),
	text: string(),
	ts_created: number(),
	type: number(),
	user_id: number()
});
const valiObjectSyncSchema = object({
	events: array(object({
		chain: array(union([number(), null_()])),
		data: object({
			type: number(),
			msg_id: number(),
			dialog: object({ user_id: number() })
		})
	})),
	dialogs: array(object({
		user_id: number(),
		new_counter: number()
	})),
	messages: array(valiObjectMessageSchema)
});
const valiObjectDialogSchema = object({
	message: valiObjectMessageSchema,
	new_counter: number(),
	user_id: number()
});
const valiResponseImDialogsGetSchema = object({
	dialogs: array(valiObjectDialogSchema),
	sync: valiObjectSyncSchema,
	users_data: array(valiObjectUserShortSchema)
});
const valiResponseImHistoryGetSchema = object({
	messages: array(valiObjectMessageSchema),
	sync: valiObjectSyncSchema,
	users_data: array(valiObjectUserShortSchema)
});

//#endregion
//#region src/api/im.ts
var M1ApiIm = class extends M1ApiBase {
	send(param0, param1) {
		const data = {};
		if (typeof param0 === "number" && typeof param1 === "string") {
			data.user_id = param0;
			data.text = param1;
		} else if (isRecord(param0)) {
			data.user_id = param0.user_id;
			data.text = param0.text;
			if (param0.send_id) data.send_id = param0.send_id;
		} else throw new TypeError("Invalid parameters");
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "im.send",
			data,
			valiResponseSchema: valiResponseImSendSchema
		});
	}
	/**
	* Get dialogs
	* @param parameters -
	* @param parameters.id_last -
	* @param parameters.offset -
	* @param parameters.count -
	* @returns -
	*/
	dialogsGet({ id_last, offset, count }) {
		const data = {};
		if (id_last) data.id_last = id_last;
		if (offset) data.offset = offset;
		if (count) data.count = count;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "im.dialogsGet",
			data,
			valiResponseSchema: valiResponseImDialogsGetSchema
		});
	}
	historyGet(param0, param1) {
		const data = {};
		if (typeof param0 === "number") {
			data.user_id = param0;
			if (isRecord(param1)) {
				if (param1.id_last) data.id_last = param1.id_last;
				if (param1.offset) data.offset = param1.offset;
				if (param1.count) data.count = param1.count;
			}
		} else if (isRecord(param0)) {
			data.user_id = param0.user_id;
			if (param0.id_last) data.id_last = param0.id_last;
			if (param0.offset) data.offset = param0.offset;
			if (param0.count) data.count = param0.count;
		} else throw new TypeError("Invalid parameters");
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "im.historyGet",
			data,
			valiResponseSchema: valiResponseImHistoryGetSchema
		});
	}
	/**
	* Send an im.sync ws request
	* @param id_last -
	*/
	sync(id_last) {
		if (!this.baseClient.ws || !this.baseClient.ws.is_connected) throw new Error("WebSocket is not connected");
		this.baseClient.ws.send(`4api["im.sync",{"id_last":${id_last}}]`);
	}
};

//#endregion
//#region src/valibot/trades.ts
const valiObjectTradeIdSchema = object({ trade_id: number() });
const valiObjectTradeSchema = object({
	create_time: number(),
	reaction_time: union([number(), null_()]),
	status: number(),
	trade_id: number(),
	things_from: array(valiObjectThingSchema),
	things_to: array(valiObjectThingSchema),
	user_id_from: number(),
	user_id_to: number()
});
const valiObjectTradeListSchema = object({
	collections: array(number()),
	qualities: array(number()),
	item_ids_equipped: optional(array(number())),
	thing_types: array(number()),
	trades: array(valiObjectTradeSchema),
	user_data: array(valiObjectUserSchema)
});

//#endregion
//#region src/api/trades.ts
var M1ApiTrades = class extends M1ApiBase {
	create(param0) {
		if (param0.item_ids_to === void 0 && param0.item_ids_from === void 0) throw new Error("One of item_ids_to or item_ids_from is required");
		const data = { user_id: param0.user_id };
		if (param0.item_ids_to !== void 0) data.thing_ids_to = param0.item_ids_to.join(",");
		if (param0.item_ids_from !== void 0) data.thing_ids_from = param0.item_ids_from.join(",");
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.create",
			data,
			valiResponseSchema: valiObjectTradeIdSchema
		});
	}
	accept(trade_id) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.accept",
			data: { trade_id },
			valiResponseSchema: void$1()
		});
	}
	decline(trade_id) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.cancel",
			data: { trade_id },
			valiResponseSchema: void$1()
		});
	}
	revoke(trade_id) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.revoke",
			data: { trade_id },
			valiResponseSchema: void$1()
		});
	}
	incoming({ count = 20, offset = 0 }) {
		const data = {};
		if (count !== void 0) data.count = count;
		if (offset !== void 0) data.offset = offset;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.getIncome",
			data,
			valiResponseSchema: valiObjectTradeListSchema
		});
	}
	outgoing({ count = 20, offset = 0 }) {
		const data = {};
		if (count !== void 0) data.count = count;
		if (offset !== void 0) data.offset = offset;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.getOutbound",
			data,
			valiResponseSchema: valiObjectTradeListSchema
		});
	}
	history(param0, param1) {
		let api_method = "trades.history";
		const data = {};
		if (typeof param0 === "number") {
			data.user_id = param0;
			data.count = param1?.count || 20;
			data.offset = param1?.offset || 0;
		} else if (typeof param0 === "object") {
			if (param0.user_id !== void 0) data.user_id = param0.user_id;
			data.count = param0.count || 20;
			data.offset = param0.offset || 0;
		}
		if (data.user_id !== void 0) api_method = "trades.historyWith";
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method,
			data,
			valiResponseSchema: valiObjectTradeListSchema
		});
	}
};

//#endregion
//#region src/api/users.ts
function transformer(value) {
	const result = new Map();
	for (const user of value) result.set(user.user_id, user);
	return result;
}
const valiApiResponseUsersGetSchema = pipe(array(valiObjectUserSchema), transform(transformer));
const valiApiResponseUsersGetShortSchema = pipe(array(valiObjectUserShortSchema), transform(transformer));
const valiApiResponseUsersGetOneSchema = pipe(array(valiObjectUserSchema), transform((value) => value[0]));
const valiApiResponseUsersGetShortOneSchema = pipe(array(valiObjectUserShortSchema), transform((value) => value[0]));
var M1ApiUsers = class extends M1ApiBase {
	get(arg0, arg1) {
		let user_ids = null;
		let is_multiple_users = false;
		const data = {};
		if (isRecord(arg0) && arg0.short === true) data.type = "short";
		else if (isIterableIterator(arg0) || arg0 instanceof Set) {
			user_ids = [...arg0];
			is_multiple_users = true;
		} else if (Array.isArray(arg0)) {
			user_ids = arg0;
			is_multiple_users = true;
		} else if (typeof arg0 === "string" || typeof arg0 === "number") user_ids = [arg0];
		if (isRecord(arg1) && arg1.short === true) data.type = "short";
		if (user_ids) data.user_ids = user_ids.join(",");
		return this.baseClient.callMethod({
			http_method: "GET",
			api_method: "users.get",
			data,
			valiResponseSchema: data?.type === "short" ? is_multiple_users ? valiApiResponseUsersGetShortSchema : valiApiResponseUsersGetShortOneSchema : is_multiple_users ? valiApiResponseUsersGetSchema : valiApiResponseUsersGetOneSchema
		});
	}
};

//#endregion
//#region src/hooks/refresh.ts
/**
* Refresh hook.
* @this { M1 }
* @param options Request options.
* @param data Request data.
* @returns New access token and refresh token.
*/
async function refresh_hook(options, data) {
	console.log("refresh_hook", options, data);
	const { refresh_token } = this.options;
	if (!refresh_token) return;
	const refresh_response = await this.auth.refresh(refresh_token);
	if (refresh_response.success !== true) return;
	const new_options = {
		...options,
		data: {
			...options.data,
			access_token: refresh_response.data.access_token
		}
	};
	this.options.access_token = refresh_response.data.access_token;
	if (refresh_response.data.refresh_token) this.options.refresh_token = refresh_response.data.refresh_token;
	return new_options;
}

//#endregion
//#region src/m1.ts
const default_hooks = { 1: refresh_hook };
/**
* Parses value with schema like valibot, but prints issue paths.
* @param schema Valibot schema.
* @param value Value to parse.
* @returns Parsed value.
*/
function parseWithNotice(schema, value) {
	const result = safeParse(schema, value);
	if (result.success) return result.output;
	for (const issue of result.issues) {
		console.error();
		console.error(`Valibot found an issue at ${getDotPath(issue)}`);
		console.error("issue", JSON.stringify(issue));
	}
	throw new TypeError("Valibot found issues.");
}
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
var M1 = class {
	ws = null;
	auth = new M1ApiAuth(this);
	bots = new M1ApiBots(this);
	data = new M1ApiData(this);
	friends = new M1ApiFriends(this);
	gchat = new M1ApiGchat(this);
	im = new M1ApiIm(this);
	trades = new M1ApiTrades(this);
	users = new M1ApiUsers(this);
	constructor(options) {
		this.options = {
			hostname: globalThis.location?.hostname ?? "monopoly-one.com",
			...options
		};
		if ("hooks" in this.options) this.options.hooks = {
			...default_hooks,
			...this.options.hooks
		};
		else this.options.hooks = default_hooks;
		const { websocket } = this.options;
		if (websocket) {
			const { access_token, headers } = this.options;
			const ws_url = new URL("/ws", `wss://${this.options.hostname}`);
			if (access_token) ws_url.searchParams.set("access_token", access_token);
			if (typeof websocket.subs === "string") ws_url.searchParams.set("subs", websocket.subs);
			this.ws = new ExtWSClient(ws_url, { connect: false });
			if (headers) this.ws.headers = headers;
			this.ws.connect();
		}
	}
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
	async callMethod(options) {
		const url = new URL(`/api/${options.api_method}`, `https://${this.options.hostname}`);
		let body;
		const request_headers = structuredClone(this.options.headers ?? {});
		const request_data = {
			...options.data,
			access_token: this.options.access_token
		};
		if (options.http_method === "GET") {
			for (const [key, value] of Object.entries(request_data)) if (value !== void 0 && value !== null) url.searchParams.set(key, value);
		} else {
			request_headers["Content-Type"] = "application/json";
			body = JSON.stringify(request_data);
		}
		const response = await fetch(url, {
			method: options.http_method,
			headers: request_headers,
			body
		});
		const response_data = await response.json();
		const { code } = parse(object({ code: pipe(number(), minValue(0)) }), response_data);
		if (code === 0) {
			const { data: data$1 } = parseWithNotice(object({ data: options.valiResponseSchema }), response_data);
			return {
				success: true,
				data: data$1
			};
		}
		const { description, data } = parse(object({
			description: optional(string()),
			data: optional(options.valiErrorDataSchema ?? never())
		}), response_data);
		if (this.options.hooks) {
			const hook = this.options.hooks[code];
			if (hook) {
				const new_request_options = await hook.call(this, options, request_data);
				if (new_request_options) return this.callMethod(new_request_options);
			}
		}
		return {
			success: false,
			code,
			description,
			data
		};
	}
};

//#endregion
//#region src/api/base.ts
var M1ApiBase = class {
	constructor(baseClient) {
		this.baseClient = baseClient;
	}
};

//#endregion
//#region src/api/auth.ts
const valiResponseAuthSigninSchema = union([valiObjectSessionSchema, valiResponseTotpSessionTokenSchema]);
var M1ApiAuth = class extends M1ApiBase {
	/**
	* Sign in with email and password.
	* @param email The email address of the user.
	* @param password The password of the user.
	* @returns Session or TOTP session token.
	*/
	signin(email, password) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "auth.signin",
			data: {
				email,
				password
			},
			valiResponseSchema: valiResponseAuthSigninSchema
		});
	}
	/**
	* Verify the TOTP code.
	* @param totp_session_token The TOTP session token.
	* @param code The TOTP code.
	* @returns Session.
	*/
	totpVerify(totp_session_token, code) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "auth.totpVerify",
			data: {
				totp_session_token,
				code
			},
			valiResponseSchema: valiObjectSessionSchema
		});
	}
	/**
	* Refresh the access token.
	* @param refresh_token The refresh token.
	* @returns New session.
	*/
	refresh(refresh_token) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "auth.refresh",
			data: { refresh_token },
			valiResponseSchema: valiObjectSessionSchema
		});
	}
};

//#endregion
export { M1, M1ApiAuth, M1ApiBase, M1ApiBots, M1ApiData, M1ApiFriends, M1ApiUsers, valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemVariantSchema, valiObjectSessionSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectUserSchema, valiObjectUserShortSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetSchema, valiResponseFriendsGetShortSchema, valiResponseTotpSessionTokenSchema };