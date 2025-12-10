// src/valibot/auth.ts
import * as v from "valibot";
var valiObjectSessionSchema = v.object({
  user_id: v.number(),
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string())
});
var valiResponseTotpSessionTokenSchema = v.object({
  totp_session_token: v.string()
});

// src/api/base.ts
class M1ApiBase {
  baseClient;
  constructor(baseClient) {
    this.baseClient = baseClient;
  }
}

// src/api/auth.ts
import * as v2 from "valibot";
var valiResponseAuthSigninSchema = v2.union([
  valiObjectSessionSchema,
  valiResponseTotpSessionTokenSchema
]);

class M1ApiAuth extends M1ApiBase {
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
  refresh(refresh_token) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "auth.refresh",
      data: {
        refresh_token
      },
      valiResponseSchema: valiObjectSessionSchema
    });
  }
}

// src/api/bots.ts
import * as v3 from "valibot";
class M1ApiBots extends M1ApiBase {
  create(nick) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "bots.create",
      data: {
        nick
      },
      valiResponseSchema: v3.object({
        user_id: v3.number()
      })
    });
  }
  getToken(user_id, ip) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "bots.getToken",
      data: {
        user_id,
        ip
      },
      valiResponseSchema: valiObjectSessionSchema
    });
  }
}

// src/valibot/items.ts
import * as v5 from "valibot";

// src/valibot/common.ts
import * as v4 from "valibot";
function bit(default_value) {
  return v4.pipe(v4.optional(v4.picklist([0, 1]), default_value), v4.transform((value) => value === 1));
}

// src/valibot/items.ts
var valiObjectItemVariantSchema = v5.object({
  id: v5.number(),
  is_default: bit(0),
  is_selected: bit(0),
  is_unlocked: bit(0),
  image: v5.optional(v5.string()),
  description: v5.optional(v5.string()),
  unlock: v5.optional(v5.object({
    moneybox: v5.optional(v5.number()),
    buy_tokens_sp: v5.optional(v5.number()),
    buy_tokens_cmpt: v5.optional(v5.number())
  }))
});
var valiObjectThingPrototypeSchema = v5.object({
  thing_prototype_id: v5.number(),
  thing_prototype_status: v5.number(),
  thing_type: v5.number(),
  image: v5.string(),
  title: v5.string(),
  description: v5.string(),
  group: v5.optional(v5.pipe(v5.nullable(v5.number()), v5.transform((value) => typeof value === "number" ? value : undefined))),
  quality: v5.number(),
  collection: v5.optional(v5.number()),
  twin_thing_prototype_id: v5.optional(v5.array(v5.number())),
  delete_price: v5.optional(v5.nullable(v5.number())),
  can_be_upgraded: bit(0),
  buy_cost: v5.optional(v5.number()),
  key: v5.optional(v5.number()),
  cases: v5.optional(v5.array(v5.number())),
  drop: v5.optional(v5.array(v5.object({
    thing_prototype_id: v5.optional(v5.number()),
    hidden: v5.optional(v5.boolean()),
    is_primary: v5.optional(v5.boolean()),
    is_rare: v5.optional(v5.number()),
    is_secondary: v5.optional(v5.number())
  }))),
  variants: v5.optional(v5.array(valiObjectItemVariantSchema))
});
var valiObjectThingSchema = v5.object({
  ...valiObjectThingPrototypeSchema.entries,
  thing_id: v5.number(),
  user_id: v5.number(),
  owned_time: v5.number(),
  can_give: v5.optional(v5.number()),
  can_sell: v5.optional(v5.number()),
  souvenir: v5.optional(v5.string()),
  autograph: v5.optional(v5.object({
    user_id: v5.number(),
    text: v5.optional(v5.string())
  })),
  moneybox: v5.optional(v5.union([
    v5.object({
      transactions: v5.number(),
      money_inside: v5.number()
    }),
    v5.object({
      numbers: v5.array(v5.number())
    }),
    v5.object({
      count: v5.number()
    })
  ])),
  uses_left: v5.optional(v5.number()),
  uses_origin: v5.optional(v5.number()),
  variants: v5.optional(v5.array(valiObjectItemVariantSchema))
});
var valiObjectItemProtoSchema = v5.object({
  item_proto_id: v5.number(),
  item_proto_status: v5.optional(v5.picklist([0, 1, 2]), 0),
  type: v5.number(),
  image: v5.string(),
  title: v5.string(),
  description: v5.string(),
  quality_id: v5.number(),
  moneybox: bit(0),
  variants: v5.optional(v5.array(valiObjectItemVariantSchema)),
  monopoly_id: v5.optional(v5.number()),
  sticker_group_id: v5.optional(v5.number()),
  collection_id: v5.optional(v5.number()),
  twin_item_proto_ids: v5.optional(v5.array(v5.number())),
  prices: v5.optional(v5.object({
    buy: v5.optional(v5.union([
      v5.number(),
      v5.array(v5.object({
        use_count: v5.number(),
        price: v5.number()
      }))
    ])),
    quick_sell: v5.optional(v5.number())
  })),
  key_item_proto_id: v5.optional(v5.number()),
  case_item_proto_ids: v5.optional(v5.array(v5.number())),
  drop: v5.optional(v5.pipe(v5.array(v5.object({
    item_proto_id: v5.optional(v5.number()),
    is_primary: v5.optional(v5.boolean()),
    is_rare: v5.optional(v5.number()),
    is_secondary: v5.optional(v5.number())
  })), v5.transform((value) => value.filter((el) => el.item_proto_id !== undefined)))),
  can_craft: bit(0)
});
var valiObjectItemShortSchema = v5.object({
  ...valiObjectItemProtoSchema.entries,
  item_id: v5.number(),
  item_ids: v5.optional(v5.array(v5.number())),
  ts_owned: v5.number(),
  ts_can_trade: v5.optional(v5.number()),
  ts_can_sell: v5.optional(v5.number()),
  souvenir: v5.optional(v5.string()),
  autograph: v5.optional(v5.object({
    user_id: v5.number(),
    text: v5.optional(v5.string())
  })),
  moneybox: v5.optional(v5.record(v5.string(), v5.unknown())),
  seed: v5.optional(v5.union([v5.string(), v5.number()])),
  variants: v5.optional(v5.array(valiObjectItemVariantSchema)),
  xp_boost: v5.optional(v5.number())
});
var valiObjectItemSchema = v5.object({
  ...valiObjectItemShortSchema.entries,
  can_delete: bit(0),
  previous_owners_user_ids: v5.optional(v5.array(v5.number())),
  uses: v5.optional(v5.object({
    left: v5.number(),
    origin: v5.optional(v5.number())
  }))
});
var valiObjectItemProtoLegacySchema = v5.object({
  ...valiObjectThingPrototypeSchema.entries,
  ...valiObjectItemProtoSchema.entries
});

