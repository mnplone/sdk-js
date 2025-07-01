import { type parse } from 'valibot';

export type ValiBaseSchema = Parameters<typeof parse>[0];

export type ApiResponse<DR, DE = never> = {
	success: true,
	data: DR,
} | {
	success: false,
	code: number,
	description?: string,
	data: DE,
};
