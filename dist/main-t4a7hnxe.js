// src/api/base.ts
class M1ApiBase {
  baseClient;
  constructor(baseClient) {
    this.baseClient = baseClient;
  }
}

// src/valibot/auth.ts
import {
  number,
  object,
  optional,
  string
} from "valibot";
var valiObjectSessionSchema = object({
  user_id: string(),
  access_token: string(),
  expires_in: number(),
  refresh_token: optional(string())
});
var valiResponseTotpSessionTokenSchema = object({
  totp_session_token: string()
});

// src/api/auth.ts
import { union } from "valibot";
var valiResponseAuthSigninSchema = union([
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
import {
  object as object2,
  number as number2
} from "valibot";
class M1ApiBots extends M1ApiBase {
  create(nick) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "bots.create",
      data: {
        nick
      },
      valiResponseSchema: object2({
        user_id: number2()
      })
    });
  }
  getToken(user_id, ip) {
    const data = {
      user_id
    };
    if (ip !== undefined) {
      data.ip = ip;
    }
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "bots.getToken",
      data,
      valiResponseSchema: valiObjectSessionSchema
    });
  }
}

// src/valibot/items.ts
import {
  array,
  boolean,
  nullable,
  number as number3,
  object as object3,
  optional as optional3,
  picklist as picklist2,
  pipe as pipe2,
  record,
  string as string2,
  transform as transform2,
  union as union2,
  unknown
} from "valibot";

// src/valibot/common.ts
import {
  optional as optional2,
  picklist,
  transform,
  pipe
} from "valibot";
function bit(default_value) {
  return pipe(optional2(picklist([0, 1]), default_value), transform((value) => value === 1));
}

// src/valibot/items.ts
var valiObjectItemVariantSchema = object3({
  id: number3(),
  is_default: bit(0),
  is_selected: bit(0),
  is_unlocked: bit(0),
  image: optional3(string2()),
  description: optional3(string2()),
  unlock: optional3(object3({
    moneybox: optional3(number3()),
    buy_tokens_sp: optional3(number3()),
    buy_tokens_cmpt: optional3(number3())
  }))
});
var valiObjectThingPrototypeSchema = object3({
  thing_prototype_id: number3(),
  thing_prototype_status: number3(),
  thing_type: number3(),
  image: string2(),
  title: string2(),
  description: string2(),
  group: optional3(pipe2(nullable(number3()), transform2((value) => typeof value === "number" ? value : undefined))),
  quality: number3(),
  collection: optional3(number3()),
  twin_thing_prototype_id: optional3(array(number3())),
  delete_price: optional3(nullable(number3())),
  can_be_upgraded: bit(0),
  buy_cost: optional3(number3()),
  key: optional3(number3()),
  cases: optional3(array(number3())),
  drop: optional3(object3({
    thing_prototype_id: number3(),
    hidden: optional3(boolean())
  })),
  variants: optional3(array(valiObjectItemVariantSchema))
});
var valiObjectThingSchema = object3({
  ...valiObjectThingPrototypeSchema.entries,
  thing_id: number3(),
  user_id: number3(),
  owned_time: number3(),
  can_give: optional3(number3()),
  can_sell: optional3(number3()),
  souvenir: optional3(string2()),
  autograph: optional3(object3({
    user_id: number3(),
    text: optional3(string2())
  })),
  moneybox: optional3(union2([
    object3({
      transactions: number3(),
      money: number3()
    }),
    object3({
      numbers: array(number3())
    }),
    object3({
      count: number3()
    })
  ])),
  uses_left: optional3(number3()),
  uses_origin: optional3(number3()),
  variants: optional3(array(valiObjectItemVariantSchema))
});
var valiObjectItemProtoSchema = object3({
  item_proto_id: number3(),
  item_proto_status: optional3(picklist2([0, 1]), 0),
  type: number3(),
  image: string2(),
  title: string2(),
  description: string2(),
  quality_id: number3(),
  moneybox: bit(0),
  variants: optional3(array(valiObjectItemVariantSchema)),
  monopoly_id: optional3(number3()),
  sticker_group_id: optional3(number3()),
  collection_id: optional3(number3()),
  twin_item_proto_ids: optional3(array(number3())),
  prices: optional3(object3({
    buy: optional3(union2([
      number3(),
      record(string2(), number3())
    ])),
    quick_sell: optional3(number3())
  })),
  key_item_proto_id: optional3(number3()),
  case_item_proto_ids: optional3(array(number3())),
  drop: optional3(record(string2(), unknown())),
  can_craft: bit(0)
});
var valiObjectItemShortSchema = object3({
  item_id: number3(),
  item_ids: optional3(array(number3())),
  ts_owned: number3(),
  ts_can_trade: optional3(number3()),
  ts_can_sell: optional3(number3()),
  souvenir: optional3(string2()),
  autograph: optional3(object3({
    user_id: number3(),
    text: optional3(string2())
  })),
  moneybox: optional3(record(string2(), unknown())),
  seed: optional3(string2()),
  variants: optional3(array(valiObjectItemVariantSchema)),
  xp_boost: optional3(number3())
});
var valiObjectItemSchema = object3({
  ...valiObjectItemShortSchema.entries,
  can_delete: bit(0),
  previous_owners_user_ids: optional3(array(number3())),
  uses: optional3(object3({
    left: number3(),
    origin: optional3(number3())
  }))
});
var valiObjectItemProtoLegacySchema = object3({
  ...valiObjectThingPrototypeSchema.entries,
  ...valiObjectItemProtoSchema.entries
});

