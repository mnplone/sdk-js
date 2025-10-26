import * as v from 'valibot';
import { valiObjectItemProtoSchema } from './items.js';

export const valiObjectPropertyTitleSchema = v.object({
	id: v.number(),
	title: v.string(),
});
export type ObjectPropertyTitle = v.InferOutput<
	typeof valiObjectPropertyTitleSchema
>;

export const valiObjectCollectionSchema = v.object({
	collection_id: v.number(),
	id: v.optional(v.number()),
	title: v.string(),
});
export type ObjectCollection = v.InferOutput<typeof valiObjectCollectionSchema>;

export const valiObjectQualitySchema = v.object({
	coeff_rent: v.number(),
	color: v.string(),
	...valiObjectPropertyTitleSchema.entries,
});
export type ObjectQuality = v.InferOutput<typeof valiObjectQualitySchema>;

export const valiResponseDataSearchItemProtosSchema = v.pipe(
	v.object({
		item_protos: v.array(valiObjectItemProtoSchema),
		collections: v.array(valiObjectCollectionSchema),
	}),
	v.transform((value) => {
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

export type ResponseDataSearchItemProtos = v.InferOutput<
	typeof valiResponseDataSearchItemProtosSchema
>;