// src/valibot/data.ts
import * as v6 from "valibot";
var valiObjectPropertyTitleSchema = v6.object({
  id: v6.number(),
  title: v6.string()
});
var valiObjectCollectionSchema = v6.object({
  collection_id: v6.number(),
  id: v6.optional(v6.number()),
  title: v6.string()
});
var valiObjectQualitySchema = v6.object({
  coeff_rent: v6.number(),
  color: v6.string(),
  ...valiObjectPropertyTitleSchema.entries
});
var valiResponseDataSearchItemProtosSchema = v6.pipe(v6.object({
  item_protos: v6.array(valiObjectItemProtoSchema),
  collections: v6.array(valiObjectCollectionSchema)
}), v6.transform((value) => {
  return {
    item_protos: new Map(value.item_protos.map((item_proto) => [
      item_proto.item_proto_id,
      item_proto
    ])),
    collections: new Map(value.collections.map((collection) => [
      collection.collection_id,
      collection
    ]))
  };
}));

// src/api/data.ts
import * as v7 from "valibot";
class M1ApiData extends M1ApiBase {
  getItemProtos(item_proto_ids, options) {
    const add_legacy = options?.add_legacy === true;
    const add_metadata = options?.add_metadata !== false;
    const valiCurrentItemProtosSchema = v7.pipe(v7.array(add_legacy ? valiObjectItemProtoLegacySchema : valiObjectItemProtoSchema), v7.transform((value) => new Map(value.map((item_proto) => [item_proto.item_proto_id, item_proto]))));
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "data.getItemProtos",
      data: {
        item_proto_ids: [...item_proto_ids].join(","),
        add_legacy: Number(add_legacy),
        add_metadata: Number(add_metadata)
      },
      valiResponseSchema: add_metadata ? v7.object({
        item_protos: valiCurrentItemProtosSchema,
        collections: v7.array(v7.object({
          collection_id: v7.number(),
          title: v7.string()
        }))
      }) : v7.pipe(v7.object({
        item_protos: valiCurrentItemProtosSchema
      }), v7.transform((value) => value.item_protos))
    });
  }
  searchItemProtos(options) {
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "data.searchItemProtos",
      data: {
        type: options.type?.join(","),
        quality_id: options.quality_id?.join(","),
        collection_id: options.collection_id?.join(","),
        group_id: options.group_id?.join(","),
        offset: options.offset,
        count: options.count
      },
      valiResponseSchema: valiResponseDataSearchItemProtosSchema
    });
  }
}

