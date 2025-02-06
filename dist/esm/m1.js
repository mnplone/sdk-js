import { ExtWSClient } from '@extws/client';
import { getDotPath, minValue, never, number, object, optional, parse, pipe, safeParse, string, } from 'valibot';
import { M1ApiUsers } from './api/users.js';
/**
 * Parses value with schema like valibot, but prints issue paths.
 * @param schema Valibot schema.
 * @param value Value to parse.
 * @returns Parsed value.
 */
function parseWithNotice(schema, value) {
    const result = safeParse(schema, value);
    if (result.success) {
        return result.output;
    }
    for (const issue of result.issues) {
        // console.error('issue', issue);
        console.error(`Valibot found an issue at ${getDotPath(issue)}`);
    }
    throw new TypeError('Valibot found an issues.');
}
/**
 * @class M1
 * @classdesc A class to interact with Monopoly One API
 * @param options - The options to use
 * @param options.access_token - Access token
 * @param options.refresh_token - Refresh token
 * @param options.polling - Connect to WebSocket
 * @param options.subs - Websocket subscriptions
 * @param options.headers - Headers
 */
export class M1 {
    options;
    ws = null;
    users = new M1ApiUsers(this);
    constructor(options) {
        this.options = {
            hostname: globalThis.location?.hostname ?? 'monopoly-one.com',
            ...options,
        };
        const { websocket } = this.options;
        if (websocket) {
            const { access_token, headers, } = this.options;
            const ws_url = new URL('/ws', `wss://${this.options.hostname}`);
            if (access_token !== undefined) {
                ws_url.searchParams.set('access_token', access_token);
            }
            if (typeof websocket.subs === 'string') {
                ws_url.searchParams.set('subs', websocket.subs);
            }
            this.ws = new ExtWSClient(ws_url, {
                connect: false,
            });
            if (headers) {
                this.ws.headers = headers;
            }
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
            access_token: this.options.access_token,
        };
        if (options.http_method === 'GET') {
            for (const [key, value] of Object.entries(request_data)) {
                if (typeof value === 'string') {
                    url.searchParams.set(key, value);
                }
            }
        }
        else {
            request_headers['Content-Type'] = 'application/json';
            body = JSON.stringify(request_data);
        }
        const response = await fetch(url, {
            method: options.http_method,
            headers: request_headers,
            body,
        });
        const response_data = await response.json();
        const { code } = parse(object({
            code: pipe(number(), minValue(0)),
        }), response_data);
        if (code === 0) {
            const { data } = parseWithNotice(object({
                data: options.valiResponseSchema,
            }), response_data);
            return {
                success: true,
                data,
            };
        }
        const { description, data, } = parse(object({
            description: optional(string()),
            data: optional(options.valiErrorDataSchema ?? never()),
        }), response_data);
        return {
            success: false,
            code,
            description,
            data,
        };
    }
}
