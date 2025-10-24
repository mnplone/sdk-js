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
import * as v4 from "valibot";

// src/valibot/common.ts
import { optional as optional2, picklist, transform, pipe } from "valibot";
function bit(default_value) {
  return pipe(optional2(picklist([0, 1]), default_value), transform((value) => value === 1));
}

// src/valibot/items.ts
var valiObjectItemVariantSchema = v4.object({
  id: v4.number(),
  is_default: bit(0),
  is_selected: bit(0),
  is_unlocked: bit(0),
  image: v4.optional(v4.string()),
  description: v4.optional(v4.string()),
  unlock: v4.optional(v4.object({
    moneybox: v4.optional(v4.number()),
    buy_tokens_sp: v4.optional(v4.number()),
    buy_tokens_cmpt: v4.optional(v4.number())
  }))
});
var valiObjectThingPrototypeSchema = v4.object({
  thing_prototype_id: v4.number(),
  thing_prototype_status: v4.number(),
  thing_type: v4.number(),
  image: v4.string(),
  title: v4.string(),
  description: v4.string(),
  group: v4.optional(v4.pipe(v4.nullable(v4.number()), v4.transform((value) => typeof value === "number" ? value : undefined))),
  quality: v4.number(),
  collection: v4.optional(v4.number()),
  twin_thing_prototype_id: v4.optional(v4.array(v4.number())),
  delete_price: v4.optional(v4.nullable(v4.number())),
  can_be_upgraded: bit(0),
  buy_cost: v4.optional(v4.number()),
  key: v4.optional(v4.number()),
  cases: v4.optional(v4.array(v4.number())),
  drop: v4.optional(v4.array(v4.object({
    thing_prototype_id: v4.optional(v4.number()),
    hidden: v4.optional(v4.boolean()),
    is_primary: v4.optional(v4.boolean()),
    is_rare: v4.optional(v4.number()),
    is_secondary: v4.optional(v4.number())
  }))),
  variants: v4.optional(v4.array(valiObjectItemVariantSchema))
});
var valiObjectThingSchema = v4.object({
  ...valiObjectThingPrototypeSchema.entries,
  thing_id: v4.number(),
  user_id: v4.number(),
  owned_time: v4.number(),
  can_give: v4.optional(v4.number()),
  can_sell: v4.optional(v4.number()),
  souvenir: v4.optional(v4.string()),
  autograph: v4.optional(v4.object({
    user_id: v4.number(),
    text: v4.optional(v4.string())
  })),
  moneybox: v4.optional(v4.union([
    v4.object({
      transactions: v4.number(),
      money_inside: v4.number()
    }),
    v4.object({
      numbers: v4.array(v4.number())
    }),
    v4.object({
      count: v4.number()
    })
  ])),
  uses_left: v4.optional(v4.number()),
  uses_origin: v4.optional(v4.number()),
  variants: v4.optional(v4.array(valiObjectItemVariantSchema))
});
var valiObjectItemProtoSchema = v4.object({
  item_proto_id: v4.number(),
  item_proto_status: v4.optional(v4.picklist([0, 1, 2]), 0),
  type: v4.number(),
  image: v4.string(),
  title: v4.string(),
  description: v4.string(),
  quality_id: v4.number(),
  moneybox: bit(0),
  variants: v4.optional(v4.array(valiObjectItemVariantSchema)),
  monopoly_id: v4.optional(v4.number()),
  sticker_group_id: v4.optional(v4.number()),
  collection_id: v4.optional(v4.number()),
  twin_item_proto_ids: v4.optional(v4.array(v4.number())),
  prices: v4.optional(v4.object({
    buy: v4.optional(v4.union([
      v4.number(),
      v4.array(v4.object({
        use_count: v4.number(),
        price: v4.number()
      }))
    ])),
    quick_sell: v4.optional(v4.number())
  })),
  key_item_proto_id: v4.optional(v4.number()),
  case_item_proto_ids: v4.optional(v4.array(v4.number())),
  drop: v4.optional(v4.pipe(v4.array(v4.object({
    item_proto_id: v4.optional(v4.number()),
    is_primary: v4.optional(v4.boolean()),
    is_rare: v4.optional(v4.number()),
    is_secondary: v4.optional(v4.number())
  })), v4.transform((value) => value.filter((el) => el.item_proto_id !== undefined)))),
  can_craft: bit(0)
});
var valiObjectItemShortSchema = v4.object({
  ...valiObjectItemProtoSchema.entries,
  item_id: v4.number(),
  item_ids: v4.optional(v4.array(v4.number())),
  ts_owned: v4.number(),
  ts_can_trade: v4.optional(v4.number()),
  ts_can_sell: v4.optional(v4.number()),
  souvenir: v4.optional(v4.string()),
  autograph: v4.optional(v4.object({
    user_id: v4.number(),
    text: v4.optional(v4.string())
  })),
  moneybox: v4.optional(v4.record(v4.string(), v4.unknown())),
  seed: v4.optional(v4.union([v4.string(), v4.number()])),
  variants: v4.optional(v4.array(valiObjectItemVariantSchema)),
  xp_boost: v4.optional(v4.number())
});
var valiObjectItemSchema = v4.object({
  ...valiObjectItemShortSchema.entries,
  can_delete: bit(0),
  previous_owners_user_ids: v4.optional(v4.array(v4.number())),
  uses: v4.optional(v4.object({
    left: v4.number(),
    origin: v4.optional(v4.number())
  }))
});
var valiObjectItemProtoLegacySchema = v4.object({
  ...valiObjectThingPrototypeSchema.entries,
  ...valiObjectItemProtoSchema.entries
});

