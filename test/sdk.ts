import {
	M1,
	type CallMethodOptions,
} from '../src/m1.js';
import { ValiBaseSchema } from '../src/types.js';

/**
 * Sleep for a given number of milliseconds.
 * @param ms Number of milliseconds to sleep.
 * @returns A promise that resolves after the given number of milliseconds.
 */
function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

/**
 * Refresh hook.
 * @param options Request options.
 * @param data Request data.
 * @returns New access token and refresh token.
 */
async function refresh_hook<
	ValiResponseSchema extends ValiBaseSchema,
	ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
>(
	options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>,
	data: Record<string, unknown>,
) {
	console.log('refresh_hook', options, data); // eslint-disable-line no-console

	await sleep(1000); // типа рефрешим токен
	const new_options = {
		...options,
		data: {
			...options.data,
			access_token: '123', // типа перезаписываем токен
		},
	};

	return new_options;
}

export const sdk = new M1({
	hooks: {
		refresh_hook,
	},
});
