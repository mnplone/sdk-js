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
import * as v9 from "valibot";

// src/valibot.ts
import * as v8 from "valibot";
var symbol = Object.create(null);
function absent(default_value) {
  return v8.pipe(v8.exactOptional(v8.unknown(), symbol), v8.check((value) => value === symbol), v8.transform(() => default_value));
}

// src/valibot/users.ts
function transformerBot(value) {
  const { bot, bot_owner, ...value_rest } = value;
  return {
    ...value_rest,
    bot: bot ? {
      owner_user_id: bot_owner
    } : null
  };
}
var valiInputActiveUserShortSchema = v9.object({
  user_id: v9.number(),
  domain: v9.optional(v9.string()),
  inactive: v9.optional(v9.undefined()),
  approved: bit(0),
  nick: v9.string(),
  gender: v9.picklist([0, 1]),
  avatar: v9.string(),
  online: bit(0),
  current_game: v9.optional(v9.object({
    gs_id: v9.string(),
    gs_game_id: v9.string()
  })),
  rank: v9.optional(v9.union([
    v9.object({
      hidden: v9.literal(1)
    }),
    v9.object({
      qual: v9.number()
    }),
    v9.object({
      expired: v9.literal(1)
    }),
    v9.object({
      id: v9.number(),
      pts: v9.number()
    })
  ])),
  vip: bit(0),
  bot: bit(0),
  bot_owner: v9.optional(v9.number()),
  moderator: bit(0)
});
var valiObjectActiveUserShortSchema = v9.pipe(valiInputActiveUserShortSchema, v9.transform(transformerBot));
var valiObjectInactiveUserSchema = v9.object({
  user_id: v9.optional(v9.number()),
  domain: v9.optional(v9.union([v9.string(), v9.null()])),
  inactive: v9.picklist(["not_exists", "global_ban"]),
  approved: absent(false),
  nick: v9.string(),
  gender: absent(0),
  avatar: v9.string(),
  avatar_key: v9.string(),
  online: absent(false),
  vip: absent(false),
  moderator: absent(false),
  muted: absent(true)
});
var valiObjectActiveUserSchema = v9.pipe(v9.object({
  ...valiInputActiveUserShortSchema.entries,
  nicks_old: v9.array(v9.string()),
  profile_cover: v9.optional(v9.string()),
  social_vk: v9.optional(v9.number()),
  social_discord: v9.optional(v9.string()),
  social_twitch: v9.optional(v9.string()),
  games: v9.optional(v9.number()),
  games_wins: v9.optional(v9.number()),
  xp: v9.optional(v9.number()),
  xp_level: v9.optional(v9.number()),
  badge: v9.optional(valiObjectThingSchema),
  friendship: v9.optional(v9.number()),
  muted: bit(0),
  mfp_ban_history: v9.optional(v9.union([
    v9.object({
      type: v9.literal(0),
      count: v9.number(),
      ts_last_ban: v9.number(),
      ts_end: v9.optional(v9.number())
    }),
    v9.object({
      type: v9.literal(1),
      ts_end: v9.number()
    })
  ]))
}), v9.transform(transformerBot), v9.transform((value) => {
  const { games, games_wins, ...value_rest } = value;
  return {
    ...value_rest,
    games: {
      total: games,
      won: games_wins
    }
  };
}));
var valiObjectUserShortSchema = v9.variant("inactive", [
  valiObjectActiveUserShortSchema,
  valiObjectInactiveUserSchema
]);
var valiObjectUserSchema = v9.variant("inactive", [
  valiObjectActiveUserSchema,
  valiObjectInactiveUserSchema
]);

