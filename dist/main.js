import {
  M1ApiAuth,
  M1ApiBots,
  M1ApiData,
  M1ApiFriends,
  M1ApiGchat,
  M1ApiIm,
  M1ApiInventory,
  M1ApiOauth,
  M1ApiTrades,
  M1ApiUsers,
  maskString,
  parseWithNotice
} from "./main-v5k8ekbb.js";

// src/hooks/session-refresh.ts
var sessionRefreshHook = async function(options, data) {
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
};
// src/m1.ts
import { ExtWSClient } from "@extws/client";
import * as v from "valibot";
var IS_TEST = "process" in globalThis && globalThis.process.env.NODE_ENV === "test";
var IS_DEBUG = "process" in globalThis && globalThis.process.env.DEBUG === "1" || "localStorage" in globalThis && globalThis.localStorage.getItem("m1-sdk-debug") === "1";
var apiResponseParser = v.parser(v.object({
  code: v.optional(v.pipe(v.number(), v.minValue(0)), 0)
}));

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
  oauth = new M1ApiOauth(this);
  trades = new M1ApiTrades(this);
  users = new M1ApiUsers(this);
  constructor(options) {
    this.options = {
      hostname: globalThis.location?.hostname ?? "monopoly-one.com",
      ...options
    };
    const { websocket } = this.options;
    if (websocket) {
      const { access_token, headers } = this.options;
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
    const request_options = {
      method: options.http_method,
      api_method: options.api_method,
      data: request_data
    };
    if (request_options.data.access_token && typeof request_options.data.access_token === "string") {
      request_options.data.access_token = maskString(request_options.data.access_token);
    }
    const response = await fetch(url, request_init);
    const response_data = await response.json();
    if (IS_DEBUG) {
      console.info("response_data:", response_data);
    }
    if (IS_TEST && response_data.success === false) {
      console.dir(response_data, { depth: null });
    }
    const { code } = apiResponseParser(response_data);
    if (IS_DEBUG) {
      console.info("code:", code);
    }
    if (code === 0) {
      const { data: data2 } = parseWithNotice(v.pipe(v.object({
        data: v.optional(options.valiResponseSchema),
        result: v.optional(options.valiResponseSchema)
      }), v.check((input) => !(input.data && input.result) || input.data === undefined && input.result === undefined), v.transform((input) => {
        return {
          data: input.data ?? input.result
        };
      })), response_data);
      return {
        success: true,
        data: data2,
        request: request_options
      };
    }
    const { description, data } = v.parse(v.object({
      description: v.optional(v.string()),
      data: v.optional(options.valiErrorDataSchema ?? v.unknown())
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
      data,
      request: request_options
    };
  }
}
export {
  sessionRefreshHook,
  M1
};
