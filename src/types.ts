import { type BaseSchema } from 'valibot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValiBaseSchema = BaseSchema<any, any, any>;

export type ApiResponse<DR, DE = never> = {
	success: true,
	data: DR,
} | {
	success: false,
	code: number,
	description?: string,
	data: DE,
};
