import {
	type CallMethodOptions,
	type M1,
} from '../m1.js';
import { type ValiBaseSchema } from '../types.js';

/**
 * Refresh hook.
 * @this { M1 }
 * @param options Request options.
 * @param data Request data.
 * @returns New access token and refresh token.
 */
export async function refresh_hook<
	ValiResponseSchema extends ValiBaseSchema,
	ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
>(
	this: M1,
	options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>,
	data: Record<string, unknown>,
) {
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
}