// src/api/data.ts
import {
  array as array2,
  number as number4,
  object as object4,
  pipe as pipe3,
  string as string3,
  transform as transform3
} from "valibot";
class M1ApiData extends M1ApiBase {
  getItemProtos(item_proto_ids, options) {
    const add_legacy = options?.add_legacy === true;
    const add_metadata = options?.add_metadata !== false;
    const valiCurrentItemProtosSchema = pipe3(array2(add_legacy ? valiObjectItemProtoLegacySchema : valiObjectItemProtoSchema), transform3((value) => new Map(value.map((item_proto) => [
      item_proto.item_proto_id,
      item_proto
    ]))));
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "data.getItemProtos",
      data: {
        item_proto_ids: [...item_proto_ids].join(","),
        add_legacy: Number(add_legacy),
        add_metadata: Number(add_metadata)
      },
      valiResponseSchema: add_metadata ? object4({
        item_protos: valiCurrentItemProtosSchema,
        collections: array2(object4({
          collection_id: number4(),
          title: string3()
        }))
      }) : pipe3(object4({
        item_protos: valiCurrentItemProtosSchema
      }), transform3((value) => value.item_protos))
    });
  }
}

// src/valibot/users.ts
import {
  array as array3,
  object as object5,
  pipe as pipe4,
  number as number5,
  optional as optional4,
  union as union3,
  literal,
  string as string4,
  transform as transform4
} from "valibot";
function transformerBot(value) {
  const {
    bot,
    bot_owner,
    ...value_rest
  } = value;
  return {
    ...value_rest,
    bot: bot ? {
      owner_user_id: bot_owner
    } : null
  };
}
var valiInputUserShortSchema = object5({
  user_id: number5(),
  domain: optional4(string4()),
  approved: bit(0),
  nick: string4(),
  gender: union3([
    literal(0),
    literal(1)
  ]),
  avatar: string4(),
  online: bit(0),
  current_game: optional4(object5({
    gs_id: string4(),
    gs_game_id: string4()
  })),
  rank: optional4(union3([
    object5({
      hidden: literal(1)
    }),
    object5({
      qual: number5()
    }),
    object5({
      expired: literal(1)
    }),
    object5({
      id: number5(),
      pts: number5()
    })
  ])),
  vip: bit(0),
  bot: bit(0),
  bot_owner: optional4(number5()),
  moderator: bit(0)
});
var valiObjectUserShortSchema = pipe4(valiInputUserShortSchema, transform4(transformerBot));
var valiObjectUserSchema = pipe4(object5({
  ...valiInputUserShortSchema.entries,
  nicks_old: array3(string4()),
  profile_cover: optional4(string4()),
  social_vk: optional4(number5()),
  social_discord: optional4(string4()),
  social_twitch: optional4(string4()),
  games: optional4(number5()),
  games_wins: optional4(number5()),
  xp: optional4(number5()),
  xp_level: optional4(number5()),
  badge: optional4(valiObjectThingSchema),
  friendship: optional4(number5()),
  muted: bit(0),
  mfp_ban_history: optional4(union3([
    object5({
      type: literal(0),
      count: number5(),
      ts_last_ban: number5(),
      ts_end: optional4(number5())
    }),
    object5({
      type: literal(1),
      ts_end: number5()
    })
  ]))
}), transform4(transformerBot), transform4((value) => {
  const {
    games,
    games_wins,
    ...value_rest
  } = value;
  return {
    ...value_rest,
    games: {
      total: games,
      won: games_wins
    }
  };
}));

