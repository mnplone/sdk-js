import type {
	M1,
	CallMethodOptions,
} from './m1.js';
import type { ValiBaseSchema } from './types.js';

export type M1ApiResponseHook = <
	ValiResponseSchema extends ValiBaseSchema,
	ValiErrorDataSchema extends ValiBaseSchema | undefined = undefined,
>(
	this: M1,
	options: CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema>,
	data: Record<string, unknown>
) => Promise<CallMethodOptions<ValiResponseSchema, ValiErrorDataSchema> | undefined>;

export type M1ApiResponseHooks = Record<number, M1ApiResponseHook>;