// src/valibot/users.ts
import * as v8 from "valibot";
function transformerBot(value) {
  const { bot, bot_owner, ...value_rest } = value;
  return {
    ...value_rest,
    bot: bot ? {
      owner_user_id: bot_owner
    } : null
  };
}
var valiInputActiveUserShortSchema = v8.object({
  user_id: v8.number(),
  domain: v8.optional(v8.string()),
  inactive: v8.optional(v8.undefined()),
  approved: bit(0),
  nick: v8.string(),
  gender: v8.union([v8.literal(0), v8.literal(1)]),
  avatar: v8.string(),
  online: bit(0),
  current_game: v8.optional(v8.object({
    gs_id: v8.string(),
    gs_game_id: v8.string()
  })),
  rank: v8.optional(v8.union([
    v8.object({
      hidden: v8.literal(1)
    }),
    v8.object({
      qual: v8.number()
    }),
    v8.object({
      expired: v8.literal(1)
    }),
    v8.object({
      id: v8.number(),
      pts: v8.number()
    })
  ])),
  vip: bit(0),
  bot: bit(0),
  bot_owner: v8.optional(v8.number()),
  moderator: bit(0)
});
var valiObjectActiveUserShortSchema = v8.pipe(valiInputActiveUserShortSchema, v8.transform(transformerBot));
var valiObjectInactiveUserSchema = v8.object({
  nick: v8.string(),
  avatar: v8.string(),
  avatar_key: v8.string(),
  user_id: v8.optional(v8.number()),
  domain: v8.optional(v8.union([v8.string(), v8.null()])),
  inactive: v8.picklist(["not_exists", "global_ban"])
});
var valiObjectActiveUserSchema = v8.pipe(v8.object({
  ...valiInputActiveUserShortSchema.entries,
  nicks_old: v8.array(v8.string()),
  profile_cover: v8.optional(v8.string()),
  social_vk: v8.optional(v8.number()),
  social_discord: v8.optional(v8.string()),
  social_twitch: v8.optional(v8.string()),
  games: v8.optional(v8.number()),
  games_wins: v8.optional(v8.number()),
  xp: v8.optional(v8.number()),
  xp_level: v8.optional(v8.number()),
  badge: v8.optional(valiObjectThingSchema),
  friendship: v8.optional(v8.number()),
  muted: bit(0),
  mfp_ban_history: v8.optional(v8.union([
    v8.object({
      type: v8.literal(0),
      count: v8.number(),
      ts_last_ban: v8.number(),
      ts_end: v8.optional(v8.number())
    }),
    v8.object({
      type: v8.literal(1),
      ts_end: v8.number()
    })
  ]))
}), v8.transform(transformerBot), v8.transform((value) => {
  const { games, games_wins, ...value_rest } = value;
  return {
    ...value_rest,
    games: {
      total: games,
      won: games_wins
    }
  };
}));
var valiObjectUserShortSchema = v8.variant("inactive", [
  valiObjectActiveUserShortSchema,
  valiObjectInactiveUserSchema
]);
var valiObjectUserSchema = v8.variant("inactive", [
  valiObjectActiveUserSchema,
  valiObjectInactiveUserSchema
]);

