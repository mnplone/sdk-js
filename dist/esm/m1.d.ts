import { ExtWSClient } from '@extws/client';
import { type InferOutput } from 'valibot';
import { M1ApiData } from './api/data.js';
import { M1ApiUsers } from './api/users.js';
import { M1ApiAuth } from './api/auth.js';
import { type ValiBaseSchema } from './types.js';
type M1Options = {
    hostname?: string;
    access_token?: string;
    refresh_token?: string;
    websocket?: {
        subs?: string;
    };
    headers?: Record<string, string>;
};
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
export declare class M1 {
    options: M1Options;
    ws: ExtWSClient | null;
    users: M1ApiUsers;
    data: M1ApiData;
    auth: M1ApiAuth;
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
    callMethod<const ValiResponseSchema extends ValiBaseSchema, const ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined>(options: {
        http_method: 'GET' | 'POST';
        api_method: string;
        data?: Record<string, string | number | undefined | null>;
        valiResponseSchema: ValiResponseSchema;
        valiErrorDataSchema?: ValiErrorDataSchema;
    }): Promise<{
        success: true;
        data: InferOutput<ValiResponseSchema>;
    } | {
        success: false;
        code: number;
        description?: string;
        data: ValiErrorDataSchema extends undefined ? never : InferOutput<Exclude<ValiErrorDataSchema, undefined>>;
    }>;
}
export {};