// src/valibot/data.ts
import {
  array as array2,
  transform as transform3,
  pipe as pipe3,
  number as number4,
  object as object4,
  optional as optional4,
  string as string3
} from "valibot";
var valiObjectPropertyTitleSchema = object4({
  id: number4(),
  title: string3()
});
var valiObjectCollectionSchema = object4({
  collection_id: number4(),
  id: optional4(number4()),
  title: string3()
});
var valiObjectQualitySchema = object4({
  coeff_rent: number4(),
  color: string3(),
  ...valiObjectPropertyTitleSchema.entries
});
var valiResponseDataSearchItemProtosSchema = pipe3(object4({
  item_protos: array2(valiObjectItemProtoSchema),
  collections: array2(valiObjectCollectionSchema)
}), transform3((value) => {
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
import * as v5 from "valibot";
class M1ApiData extends M1ApiBase {
  getItemProtos(item_proto_ids, options) {
    const add_legacy = options?.add_legacy === true;
    const add_metadata = options?.add_metadata !== false;
    const valiCurrentItemProtosSchema = v5.pipe(v5.array(add_legacy ? valiObjectItemProtoLegacySchema : valiObjectItemProtoSchema), v5.transform((value) => new Map(value.map((item_proto) => [item_proto.item_proto_id, item_proto]))));
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "data.getItemProtos",
      data: {
        item_proto_ids: [...item_proto_ids].join(","),
        add_legacy: Number(add_legacy),
        add_metadata: Number(add_metadata)
      },
      valiResponseSchema: add_metadata ? v5.object({
        item_protos: valiCurrentItemProtosSchema,
        collections: v5.array(v5.object({
          collection_id: v5.number(),
          title: v5.string()
        }))
      }) : v5.pipe(v5.object({
        item_protos: valiCurrentItemProtosSchema
      }), v5.transform((value) => value.item_protos))
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
import * as v6 from "valibot";
function transformerBot(value) {
  const { bot, bot_owner, ...value_rest } = value;
  return {
    ...value_rest,
    bot: bot ? {
      owner_user_id: bot_owner
    } : null
  };
}
var valiInputActiveUserShortSchema = v6.object({
  user_id: v6.number(),
  domain: v6.optional(v6.string()),
  inactive: v6.optional(v6.undefined()),
  approved: bit(0),
  nick: v6.string(),
  gender: v6.union([v6.literal(0), v6.literal(1)]),
  avatar: v6.string(),
  online: bit(0),
  current_game: v6.optional(v6.object({
    gs_id: v6.string(),
    gs_game_id: v6.string()
  })),
  rank: v6.optional(v6.union([
    v6.object({
      hidden: v6.literal(1)
    }),
    v6.object({
      qual: v6.number()
    }),
    v6.object({
      expired: v6.literal(1)
    }),
    v6.object({
      id: v6.number(),
      pts: v6.number()
    })
  ])),
  vip: bit(0),
  bot: bit(0),
  bot_owner: v6.optional(v6.number()),
  moderator: bit(0)
});
var valiObjectActiveUserShortSchema = v6.pipe(valiInputActiveUserShortSchema, v6.transform(transformerBot));
var valiObjectInactiveUserSchema = v6.object({
  nick: v6.string(),
  avatar: v6.string(),
  avatar_key: v6.string(),
  user_id: v6.optional(v6.number()),
  domain: v6.optional(v6.union([v6.string(), v6.null()])),
  inactive: v6.picklist(["not_exists", "global_ban"])
});
var valiObjectActiveUserSchema = v6.pipe(v6.object({
  ...valiInputActiveUserShortSchema.entries,
  nicks_old: v6.array(v6.string()),
  profile_cover: v6.optional(v6.string()),
  social_vk: v6.optional(v6.number()),
  social_discord: v6.optional(v6.string()),
  social_twitch: v6.optional(v6.string()),
  games: v6.optional(v6.number()),
  games_wins: v6.optional(v6.number()),
  xp: v6.optional(v6.number()),
  xp_level: v6.optional(v6.number()),
  badge: v6.optional(valiObjectThingSchema),
  friendship: v6.optional(v6.number()),
  muted: bit(0),
  mfp_ban_history: v6.optional(v6.union([
    v6.object({
      type: v6.literal(0),
      count: v6.number(),
      ts_last_ban: v6.number(),
      ts_end: v6.optional(v6.number())
    }),
    v6.object({
      type: v6.literal(1),
      ts_end: v6.number()
    })
  ]))
}), v6.transform(transformerBot), v6.transform((value) => {
  const { games, games_wins, ...value_rest } = value;
  return {
    ...value_rest,
    games: {
      total: games,
      won: games_wins
    }
  };
}));
var valiObjectUserShortSchema = v6.variant("inactive", [
  valiObjectActiveUserShortSchema,
  valiObjectInactiveUserSchema
]);
var valiObjectUserSchema = v6.variant("inactive", [
  valiObjectActiveUserSchema,
  valiObjectInactiveUserSchema
]);

// src/valibot/friends.ts
import { number as number7, object as object7, array as array5 } from "valibot";
var valiResponseFriendsGetBaseSchema = object7({
  count: number7(),
  friends: array5(valiObjectUserSchema)
});
var valiResponseFriendsGetWithUserSchema = object7({
  ...valiResponseFriendsGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseFriendsGetShortSchema = object7({
  count: number7(),
  friends: array5(valiObjectUserShortSchema)
});
var valiResponseFriendsGetShortWithUserSchema = object7({
  ...valiResponseFriendsGetShortSchema.entries,
  user: valiObjectUserShortSchema
});
var valiResponseFriendsGetRequestsSchema = object7({
  count: number7(),
  requests: array5(valiObjectUserSchema)
});
var valiResponseFriendsGetRequestsShortSchema = object7({
  count: number7(),
  requests: array5(valiObjectUserShortSchema)
});

// src/api/friends.ts
import * as v8 from "valibot";

// src/utils.ts
import * as v7 from "valibot";
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isIterableIterator(value) {
  return value !== null && typeof value === "object" && typeof Symbol.iterator in value && Symbol.iterator in value && typeof value[Symbol.iterator] === "function" && "next" in value && typeof value.next === "function";
}
function parseWithNotice(schema, value) {
  const result = v7.safeParse(schema, value);
  if (result.success) {
    return result.output;
  }
  console.error(v7.summarize(result.issues));
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
      valiResponseSchema: v8.void()
    });
  }
  delete(user_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.delete",
      data: {
        user_id
      },
      valiResponseSchema: v8.void()
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
import * as v9 from "valibot";
var valiObjectGchatMessageBaseSchema = v9.object({
  msg_id: v9.string(),
  ts: v9.number(),
  user_id: v9.number()
});
var valiObjectGchatMessageAdditionalDataSchema = v9.variant("type", [
  v9.object({
    type: v9.literal(1),
    text: v9.string(),
    is_public: v9.optional(bit(1)),
    user_ids_mentioned: v9.optional(v9.array(v9.number()))
  }),
  v9.object({
    type: v9.literal(2),
    case_item_proto_id: v9.number(),
    drop_item_proto_id: v9.number()
  }),
  v9.object({
    type: v9.literal(3),
    user_id_receiver: v9.number(),
    item_proto_id: v9.number()
  }),
  v9.object({
    type: v9.literal(4),
    item_proto_ids: v9.array(v9.number())
  })
]);
var valiObjectGchatMessageSchema = v9.intersect([
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageAdditionalDataSchema
]);
var valiResponseGchatGetSchema = v9.object({
  messages: v9.array(valiObjectGchatMessageSchema),
  status: v9.object({
    closed: v9.boolean(),
    slowmode: v9.boolean(),
    emoteonly: v9.boolean()
  }),
  users: v9.array(valiObjectUserShortSchema),
  item_protos: v9.array(valiObjectItemProtoSchema)
});
var valiResponseGchatSendSchema = v9.object({
  msg_id: v9.string()
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
import {
  array as array7,
  null_,
  number as number9,
  object as object9,
  string as string7,
  union as union4
} from "valibot";
var valiResponseImSendSchema = object9({
  msg_id: number9()
});
var valiObjectMessageSchema = object9({
  msg_id: number9(),
  is_read: number9(),
  text: string7(),
  ts_created: number9(),
  type: number9(),
  user_id: number9()
});
var valiObjectSyncSchema = object9({
  events: array7(object9({
    chain: array7(union4([number9(), null_()])),
    data: object9({
      type: number9(),
      msg_id: number9(),
      dialog: object9({
        user_id: number9()
      })
    })
  })),
  dialogs: array7(object9({
    user_id: number9(),
    new_counter: number9()
  })),
  messages: array7(valiObjectMessageSchema)
});
var valiObjectDialogSchema = object9({
  message: valiObjectMessageSchema,
  new_counter: number9(),
  user_id: number9()
});
var valiResponseImDialogsGetSchema = object9({
  dialogs: array7(valiObjectDialogSchema),
  sync: valiObjectSyncSchema,
  users_data: array7(valiObjectUserShortSchema)
});
var valiResponseImHistoryGetSchema = object9({
  messages: array7(valiObjectMessageSchema),
  sync: valiObjectSyncSchema,
  users_data: array7(valiObjectUserShortSchema)
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
import * as v10 from "valibot";
var valiCollectionSchema = v10.object({
  collection_id: v10.number(),
  title: v10.string()
});
var valiThingTypeSchema = v10.object({
  id: v10.number(),
  title: v10.string()
});
var valiQualitySchema = v10.object({
  id: v10.number(),
  title: v10.string(),
  coeff_rent: v10.number()
});
var valiEquippedArraySchema = v10.object({
  item_ids_equipped: v10.optional(v10.array(v10.number()))
});
var valiEquippedTreeSchema = v10.object({
  equipped: v10.optional(v10.object({
    game: v10.record(v10.string(), v10.object({
      cards: v10.record(v10.string(), v10.array(v10.number())),
      generator: v10.number(),
      joke: v10.number()
    }))
  }))
});
var valiResponseInventoryCraftSchema = v10.object({
  item: valiObjectItemSchema
});
var valiResponseInventoryGetBaseSchema = v10.object({
  count: v10.number(),
  collections: v10.array(valiCollectionSchema),
  items: v10.array(valiObjectItemSchema)
});
var valiResponseInventoryGetLegacySchema = v10.object({
  count: v10.number(),
  collections: v10.array(valiCollectionSchema),
  things: v10.array(valiObjectThingSchema),
  thing_types: v10.optional(v10.array(valiThingTypeSchema)),
  qualities: v10.optional(v10.array(valiQualitySchema))
});
var valiResponseInventoryGetWithUserSchema = v10.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserSchema = v10.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithEquippedArraySchema = v10.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetWithEquippedTreeSchema = v10.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetWithUserAndEquippedArraySchema = v10.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithUserAndEquippedTreeSchema = v10.object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithEquippedArraySchema = v10.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetLegacyWithEquippedTreeSchema = v10.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = v10.object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = v10.object({
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

// src/valibot/trades.ts
import {
  array as array9,
  nullable as nullable2,
  number as number11,
  object as object11,
  optional as optional8
} from "valibot";
var valiObjectTradeIdSchema = object11({
  trade_id: number11()
});
var valiObjectTradeSideSchema = object11({
  user_id: number11(),
  item_ids: array9(valiObjectItemSchema)
});
var valiObjectTradeSchema = object11({
  create_time: number11(),
  reaction_time: nullable2(number11()),
  status: number11(),
  trade_id: number11(),
  things_from: array9(valiObjectThingSchema),
  things_to: array9(valiObjectThingSchema),
  user_id_from: number11(),
  user_id_to: number11()
});
var valiObjectNewTradeSchema = object11({
  trade_id: number11(),
  status: number11(),
  ts_created: number11(),
  ts_completed: nullable2(number11()),
  initiator: valiObjectTradeSideSchema,
  receiver: valiObjectTradeSideSchema
});
var valiObjectTradeListSchema = object11({
  collections: array9(number11()),
  qualities: array9(number11()),
  item_ids_equipped: optional8(array9(number11())),
  thing_types: array9(number11()),
  trades: array9(valiObjectTradeSchema),
  user_data: array9(valiObjectUserSchema)
});

// src/api/trades.ts
import * as v11 from "valibot";
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
      valiResponseSchema: v11.void()
    });
  }
  decline(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.cancel",
      data: {
        trade_id
      },
      valiResponseSchema: v11.void()
    });
  }
  revoke(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.revoke",
      data: {
        trade_id
      },
      valiResponseSchema: v11.void()
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
import * as v12 from "valibot";
function transformer(value) {
  const result = new Map;
  for (const user of value) {
    result.set(user.user_id ?? user.domain, user);
  }
  return result;
}
var valiApiResponseUsersGetSchema = v12.pipe(v12.array(valiObjectUserSchema), v12.transform(transformer));
var valiApiResponseUsersGetShortSchema = v12.pipe(v12.array(valiObjectUserShortSchema), v12.transform(transformer));
var valiApiResponseUsersGetOneSchema = v12.pipe(v12.array(valiObjectUserSchema), v12.transform((value) => value[0]));
var valiApiResponseUsersGetShortOneSchema = v12.pipe(v12.array(valiObjectUserShortSchema), v12.transform((value) => value[0]));

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

export { valiObjectSessionSchema, valiResponseTotpSessionTokenSchema, M1ApiBase, M1ApiAuth, M1ApiBots, valiObjectItemVariantSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemProtoLegacySchema, valiObjectPropertyTitleSchema, valiObjectCollectionSchema, valiObjectQualitySchema, valiResponseDataSearchItemProtosSchema, M1ApiData, parseWithNotice, maskString, valiObjectActiveUserShortSchema, valiObjectInactiveUserSchema, valiObjectActiveUserSchema, valiObjectUserShortSchema, valiObjectUserSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetWithUserSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, M1ApiFriends, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, M1ApiGchat, valiResponseImSendSchema, valiObjectMessageSchema, valiObjectDialogSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, M1ApiIm, valiResponseInventoryCraftSchema, valiResponseInventoryGetBaseSchema, valiResponseInventoryGetLegacySchema, valiResponseInventoryGetWithUserSchema, valiResponseInventoryGetLegacyWithUserSchema, valiResponseInventoryGetWithEquippedArraySchema, valiResponseInventoryGetWithEquippedTreeSchema, valiResponseInventoryGetWithUserAndEquippedArraySchema, valiResponseInventoryGetWithUserAndEquippedTreeSchema, valiResponseInventoryGetLegacyWithEquippedArraySchema, valiResponseInventoryGetLegacyWithEquippedTreeSchema, valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema, valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema, M1ApiInventory, valiObjectTradeIdSchema, valiObjectTradeSchema, valiObjectNewTradeSchema, valiObjectTradeListSchema, M1ApiTrades, M1ApiUsers };