// src/valibot/friends.ts
import {
  number as number6,
  object as object6,
  array as array4
} from "valibot";
var valiResponseFriendsGetBaseSchema = object6({
  count: number6(),
  friends: array4(valiObjectUserSchema)
});
var valiResponseFriendsGetWithUserSchema = object6({
  ...valiResponseFriendsGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseFriendsGetShortSchema = object6({
  count: number6(),
  friends: array4(valiObjectUserShortSchema)
});
var valiResponseFriendsGetShortWithUserSchema = object6({
  ...valiResponseFriendsGetShortSchema.entries,
  user: valiObjectUserShortSchema
});
var valiResponseFriendsGetRequestsSchema = object6({
  count: number6(),
  requests: array4(valiObjectUserSchema)
});
var valiResponseFriendsGetRequestsShortSchema = object6({
  count: number6(),
  requests: array4(valiObjectUserShortSchema)
});

// src/api/friends.ts
import { void as voidSchema } from "valibot";

// src/utils.ts
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isIterableIterator(value) {
  return value !== null && typeof value === "object" && typeof Symbol.iterator in value && typeof value[Symbol.iterator] === "function" && typeof value.next === "function";
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
      valiResponseSchema: voidSchema()
    });
  }
  delete(user_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.delete",
      data: {
        user_id
      },
      valiResponseSchema: voidSchema()
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
    const is_short = options?.is_short ?? false;
    const add_user = options?.add_user ?? false;
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "friends.get",
      data: {
        user_id,
        online: options?.online ? 1 : undefined,
        add_user: add_user ? 1 : undefined,
        type: is_short ? "short" : undefined,
        offset: options?.offset,
        count: options?.count
      },
      valiResponseSchema: options?.is_short ? options?.add_user ? valiResponseFriendsGetShortWithUserSchema : valiResponseFriendsGetShortSchema : options?.add_user ? valiResponseFriendsGetWithUserSchema : valiResponseFriendsGetBaseSchema
    });
  }
}

// src/valibot/gchat.ts
import {
  array as array5,
  boolean as boolean2,
  literal as literal2,
  intersect,
  number as number7,
  object as object7,
  optional as optional5,
  string as string5,
  union as union4
} from "valibot";
var valiObjectGchatMessageBaseSchema = object7({
  msg_id: string5(),
  ts: number7(),
  user_id: number7()
});
var valiObjectGchatMessageAdditionalDataSchema = union4([
  object7({
    type: literal2(1),
    text: string5(),
    is_public: optional5(bit(1)),
    user_ids_mentioned: optional5(array5(number7()))
  }),
  object7({
    type: literal2(2),
    case_item_proto_id: number7(),
    drop_item_proto_id: number7()
  }),
  object7({
    type: literal2(3),
    user_id_receiver: number7(),
    item_proto_id: number7()
  }),
  object7({
    type: literal2(4),
    item_proto_ids: array5(number7())
  })
]);
var valiObjectGchatMessageSchema = intersect([
  valiObjectGchatMessageBaseSchema,
  valiObjectGchatMessageAdditionalDataSchema
]);
var valiResponseGchatGetSchema = object7({
  messages: array5(valiObjectGchatMessageSchema),
  status: object7({
    closed: boolean2(),
    slowmode: boolean2(),
    emoteonly: boolean2()
  }),
  users: array5(valiObjectUserShortSchema),
  item_protos: array5(valiObjectItemProtoSchema)
});
var valiResponseGchatSendSchema = object7({
  msg_id: string5()
});