// src/valibot/friends.ts
import * as v10 from "valibot";
var valiResponseFriendsGetBaseSchema = v10.object({
  count: v10.number(),
  friends: v10.array(valiObjectUserSchema)
});
var valiResponseFriendsGetWithUserSchema = v10.object({
  ...valiResponseFriendsGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseFriendsGetShortSchema = v10.object({
  count: v10.number(),
  friends: v10.array(valiObjectUserShortSchema)
});
var valiResponseFriendsGetShortWithUserSchema = v10.object({
  ...valiResponseFriendsGetShortSchema.entries,
  user: valiObjectUserShortSchema
});
var valiResponseFriendsGetRequestsSchema = v10.object({
  count: v10.number(),
  requests: v10.array(valiObjectUserSchema)
});
var valiResponseFriendsGetRequestsShortSchema = v10.object({
  count: v10.number(),
  requests: v10.array(valiObjectUserShortSchema)
});

// src/api/friends.ts
import * as v12 from "valibot";

// src/utils.ts
import * as v11 from "valibot";
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isIterableIterator(value) {
  return value !== null && typeof value === "object" && typeof Symbol.iterator in value && Symbol.iterator in value && typeof value[Symbol.iterator] === "function" && "next" in value && typeof value.next === "function";
}
function parseWithNotice(schema, value) {
  const result = v11.safeParse(schema, value);
  if (result.success) {
    return result.output;
  }
  console.error(v11.summarize(result.issues));
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
      valiResponseSchema: v12.void()
    });
  }
  delete(user_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.delete",
      data: {
        user_id
      },
      valiResponseSchema: v12.void()
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
import * as v13 from "valibot";
var valiObjectGchatMessageBaseSchema = v13.object({
  msg_id: v13.string(),
  ts: v13.number(),
  user_id: v13.number()
});
var valiObjectGchatMessageAdditionalDataSchema = v13.variant("type", [
  v13.object({
    type: v13.literal(1),
    text: v13.string(),
    is_public: v13.optional(bit(1)),
    user_ids_mentioned: v13.optional(v13.array(v13.number()))
  }),
  v13.object({
    type: v13.literal(2),
    case_item_proto_id: v13.number(),
    drop_item_proto_id: v13.number()
  }),
  v13.object({
    type: v13.literal(3),
    user_id_receiver: v13.number(),
    item_proto_id: v13.number()
  }),
  v13.object({
    type: v13.literal(4),
    item_proto_ids: v13.array(v13.number())
  })
]);
var valiObjectGchatMessageSchema = v13.intersect([
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageAdditionalDataSchema
]);
var valiResponseGchatGetSchema = v13.object({
  messages: v13.array(valiObjectGchatMessageSchema),
  status: v13.object({
    closed: v13.boolean(),
    slowmode: v13.boolean(),
    emoteonly: v13.boolean()
  }),
  users: v13.array(valiObjectUserShortSchema),
  item_protos: v13.array(valiObjectItemProtoSchema)
});
var valiResponseGchatSendSchema = v13.object({
  msg_id: v13.string()
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
import * as v14 from "valibot";
var valiResponseImSendSchema = v14.object({
  msg_id: v14.number()
});
var valiObjectMessageSchema = v14.object({
  msg_id: v14.number(),
  is_read: v14.number(),
  text: v14.string(),
  ts_created: v14.number(),
  type: v14.number(),
  user_id: v14.number()
});
var valiObjectSyncSchema = v14.object({
  events: v14.array(v14.object({
    chain: v14.array(v14.union([v14.number(), v14.null()])),
    data: v14.object({
      type: v14.number(),
      msg_id: v14.number(),
      dialog: v14.object({
        user_id: v14.number()
      })
    })
  })),
  dialogs: v14.array(v14.object({
    user_id: v14.number(),
    new_counter: v14.number()
  })),
  messages: v14.array(valiObjectMessageSchema)
});
var valiObjectDialogSchema = v14.object({
  message: valiObjectMessageSchema,
  new_counter: v14.number(),
  user_id: v14.number()
});
var valiResponseImDialogsGetSchema = v14.object({
  dialogs: v14.array(valiObjectDialogSchema),
  sync: valiObjectSyncSchema,
  users_data: v14.array(valiObjectUserShortSchema)
});
var valiResponseImHistoryGetSchema = v14.object({
  messages: v14.array(valiObjectMessageSchema),
  sync: valiObjectSyncSchema,
  users_data: v14.array(valiObjectUserShortSchema)
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
import * as v15 from "valibot";
var valiCollectionSchema = v15.object({
  collection_id: v15.number(),
  title: v15.string()
});
var valiThingTypeSchema = v15.object({
  id: v15.number(),
  title: v15.string()
});
var valiQualitySchema = v15.object({
  id: v15.number(),
  title: v15.string(),
  coeff_rent: v15.number()
});
var valiEquippedArraySchema = v15.object({
  item_ids_equipped: v15.optional(v15.array(v15.number()))
});
var valiEquippedTreeSchema = v15.object({
  equipped: v15.optional(v15.object({
    game: v15.record(v15.string(), v15.object({
      cards: v15.record(v15.string(), v15.array(v15.number())),
      generator: v15.number(),
      joke: v15.number()
    }))
  }))
});
var valiResponseInventoryCraftSchema = v15.object({
  item: valiObjectItemSchema
});
var valiResponseInventoryGetBaseSchema = v15.object({
  count: v15.number(),
  collections: v15.array(valiCollectionSchema),
  items: v15.array(valiObjectItemSchema)
});
var valiResponseInventoryGetLegacySchema = v15.object({
  count: v15.number(),
  collections: v15.array(valiCollectionSchema),
  things: v15.array(valiObjectThingSchema),
  thing_types: v15.optional(v15.array(valiThingTypeSchema)),
  qualities: v15.optional(v15.array(valiQualitySchema))
});
var valiResponseInventoryGetWithUserSchema = v15.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserSchema = v15.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithEquippedArraySchema = v15.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetWithEquippedTreeSchema = v15.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetWithUserAndEquippedArraySchema = v15.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithUserAndEquippedTreeSchema = v15.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithEquippedArraySchema = v15.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetLegacyWithEquippedTreeSchema = v15.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = v15.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = v15.object({
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
import * as v16 from "valibot";
var valiObjectTradeIdSchema = v16.object({
  trade_id: v16.number()
});
var valiObjectTradeSideSchema = v16.object({
  user_id: v16.number(),
  item_ids: v16.array(valiObjectItemSchema)
});
var valiObjectTradeSchema = v16.object({
  create_time: v16.number(),
  reaction_time: v16.nullable(v16.number()),
  status: v16.number(),
  trade_id: v16.number(),
  things_from: v16.array(valiObjectThingSchema),
  things_to: v16.array(valiObjectThingSchema),
  user_id_from: v16.number(),
  user_id_to: v16.number()
});
var valiObjectNewTradeSchema = v16.object({
  trade_id: v16.number(),
  status: v16.number(),
  ts_created: v16.number(),
  ts_completed: v16.nullable(v16.number()),
  initiator: valiObjectTradeSideSchema,
  receiver: valiObjectTradeSideSchema
});
var valiObjectTradeListSchema = v16.object({
  collections: v16.array(v16.number()),
  qualities: v16.array(v16.number()),
  item_ids_equipped: v16.optional(v16.array(v16.number())),
  thing_types: v16.array(v16.number()),
  trades: v16.array(valiObjectTradeSchema),
  user_data: v16.array(valiObjectUserSchema)
});

// src/api/trades.ts
import * as v17 from "valibot";
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
      valiResponseSchema: v17.void()
    });
  }
  decline(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.cancel",
      data: {
        trade_id
      },
      valiResponseSchema: v17.void()
    });
  }
  revoke(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.revoke",
      data: {
        trade_id
      },
      valiResponseSchema: v17.void()
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
import * as v18 from "valibot";
function transformer(value) {
  const result = new Map;
  for (const user of value) {
    result.set(user.user_id ?? user.domain, user);
  }
  return result;
}
var valiApiResponseUsersGetSchema = v18.pipe(v18.array(valiObjectUserSchema), v18.transform(transformer));
var valiApiResponseUsersGetShortSchema = v18.pipe(v18.array(valiObjectUserShortSchema), v18.transform(transformer));
var valiApiResponseUsersGetOneSchema = v18.pipe(v18.array(valiObjectUserSchema), v18.transform((value) => value[0]));
var valiApiResponseUsersGetShortOneSchema = v18.pipe(v18.array(valiObjectUserShortSchema), v18.transform((value) => value[0]));

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
