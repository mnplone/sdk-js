import * as v from 'valibot';
import type { RequestOptions } from './m1.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValiBaseSchema = v.BaseSchema<any, any, any>;
// export type ValiBaseSchema = Parameters<typeof v.parse>[0];

export type ApiResponse<DR, DE = never> = {
	success: true,
	data: DR,
	request: RequestOptions,
} | {
	success: false,
	code: number,
	description?: string,
	data: DE,
	request: RequestOptions,
};