// src/valibot/friends.ts
import * as v9 from "valibot";
var valiResponseFriendsGetBaseSchema = v9.object({
  count: v9.number(),
  friends: v9.array(valiObjectUserSchema)
});
var valiResponseFriendsGetWithUserSchema = v9.object({
  ...valiResponseFriendsGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseFriendsGetShortSchema = v9.object({
  count: v9.number(),
  friends: v9.array(valiObjectUserShortSchema)
});
var valiResponseFriendsGetShortWithUserSchema = v9.object({
  ...valiResponseFriendsGetShortSchema.entries,
  user: valiObjectUserShortSchema
});
var valiResponseFriendsGetRequestsSchema = v9.object({
  count: v9.number(),
  requests: v9.array(valiObjectUserSchema)
});
var valiResponseFriendsGetRequestsShortSchema = v9.object({
  count: v9.number(),
  requests: v9.array(valiObjectUserShortSchema)
});

// src/api/friends.ts
import * as v11 from "valibot";

// src/utils.ts
import * as v10 from "valibot";
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isIterableIterator(value) {
  return value !== null && typeof value === "object" && typeof Symbol.iterator in value && Symbol.iterator in value && typeof value[Symbol.iterator] === "function" && "next" in value && typeof value.next === "function";
}
function parseWithNotice(schema, value) {
  const result = v10.safeParse(schema, value);
  if (result.success) {
    return result.output;
  }
  console.error(v10.summarize(result.issues));
  throw new TypeError("Valibot found issues.");
}
function maskString(string6) {
  if (string6.length < 6) {
    return string6;
  }
  return `${string6.slice(0, 3)}***${string6.slice(-3)}`;
}

// src/api/friends.ts
class M1ApiFriends extends M1ApiBase {
  add(user_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.add",
      data: {
        user_id
      },
      valiResponseSchema: v11.void()
    });
  }
  delete(user_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.delete",
      data: {
        user_id
      },
      valiResponseSchema: v11.void()
    });
  }
  getRequests({
    count,
    offset,
    short
  } = {}) {
    const is_short = short === true;
    const data = {
      count,
      offset
    };
    if (is_short) {
      data.type = "short";
    }
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.getRequests",
      data,
      valiResponseSchema: is_short ? valiResponseFriendsGetRequestsShortSchema : valiResponseFriendsGetRequestsSchema
    });
  }
  get(arg0, arg1) {
    const user_id = typeof arg0 === "number" || typeof arg0 === "string" ? arg0 : undefined;
    const options = isRecord(arg0) ? arg0 : arg1;
    const is_short = options?.short ?? false;
    const add_user = options?.add_user ?? false;
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "friends.get",
      data: {
        user_id,
        online: options?.online ? 1 : undefined,
        add_user: add_user ? 1 : undefined,
        type: is_short ? "short" : undefined,
        offset: options?.offset,
        count: options?.count
      },
      valiResponseSchema: options?.short ? options?.add_user ? valiResponseFriendsGetShortWithUserSchema : valiResponseFriendsGetShortSchema : options?.add_user ? valiResponseFriendsGetWithUserSchema : valiResponseFriendsGetBaseSchema
    });
  }
}

// src/valibot/gchat.ts
import * as v12 from "valibot";
var valiObjectGchatMessageBaseSchema = v12.object({
  msg_id: v12.string(),
  ts: v12.number(),
  user_id: v12.number()
});
var valiObjectGchatMessageAdditionalDataSchema = v12.variant("type", [
  v12.object({
    type: v12.literal(1),
    text: v12.string(),
    is_public: v12.optional(bit(1)),
    user_ids_mentioned: v12.optional(v12.array(v12.number()))
  }),
  v12.object({
    type: v12.literal(2),
    case_item_proto_id: v12.number(),
    drop_item_proto_id: v12.number()
  }),
  v12.object({
    type: v12.literal(3),
    user_id_receiver: v12.number(),
    item_proto_id: v12.number()
  }),
  v12.object({
    type: v12.literal(4),
    item_proto_ids: v12.array(v12.number())
  })
]);
var valiObjectGchatMessageSchema = v12.intersect([
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageAdditionalDataSchema
]);
var valiResponseGchatGetSchema = v12.object({
  messages: v12.array(valiObjectGchatMessageSchema),
  status: v12.object({
    closed: v12.boolean(),
    slowmode: v12.boolean(),
    emoteonly: v12.boolean()
  }),
  users: v12.array(valiObjectUserShortSchema),
  item_protos: v12.array(valiObjectItemProtoSchema)
});
var valiResponseGchatSendSchema = v12.object({
  msg_id: v12.string()
});

