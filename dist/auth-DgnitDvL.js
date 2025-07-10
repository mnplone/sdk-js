import { array, boolean, intersect, literal, minValue, never, null_, nullable, number, object, optional, parse, picklist, pipe, record, safeParse, string, summarize, transform, union, unknown, void as void$1 } from "valibot";
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
	delete_price: optional(nullable(number())),
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
const valiResponseFriendsGetBaseSchema = object({
	count: number(),
	friends: array(valiObjectUserSchema)
});
const valiResponseFriendsGetWithUserSchema = object({
	...valiResponseFriendsGetBaseSchema.entries,
	user: valiObjectUserSchema
});
const valiResponseFriendsGetShortSchema = object({
	count: number(),
	friends: array(valiObjectUserShortSchema)
});
const valiResponseFriendsGetShortWithUserSchema = object({
	...valiResponseFriendsGetShortSchema.entries,
	user: valiObjectUserShortSchema
});
const valiResponseFriendsGetRequestsSchema = object({
	count: number(),
	requests: array(valiObjectUserSchema)
});
const valiResponseFriendsGetRequestsShortSchema = object({
	count: number(),
	requests: array(valiObjectUserShortSchema)
});

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
	getRequests({ count, offset, short } = {}) {
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
	get(arg0, arg1) {
		const user_id = typeof arg0 === "number" || typeof arg0 === "string" ? arg0 : void 0;
		const options = isRecord(arg0) ? arg0 : arg1;
		const is_short = options?.is_short ?? false;
		const add_user = options?.add_user ?? false;
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "friends.get",
			data: {
				user_id,
				online: options?.online ? 1 : void 0,
				add_user: add_user ? 1 : void 0,
				type: is_short ? "short" : void 0,
				offset: options?.offset,
				count: options?.count
			},
			valiResponseSchema: options?.is_short ? options?.add_user ? valiResponseFriendsGetShortWithUserSchema : valiResponseFriendsGetShortSchema : options?.add_user ? valiResponseFriendsGetWithUserSchema : valiResponseFriendsGetBaseSchema
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
	send(message, options) {
		const data = { message };
		if (options?.is_public) data.is_public = 1;
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
	send(options) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "im.send",
			data: options,
			valiResponseSchema: valiResponseImSendSchema
		});
	}
	/**
	* Get dialogs
	* @param options -
	* @param options.id_last -
	* @param options.offset -
	* @param options.count -
	* @returns -
	*/
	getDialogs(options) {
		const data = options ?? {};
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "im.dialogsGet",
			data,
			valiResponseSchema: valiResponseImDialogsGetSchema
		});
	}
	getHistory(arg0, arg1) {
		const data = {};
		if (typeof arg0 === "number") {
			data.user_id = arg0;
			if (isRecord(arg1)) {
				if (arg1.id_last) data.id_last = arg1.id_last;
				if (arg1.offset) data.offset = arg1.offset;
				if (arg1.count) data.count = arg1.count;
			}
		} else if (isRecord(arg0)) {
			data.user_id = arg0.user_id;
			if (arg0.id_last) data.id_last = arg0.id_last;
			if (arg0.offset) data.offset = arg0.offset;
			if (arg0.count) data.count = arg0.count;
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
		this.baseClient.ws.emit("api", ["im.sync", { id_last }]);
	}
};

//#endregion
//#region src/valibot/inventory.ts
const valiCollectionSchema = object({
	collection_id: number(),
	title: string()
});
const valiThingTypeSchema = object({
	id: number(),
	title: string()
});
const valiQualitySchema = object({
	id: number(),
	title: string(),
	coeff_rent: number()
});
const valiEquippedArraySchema = object({ item_ids_equipped: array(number()) });
const valiEquippedTreeSchema = object({ equipped: object({ game: record(string(), object({
	cards: record(string(), array(number())),
	generator: number(),
	joke: number()
})) }) });
const valiResponseInventoryGetBaseSchema = object({
	count: number(),
	collections: array(valiCollectionSchema),
	items: array(valiObjectItemSchema)
});
const valiResponseInventoryGetLegacySchema = object({
	count: number(),
	collections: array(valiCollectionSchema),
	things: array(valiObjectThingSchema),
	thing_types: optional(array(valiThingTypeSchema)),
	qualities: optional(array(valiQualitySchema))
});
const valiResponseInventoryGetWithUserSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	user: valiObjectUserSchema
});
const valiResponseInventoryGetLegacyWithUserSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	user: valiObjectUserSchema
});
const valiResponseInventoryGetWithEquippedArraySchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries
});
const valiResponseInventoryGetWithEquippedTreeSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries
});
const valiResponseInventoryGetWithUserAndEquippedArraySchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema
});
const valiResponseInventoryGetWithUserAndEquippedTreeSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema
});
const valiResponseInventoryGetLegacyWithEquippedArraySchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries
});
const valiResponseInventoryGetLegacyWithEquippedTreeSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries
});
const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema
});
const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema
});

