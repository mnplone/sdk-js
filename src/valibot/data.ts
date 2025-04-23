import {
	array,
	InferOutput,
	number,
	object,
	string,
} from 'valibot';

export const valiObjectPropertyTitleSchema = object({
	id: number(),
	title: string(),
});

export const valiObjectQualitySchema = object({
	coeff_rent: number(),
	color: string(),
	...valiObjectPropertyTitleSchema.entries,
});

export type ObjectQuality = InferOutput<typeof valiObjectQualitySchema>;
export type ObjectPropertyTitle = InferOutput<typeof valiObjectPropertyTitleSchema>;