// src/api/gchat.ts
class M1ApiGchat extends M1ApiBase {
  get() {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "gchat.get",
      valiResponseSchema: valiResponseGchatGetSchema
    });
  }
  send(message, options) {
    const data = { message };
    if (options?.is_public) {
      data.is_public = 1;
    }
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "gchat.send",
      data,
      valiResponseSchema: valiResponseGchatSendSchema
    });
  }
}

// src/valibot/im.ts
import * as v13 from "valibot";
var valiResponseImSendSchema = v13.object({
  msg_id: v13.number()
});
var valiObjectMessageSchema = v13.object({
  msg_id: v13.number(),
  is_read: v13.number(),
  text: v13.string(),
  ts_created: v13.number(),
  type: v13.number(),
  user_id: v13.number()
});
var valiObjectSyncSchema = v13.object({
  events: v13.array(v13.object({
    chain: v13.array(v13.union([v13.number(), v13.null()])),
    data: v13.object({
      type: v13.number(),
      msg_id: v13.number(),
      dialog: v13.object({
        user_id: v13.number()
      })
    })
  })),
  dialogs: v13.array(v13.object({
    user_id: v13.number(),
    new_counter: v13.number()
  })),
  messages: v13.array(valiObjectMessageSchema)
});
var valiObjectDialogSchema = v13.object({
  message: valiObjectMessageSchema,
  new_counter: v13.number(),
  user_id: v13.number()
});
var valiResponseImDialogsGetSchema = v13.object({
  dialogs: v13.array(valiObjectDialogSchema),
  sync: valiObjectSyncSchema,
  users_data: v13.array(valiObjectUserShortSchema)
});
var valiResponseImHistoryGetSchema = v13.object({
  messages: v13.array(valiObjectMessageSchema),
  sync: valiObjectSyncSchema,
  users_data: v13.array(valiObjectUserShortSchema)
});

// src/api/im.ts
class M1ApiIm extends M1ApiBase {
  send(options) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "im.send",
      data: options,
      valiResponseSchema: valiResponseImSendSchema
    });
  }
  getDialogs(options) {
    const data = options ?? {};
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "im.dialogsGet",
      data,
      valiResponseSchema: valiResponseImDialogsGetSchema
    });
  }
  getHistory(user_id, options) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "im.historyGet",
      data: {
        user_id,
        ...options
      },
      valiResponseSchema: valiResponseImHistoryGetSchema
    });
  }
  sync(id_last) {
    if (!this.baseClient.ws || !this.baseClient.ws.is_connected) {
      throw new Error("WebSocket is not connected");
    }
    this.baseClient.ws.emit("api", ["im.sync", { id_last }]);
  }
}

// src/valibot/inventory.ts
import * as v14 from "valibot";
var valiCollectionSchema = v14.object({
  collection_id: v14.number(),
  title: v14.string()
});
var valiThingTypeSchema = v14.object({
  id: v14.number(),
  title: v14.string()
});
var valiQualitySchema = v14.object({
  id: v14.number(),
  title: v14.string(),
  coeff_rent: v14.number()
});
var valiEquippedArraySchema = v14.object({
  item_ids_equipped: v14.optional(v14.array(v14.number()))
});
var valiEquippedTreeSchema = v14.object({
  equipped: v14.optional(v14.object({
    game: v14.record(v14.string(), v14.object({
      cards: v14.record(v14.string(), v14.array(v14.number())),
      generator: v14.number(),
      joke: v14.number()
    }))
  }))
});
var valiResponseInventoryCraftSchema = v14.object({
  item: valiObjectItemSchema
});
var valiResponseInventoryGetBaseSchema = v14.object({
  count: v14.number(),
  collections: v14.array(valiCollectionSchema),
  items: v14.array(valiObjectItemSchema)
});
var valiResponseInventoryGetLegacySchema = v14.object({
  count: v14.number(),
  collections: v14.array(valiCollectionSchema),
  things: v14.array(valiObjectThingSchema),
  thing_types: v14.optional(v14.array(valiThingTypeSchema)),
  qualities: v14.optional(v14.array(valiQualitySchema))
});
var valiResponseInventoryGetWithUserSchema = v14.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserSchema = v14.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithEquippedArraySchema = v14.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetWithEquippedTreeSchema = v14.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetWithUserAndEquippedArraySchema = v14.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithUserAndEquippedTreeSchema = v14.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithEquippedArraySchema = v14.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetLegacyWithEquippedTreeSchema = v14.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = v14.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = v14.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});

