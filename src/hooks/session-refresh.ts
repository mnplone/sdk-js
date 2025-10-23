/* eslint-disable @typescript-eslint/no-invalid-this */

import type { M1ApiResponseHook } from '../hooks.js';

/**
 * Refresh hook.
 * @param options Request options.
 * @param data Request data.
 * @returns New access token and refresh token.
 */
// eslint-disable-next-line func-style
export const sessionRefreshHook: M1ApiResponseHook = async function (options, data) {
	// eslint-disable-next-line no-console
	console.log('refresh_hook', options, data);

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
			access_token: refresh_response.data.access_token,
		},
	};

	this.options.access_token = refresh_response.data.access_token;

	if (refresh_response.data.refresh_token) {
		this.options.refresh_token = refresh_response.data.refresh_token;
	}

	return new_options;
};