//#endregion
//#region src/api/inventory.ts
var M1ApiInventory = class extends M1ApiBase {
	get(arg0, arg1) {
		const user_id = typeof arg0 === "number" || typeof arg0 === "string" ? arg0 : void 0;
		const options = isRecord(arg0) ? arg0 : arg1;
		const add_legacy = options?.add_legacy ?? true;
		const add_user = options?.add_user ?? false;
		const add_equipped = options?.add_equipped;
		const data = {
			user_id,
			include_stock: options?.include_stock ? 1 : void 0,
			order: options?.order,
			count: options?.count,
			add_user: add_user ? 1 : void 0,
			add_legacy: add_legacy ? 1 : void 0,
			add_equipped,
			shrink: options?.shrink ? 1 : void 0
		};
		let valiResponseSchema;
		if (add_legacy) if (add_user) if (add_equipped === "array") valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema;
		else if (add_equipped === "tree") valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema;
		else valiResponseSchema = valiResponseInventoryGetLegacyWithUserSchema;
		else if (add_equipped === "array") valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedArraySchema;
		else if (add_equipped === "tree") valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedTreeSchema;
		else valiResponseSchema = valiResponseInventoryGetLegacySchema;
		else if (add_user) if (add_equipped === "array") valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedArraySchema;
		else if (add_equipped === "tree") valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedTreeSchema;
		else valiResponseSchema = valiResponseInventoryGetWithUserSchema;
		else if (add_equipped === "array") valiResponseSchema = valiResponseInventoryGetWithEquippedArraySchema;
		else if (add_equipped === "tree") valiResponseSchema = valiResponseInventoryGetWithEquippedTreeSchema;
		else valiResponseSchema = valiResponseInventoryGetBaseSchema;
		return this.baseClient.callMethod({
			http_method: "GET",
			api_method: "inventory.get",
			data,
			valiResponseSchema
		});
	}
};

//#endregion
//#region src/valibot/trades.ts
const valiObjectTradeIdSchema = object({ trade_id: number() });
const valiObjectTradeSideSchema = object({
	user_id: number(),
	item_ids: array(valiObjectItemSchema)
});
const valiObjectTradeSchema = object({
	create_time: number(),
	reaction_time: nullable(number()),
	status: number(),
	trade_id: number(),
	things_from: array(valiObjectThingSchema),
	things_to: array(valiObjectThingSchema),
	user_id_from: number(),
	user_id_to: number()
});
const valiObjectNewTradeSchema = object({
	trade_id: number(),
	status: number(),
	ts_created: number(),
	ts_completed: nullable(number()),
	initiator: valiObjectTradeSideSchema,
	receiver: valiObjectTradeSideSchema
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
	create(options) {
		if (options.item_ids_request === void 0 && options.item_ids_offer === void 0) throw new Error("One of item_ids_to or item_ids_from is required");
		const data = { user_id: options.user_id };
		if (options.item_ids_request !== void 0) data.thing_ids_to = options.item_ids_request.join(",");
		if (options.item_ids_offer !== void 0) data.thing_ids_from = options.item_ids_offer.join(",");
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
	getIncoming(options) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.getIncome",
			data: options,
			valiResponseSchema: valiObjectTradeListSchema
		});
	}
	getOutgoing(options) {
		return this.baseClient.callMethod({
			http_method: "POST",
			api_method: "trades.getOutbound",
			data: options,
			valiResponseSchema: valiObjectTradeListSchema
		});
	}
	history(arg0, arg1) {
		let api_method = "trades.history";
		const data = {};
		if (typeof arg0 === "number") {
			data.user_id = arg0;
			data.count = arg1?.count;
			data.offset = arg1?.offset;
		} else if (typeof arg0 === "object") {
			if (arg0.user_id !== void 0) data.user_id = arg0.user_id;
			data.count = arg0.count;
			data.offset = arg0.offset;
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
	console.error(summarize(result.issues));
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
	inventory = new M1ApiInventory(this);
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
			if (headers) this.ws.headers = headers instanceof Headers ? headers : new Headers(headers);
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
		const request_headers = new Headers(this.options.headers ?? {});
		const request_data = {
			...options.data,
			access_token: this.options.access_token
		};
		if (options.http_method === "GET") {
			for (const [key, value] of Object.entries(request_data)) if (value !== void 0 && value !== null) url.searchParams.set(key, value);
		} else {
			request_headers.set("Content-Type", "application/json");
			body = JSON.stringify(request_data);
		}
		const request_init = {
			method: options.http_method,
			headers: request_headers
		};
		if (options.http_method !== "GET") request_init.body = body;
		const response = await fetch(url, request_init);
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
			data: options.valiErrorDataSchema ?? never()
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
export { M1, M1ApiAuth, M1ApiBase, M1ApiBots, M1ApiData, M1ApiFriends, M1ApiGchat, M1ApiIm, M1ApiTrades, M1ApiUsers, valiObjectDialogSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageSchema, valiObjectItemProtoLegacySchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemVariantSchema, valiObjectMessageSchema, valiObjectNewTradeSchema, valiObjectSessionSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectTradeIdSchema, valiObjectTradeListSchema, valiObjectTradeSchema, valiObjectUserSchema, valiObjectUserShortSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetWithUserSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, valiResponseImSendSchema, valiResponseTotpSessionTokenSchema };