// src/api/inventory.ts
class M1ApiInventory extends M1ApiBase {
  craft(item_ids) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "inventory.craft",
      data: {
        item_ids: item_ids.join(",")
      },
      valiResponseSchema: valiResponseInventoryCraftSchema
    });
  }
  get(arg0, arg1) {
    const user_id = typeof arg0 === "number" || typeof arg0 === "string" ? arg0 : undefined;
    const options = isRecord(arg0) ? arg0 : arg1;
    const add_legacy = options?.add_legacy ?? true;
    const add_user = options?.add_user ?? false;
    const add_equipped = options?.add_equipped;
    const data = {
      user_id,
      include_stock: options?.include_stock ? 1 : undefined,
      order: options?.order,
      count: options?.count,
      add_user: add_user ? 1 : undefined,
      add_legacy: Number(add_legacy),
      add_equipped,
      shrink: options?.shrink ? 1 : undefined
    };
    let valiResponseSchema;
    if (add_legacy === false) {
      if (add_user) {
        if (add_equipped === "array") {
          valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedArraySchema;
        } else if (add_equipped === "tree") {
          valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedTreeSchema;
        } else {
          valiResponseSchema = valiResponseInventoryGetWithUserSchema;
        }
      } else if (add_equipped === "array") {
        valiResponseSchema = valiResponseInventoryGetWithEquippedArraySchema;
      } else if (add_equipped === "tree") {
        valiResponseSchema = valiResponseInventoryGetWithEquippedTreeSchema;
      } else {
        valiResponseSchema = valiResponseInventoryGetBaseSchema;
      }
    } else if (add_user) {
      if (add_equipped === "array") {
        valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema;
      } else if (add_equipped === "tree") {
        valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema;
      } else {
        valiResponseSchema = valiResponseInventoryGetLegacyWithUserSchema;
      }
    } else if (add_equipped === "array") {
      valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedArraySchema;
    } else if (add_equipped === "tree") {
      valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedTreeSchema;
    } else {
      valiResponseSchema = valiResponseInventoryGetLegacySchema;
    }
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "inventory.get",
      data,
      valiResponseSchema
    });
  }
}

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

// src/valibot/trades.ts
import * as v15 from "valibot";
var valiObjectTradeIdSchema = v15.object({
  trade_id: v15.number()
});
var valiObjectTradeSideSchema = v15.object({
  user_id: v15.number(),
  item_ids: v15.array(valiObjectItemSchema)
});
var valiObjectTradeSchema = v15.object({
  create_time: v15.number(),
  reaction_time: v15.nullable(v15.number()),
  status: v15.number(),
  trade_id: v15.number(),
  things_from: v15.array(valiObjectThingSchema),
  things_to: v15.array(valiObjectThingSchema),
  user_id_from: v15.number(),
  user_id_to: v15.number()
});
var valiObjectNewTradeSchema = v15.object({
  trade_id: v15.number(),
  status: v15.number(),
  ts_created: v15.number(),
  ts_completed: v15.nullable(v15.number()),
  initiator: valiObjectTradeSideSchema,
  receiver: valiObjectTradeSideSchema
});
var valiObjectTradeListSchema = v15.object({
  collections: v15.array(v15.number()),
  qualities: v15.array(v15.number()),
  item_ids_equipped: v15.optional(v15.array(v15.number())),
  thing_types: v15.array(v15.number()),
  trades: v15.array(valiObjectTradeSchema),
  user_data: v15.array(valiObjectUserSchema)
});

