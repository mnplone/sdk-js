import {
	type InferOutput,
	array,
	transform,
	pipe,
	number,
	object,
	optional,
	string,
} from 'valibot';
import { valiObjectItemProtoSchema } from './items.js';

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

export const valiResponseDataSearchItemProtosSchema = pipe(
	object({
		item_protos: array(valiObjectItemProtoSchema),
		collections: array(valiObjectCollectionSchema),
	}),
	transform((value) => {
		return {
			item_protos: new Map(
				value.item_protos.map((item_proto) => [
					item_proto.item_proto_id,
					item_proto,
				]),
			),
			collections: new Map(
				value.collections.map((collection) => [
					collection.collection_id,
					collection,
				]),
			),
		};
	}),
);

export type ResponseDataSearchItemProtos = InferOutput<typeof valiResponseDataSearchItemProtosSchema>;