// src/api/gchat.ts
class M1ApiGchat extends M1ApiBase {
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
  array as array6,
  null_,
  number as number8,
  object as object8,
  string as string6,
  union as union5
} from "valibot";
var valiResponseImSendSchema = object8({
  msg_id: number8()
});
var valiObjectMessageSchema = object8({
  msg_id: number8(),
  is_read: number8(),
  text: string6(),
  ts_created: number8(),
  type: number8(),
  user_id: number8()
});
var valiObjectSyncSchema = object8({
  events: array6(object8({
    chain: array6(union5([number8(), null_()])),
    data: object8({
      type: number8(),
      msg_id: number8(),
      dialog: object8({
        user_id: number8()
      })
    })
  })),
  dialogs: array6(object8({
    user_id: number8(),
    new_counter: number8()
  })),
  messages: array6(valiObjectMessageSchema)
});
var valiObjectDialogSchema = object8({
  message: valiObjectMessageSchema,
  new_counter: number8(),
  user_id: number8()
});
var valiResponseImDialogsGetSchema = object8({
  dialogs: array6(valiObjectDialogSchema),
  sync: valiObjectSyncSchema,
  users_data: array6(valiObjectUserShortSchema)
});
var valiResponseImHistoryGetSchema = object8({
  messages: array6(valiObjectMessageSchema),
  sync: valiObjectSyncSchema,
  users_data: array6(valiObjectUserShortSchema)
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
  getHistory(arg0, arg1) {
    const data = {};
    if (typeof arg0 === "number") {
      data.user_id = arg0;
      if (isRecord(arg1)) {
        if (arg1.id_last) {
          data.id_last = arg1.id_last;
        }
        if (arg1.offset) {
          data.offset = arg1.offset;
        }
        if (arg1.count) {
          data.count = arg1.count;
        }
      }
    } else if (isRecord(arg0)) {
      data.user_id = arg0.user_id;
      if (arg0.id_last) {
        data.id_last = arg0.id_last;
      }
      if (arg0.offset) {
        data.offset = arg0.offset;
      }
      if (arg0.count) {
        data.count = arg0.count;
      }
    } else {
      throw new TypeError("Invalid parameters");
    }
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "im.historyGet",
      data,
      valiResponseSchema: valiResponseImHistoryGetSchema
    });
  }
  sync(id_last) {
    if (!this.baseClient.ws || !this.baseClient.ws.is_connected) {
      throw new Error("WebSocket is not connected");
    }
    this.baseClient.ws.emit("api", [
      "im.sync",
      { id_last }
    ]);
  }
}

// src/valibot/trades.ts
import {
  array as array7,
  nullable as nullable2,
  number as number9,
  object as object9,
  optional as optional6
} from "valibot";
var valiObjectTradeIdSchema = object9({
  trade_id: number9()
});
var valiObjectTradeSideSchema = object9({
  user_id: number9(),
  item_ids: array7(valiObjectItemSchema)
});
var valiObjectTradeSchema = object9({
  create_time: number9(),
  reaction_time: nullable2(number9()),
  status: number9(),
  trade_id: number9(),
  things_from: array7(valiObjectThingSchema),
  things_to: array7(valiObjectThingSchema),
  user_id_from: number9(),
  user_id_to: number9()
});
var valiObjectNewTradeSchema = object9({
  trade_id: number9(),
  status: number9(),
  ts_created: number9(),
  ts_completed: nullable2(number9()),
  initiator: valiObjectTradeSideSchema,
  receiver: valiObjectTradeSideSchema
});
var valiObjectTradeListSchema = object9({
  collections: array7(number9()),
  qualities: array7(number9()),
  item_ids_equipped: optional6(array7(number9())),
  thing_types: array7(number9()),
  trades: array7(valiObjectTradeSchema),
  user_data: array7(valiObjectUserSchema)
});

