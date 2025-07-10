import {
	type InferOutput,
	number,
	object,
	optional,
	string,
} from 'valibot';

export const valiObjectPropertyTitleSchema = object({
	id: number(),
	title: string(),
});
export type ObjectPropertyTitle = InferOutput<typeof valiObjectPropertyTitleSchema>;

export const valiObjectCollectionSchema = object({
	collection_id: number(),
	id: optional(
		number(),
	),
	title: string(),
});
export type ObjectCollection = InferOutput<typeof valiObjectCollectionSchema>;

export const valiObjectQualitySchema = object({
	coeff_rent: number(),
	color: string(),
	...valiObjectPropertyTitleSchema.entries,
});
export type ObjectQuality = InferOutput<typeof valiObjectQualitySchema>;
