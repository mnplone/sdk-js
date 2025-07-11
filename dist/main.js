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
  isRecord,
  valiObjectItemSchema,
  valiObjectThingSchema,
  valiObjectUserSchema
} from "./main-t4a7hnxe.js";

// src/m1.ts
import { ExtWSClient } from "@extws/client";
import {
  minValue,
  never,
  number as number2,
  object as object2,
  optional as optional2,
  parse,
  pipe,
  safeParse,
  string as string2,
  summarize
} from "valibot";

// src/valibot/inventory.ts
import {
  object,
  string,
  number,
  array,
  optional,
  record
} from "valibot";
var valiCollectionSchema = object({
  collection_id: number(),
  title: string()
});
var valiThingTypeSchema = object({
  id: number(),
  title: string()
});
var valiQualitySchema = object({
  id: number(),
  title: string(),
  coeff_rent: number()
});
var valiEquippedArraySchema = object({
  item_ids_equipped: array(number())
});
var valiEquippedTreeSchema = object({
  equipped: object({
    game: record(string(), object({
      cards: record(string(), array(number())),
      generator: number(),
      joke: number()
    }))
  })
});
var valiResponseInventoryGetBaseSchema = object({
  count: number(),
  collections: array(valiCollectionSchema),
  items: array(valiObjectItemSchema)
});
var valiResponseInventoryGetLegacySchema = object({
  count: number(),
  collections: array(valiCollectionSchema),
  things: array(valiObjectThingSchema),
  thing_types: optional(array(valiThingTypeSchema)),
  qualities: optional(array(valiQualitySchema))
});
var valiResponseInventoryGetWithUserSchema = object({
  ...valiResponseInventoryGetBaseSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserSchema = object({
  ...valiResponseInventoryGetLegacySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithEquippedArraySchema = object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetWithEquippedTreeSchema = object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetWithUserAndEquippedArraySchema = object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetWithUserAndEquippedTreeSchema = object({
  ...valiResponseInventoryGetBaseSchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithEquippedArraySchema = object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries
});
var valiResponseInventoryGetLegacyWithEquippedTreeSchema = object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries
});
var valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedArraySchema.entries,
  user: valiObjectUserSchema
});
var valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = object({
  ...valiResponseInventoryGetLegacySchema.entries,
  ...valiEquippedTreeSchema.entries,
  user: valiObjectUserSchema
});

// src/api/inventory.ts
class M1ApiInventory extends M1ApiBase {
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
      add_legacy: add_legacy ? 1 : undefined,
      add_equipped,
      shrink: options?.shrink ? 1 : undefined
    };
    let valiResponseSchema;
    if (add_legacy) {
      if (add_user) {
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
    } else if (add_user) {
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
    return this.baseClient.callMethod({
      http_method: "GET",
      api_method: "inventory.get",
      data,
      valiResponseSchema
    });
  }
}

// src/hooks/refresh.ts
async function refresh_hook(options, data) {
  console.log("refresh_hook", options, data);
  const { refresh_token } = this.options;
  if (!refresh_token) {
    return;
  }
  const refresh_response = await this.auth.refresh(refresh_token);
  if (refresh_response.success !== true) {
    return;
  }
  const new_options = {
    ...options,
    data: {
      ...options.data,
      access_token: refresh_response.data.access_token
    }
  };
  this.options.access_token = refresh_response.data.access_token;
  if (refresh_response.data.refresh_token) {
    this.options.refresh_token = refresh_response.data.refresh_token;
  }
  return new_options;
}

// src/m1.ts
var default_hooks = {
  1: refresh_hook
};
function parseWithNotice(schema, value) {
  const result = safeParse(schema, value);
  if (result.success) {
    return result.output;
  }
  console.error(summarize(result.issues));
  throw new TypeError("Valibot found issues.");
}

class M1 {
  options;
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
    if ("hooks" in this.options) {
      this.options.hooks = {
        ...default_hooks,
        ...this.options.hooks
      };
    } else {
      this.options.hooks = default_hooks;
    }
    const { websocket } = this.options;
    if (websocket) {
      const {
        access_token,
        headers
      } = this.options;
      const ws_url = new URL("/ws", `wss://${this.options.hostname}`);
      if (access_token) {
        ws_url.searchParams.set("access_token", access_token);
      }
      if (typeof websocket.subs === "string") {
        ws_url.searchParams.set("subs", websocket.subs);
      }
      this.ws = new ExtWSClient(ws_url, {
        connect: false
      });
      if (headers) {
        this.ws.headers = headers instanceof Headers ? headers : new Headers(headers);
      }
      this.ws.connect();
    }
  }
  async callMethod(options) {
    const url = new URL(`/api/${options.api_method}`, `https://${this.options.hostname}`);
    let body;
    const request_headers = new Headers(this.options.headers ?? {});
    const request_data = {
      ...options.data,
      access_token: this.options.access_token
    };
    if (options.http_method === "GET") {
      for (const [key, value] of Object.entries(request_data)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, value);
        }
      }
    } else {
      request_headers.set("Content-Type", "application/json");
      body = JSON.stringify(request_data);
    }
    const request_init = {
      method: options.http_method,
      headers: request_headers
    };
    if (options.http_method !== "GET") {
      request_init.body = body;
    }
    const response = await fetch(url, request_init);
    const response_data = await response.json();
    const { code } = parse(object2({
      code: pipe(number2(), minValue(0))
    }), response_data);
    if (code === 0) {
      const { data: data2 } = parseWithNotice(object2({
        data: options.valiResponseSchema
      }), response_data);
      return {
        success: true,
        data: data2
      };
    }
    const {
      description,
      data
    } = parse(object2({
      description: optional2(string2()),
      data: options.valiErrorDataSchema ?? never()
    }), response_data);
    if (this.options.hooks) {
      const hook = this.options.hooks[code];
      if (hook) {
        const new_request_options = await hook.call(this, options, request_data);
        if (new_request_options) {
          return this.callMethod(new_request_options);
        }
      }
    }
    return {
      success: false,
      code,
      description,
      data
    };
  }
}
export {
  M1
};