// src/api/trades.ts
import { void as voidSchema2 } from "valibot";
class M1ApiTrades extends M1ApiBase {
  create(options) {
    if (options.item_ids_request === undefined && options.item_ids_offer === undefined) {
      throw new Error("One of item_ids_to or item_ids_from is required");
    }
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
      valiResponseSchema: voidSchema2()
    });
  }
  decline(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.cancel",
      data: {
        trade_id
      },
      valiResponseSchema: voidSchema2()
    });
  }
  revoke(trade_id) {
    return this.baseClient.callMethod({
      http_method: "POST",
      api_method: "trades.revoke",
      data: {
        trade_id
      },
      valiResponseSchema: voidSchema2()
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
      if (arg0.user_id !== undefined) {
        data.user_id = arg0.user_id;
      }
      data.count = arg0.count;
      data.offset = arg0.offset;
    }
    if (data.user_id !== undefined) {
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
import {
  array as array8,
  pipe as pipe5,
  transform as transform5
} from "valibot";
function transformer(value) {
  const result = new Map;
  for (const user of value) {
    result.set(user.user_id, user);
  }
  return result;
}
var valiApiResponseUsersGetSchema = pipe5(array8(valiObjectUserSchema), transform5(transformer));
var valiApiResponseUsersGetShortSchema = pipe5(array8(valiObjectUserShortSchema), transform5(transformer));
var valiApiResponseUsersGetOneSchema = pipe5(array8(valiObjectUserSchema), transform5((value) => value[0]));
var valiApiResponseUsersGetShortOneSchema = pipe5(array8(valiObjectUserShortSchema), transform5((value) => value[0]));

class M1ApiUsers extends M1ApiBase {
  get(arg0, arg1) {
    let user_ids = null;
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
    if (user_ids) {
      data.user_ids = user_ids.join(",");
    }
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "users.get",
      data,
      valiResponseSchema: data?.type === "short" ? is_multiple_users ? valiApiResponseUsersGetShortSchema : valiApiResponseUsersGetShortOneSchema : is_multiple_users ? valiApiResponseUsersGetSchema : valiApiResponseUsersGetOneSchema
    });
  }
}

export { M1ApiBase, valiObjectSessionSchema, valiResponseTotpSessionTokenSchema, M1ApiAuth, M1ApiBots, valiObjectItemVariantSchema, valiObjectThingPrototypeSchema, valiObjectThingSchema, valiObjectItemProtoSchema, valiObjectItemSchema, valiObjectItemProtoLegacySchema, M1ApiData, isRecord, valiObjectUserShortSchema, valiObjectUserSchema, valiResponseFriendsGetBaseSchema, valiResponseFriendsGetWithUserSchema, valiResponseFriendsGetShortSchema, valiResponseFriendsGetShortWithUserSchema, valiResponseFriendsGetRequestsSchema, valiResponseFriendsGetRequestsShortSchema, M1ApiFriends, valiObjectGchatMessageBaseSchema, valiObjectGchatMessageAdditionalDataSchema, valiObjectGchatMessageSchema, valiResponseGchatGetSchema, valiResponseGchatSendSchema, M1ApiGchat, valiResponseImSendSchema, valiObjectMessageSchema, valiObjectDialogSchema, valiResponseImDialogsGetSchema, valiResponseImHistoryGetSchema, M1ApiIm, valiObjectTradeIdSchema, valiObjectTradeSchema, valiObjectNewTradeSchema, valiObjectTradeListSchema, M1ApiTrades, M1ApiUsers };