// src/api/trades.ts
import * as v16 from "valibot";
class M1ApiTrades extends M1ApiBase {
  create(options) {
    const data = {
      user_id: options.user_id
    };
    if (options.item_ids_request !== undefined) {
      data.thing_ids_to = options.item_ids_request.join(",");
    }
    if (options.item_ids_offer !== undefined) {
      data.thing_ids_from = options.item_ids_offer.join(",");
    }
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
      data: {
        trade_id
      },
      valiResponseSchema: v16.void()
    });
  }
  decline(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.cancel",
      data: {
        trade_id
      },
      valiResponseSchema: v16.void()
    });
  }
  revoke(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.revoke",
      data: {
        trade_id
      },
      valiResponseSchema: v16.void()
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
    const data = typeof arg0 === "number" ? {
      user_id: arg0,
      ...arg1
    } : arg0;
    if (data !== undefined && "user_id" in data) {
      api_method = "trades.historyWith";
    }
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method,
      data,
      valiResponseSchema: valiObjectTradeListSchema
    });
  }
}

// src/api/users.ts
import * as v17 from "valibot";
function transformer(value) {
  const result = new Map;
  for (const user of value) {
    result.set(user.user_id ?? user.domain, user);
  }
  return result;
}
var valiApiResponseUsersGetSchema = v17.pipe(v17.array(valiObjectUserSchema), v17.transform(transformer));
var valiApiResponseUsersGetShortSchema = v17.pipe(v17.array(valiObjectUserShortSchema), v17.transform(transformer));
var valiApiResponseUsersGetOneSchema = v17.pipe(v17.array(valiObjectUserSchema), v17.transform((value) => value[0]));
var valiApiResponseUsersGetShortOneSchema = v17.pipe(v17.array(valiObjectUserShortSchema), v17.transform((value) => value[0]));

class M1ApiUsers extends M1ApiBase {
  get(arg0, arg1) {
    let user_ids = [];
    let is_multiple_users = false;
    const data = {};
    if (isRecord(arg0) && arg0.short === true) {
      data.type = "short";
    } else if (isIterableIterator(arg0) || arg0 instanceof Set) {
      user_ids = [...arg0];
      is_multiple_users = true;
    } else if (Array.isArray(arg0)) {
      user_ids = arg0;
      is_multiple_users = true;
    } else if (typeof arg0 === "string" || typeof arg0 === "number") {
      user_ids = [arg0];
    }
    if (isRecord(arg1) && arg1.short === true) {
      data.type = "short";
    }
    data.user_ids = user_ids.join(",");
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "users.get",
      data,
      valiResponseSchema: data?.type === "short" ? is_multiple_users ? valiApiResponseUsersGetShortSchema : valiApiResponseUsersGetShortOneSchema : is_multiple_users ? valiApiResponseUsersGetSchema : valiApiResponseUsersGetOneSchema
    });
  }
}

export { valiObjectSessionSchema, valiResponseTotpSessionTokenSchema, M1ApiBase, M1ApiAuth, M1ApiBots, valiObjectItemVariantSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemProtoLegacySchema, valiObjectPropertyTitleSchema, valiObjectCollectionSchema, valiObjectQualitySchema, valiResponseDataSearchItemProtosSchema, M1ApiData, parseWithNotice, maskString, valiObjectActiveUserShortSchema, valiObjectInactiveUserSchema, valiObjectActiveUserSchema, valiObjectUserShortSchema, valiObjectUserSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetWithUserSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, M1ApiFriends, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, M1ApiGchat, valiResponseImSendSchema, valiObjectMessageSchema, valiObjectDialogSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, M1ApiIm, valiResponseInventoryCraftSchema, valiResponseInventoryGetBaseSchema, valiResponseInventoryGetLegacySchema, valiResponseInventoryGetWithUserSchema, valiResponseInventoryGetLegacyWithUserSchema, valiResponseInventoryGetWithEquippedArraySchema, valiResponseInventoryGetWithEquippedTreeSchema, valiResponseInventoryGetWithUserAndEquippedArraySchema, valiResponseInventoryGetWithUserAndEquippedTreeSchema, valiResponseInventoryGetLegacyWithEquippedArraySchema, valiResponseInventoryGetLegacyWithEquippedTreeSchema, valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema, valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema, M1ApiInventory, M1ApiOauth, valiObjectTradeIdSchema, valiObjectTradeSchema, valiObjectNewTradeSchema, valiObjectTradeListSchema, M1ApiTrades, M1ApiUsers };
