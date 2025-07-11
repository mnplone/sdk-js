import { ah as M1ApiResponseHook } from './auth-DO_v0hSB.js';
export { ai as M1 } from './auth-DO_v0hSB.js';
import '@extws/client';
import 'valibot';
import 'type-fest';

/**
 * Refresh hook.
 * @param options Request options.
 * @param data Request data.
 * @returns New access token and refresh token.
 */
declare const sessionRefreshHook: M1ApiResponseHook;

export { sessionRefreshHook };
