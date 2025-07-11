import * as v from 'valibot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValiBaseSchema = v.BaseSchema<any, any, any>;
// export type ValiBaseSchema = Parameters<typeof v.parse>[0];

export type ApiResponse<DR, DE = never> = {
	success: true,
	data: DR,
} | {
	success: false,
	code: number,
	description?: string,
	data: DE,
};
