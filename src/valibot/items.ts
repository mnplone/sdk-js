import * as v from 'valibot';
import {
	bitSchema,
	positiveNumberSchema,
	nonNegativeNumberSchema,
	nonEmptyStringSchema,
} from './common.ts';

export const itemVariantSchema = v.object({
	id: positiveNumberSchema,
	is_default: v.optional(bitSchema),
	is_selected: v.optional(bitSchema),
	is_unlocked: v.optional(bitSchema),
	image: v.optional(nonEmptyStringSchema),
	description: v.optional(nonEmptyStringSchema),
	unlock: v.optional(
		v.object({
			moneybox: v.optional(nonNegativeNumberSchema),
			buy_tokens_sp: v.optional(nonNegativeNumberSchema),
			buy_tokens_cmpt: v.optional(nonNegativeNumberSchema),
		}),
	),
});

export const thingPrototypeSchema = v.object({
	thing_prototype_id: positiveNumberSchema,
	thing_prototype_status: v.union([
		v.literal(0),
		v.literal(1),
	]),
	thing_type: v.pipe(
		v.number(),
		v.minValue(0),
		v.maxValue(9),
	),
	image: nonEmptyStringSchema,
	title: nonEmptyStringSchema,
	description: v.string(),
	group: v.optional(
		v.pipe(
			v.number(),
			v.minValue(0),
			v.maxValue(9),
		),
	),
	quality: v.pipe(
		v.number(),
		v.minValue(0),
		v.maxValue(5),
	),
	collection: v.optional(nonNegativeNumberSchema),
	twin_thing_prototype_id: v.optional(
		v.array(positiveNumberSchema),
	),
	delete_price: v.optional(nonNegativeNumberSchema),
	can_be_upgraded: v.optional(bitSchema),
	buy_cost: v.optional(nonNegativeNumberSchema),
	key: v.optional(positiveNumberSchema),
	cases: v.optional(
		v.array(positiveNumberSchema),
	),
	drop: v.optional(
		v.object({
			thing_prototype_id: positiveNumberSchema,
			hidden: v.optional(
				v.boolean(),
			),
		}),
	),
	variants: v.optional(
		v.array(itemVariantSchema),
	),
});

export const thingSchema = v.object({
	...thingPrototypeSchema.entries,
	thing_id: positiveNumberSchema,
	user_id: positiveNumberSchema,
	owned_time: positiveNumberSchema,
	can_give: v.optional(
		v.union([
			positiveNumberSchema,
			v.literal(-1),
		]),
	),
	can_sell: v.optional(
		v.union([
			positiveNumberSchema,
			v.literal(-1),
		]),
	),
	souvenir: v.optional(
		v.string(),
	),
	autograph: v.optional(
		v.object({
			user_id: positiveNumberSchema,
			text: v.optional(
				v.string(),
			),
		}),
	),
	moneybox: v.optional(
		v.union([
			v.object({
				transactions: nonNegativeNumberSchema,
				money: nonNegativeNumberSchema,
			}),
			v.object({
				numbers: v.array(nonNegativeNumberSchema),
			}),
			v.object({
				count: nonNegativeNumberSchema,
			}),
		]),
	),
	uses_left: v.optional(positiveNumberSchema),
	uses_origin: v.optional(positiveNumberSchema),
	variants: v.optional(itemVariantSchema),
});

export const itemProtoSchema = v.object({
	item_proto_id: positiveNumberSchema,
	item_proto_status: v.union([
		v.literal(0),
		v.literal(1),
	]),
	type: v.pipe(
		v.number(),
		v.minValue(0),
		v.maxValue(9),
	),
	image: v.pipe(
		v.string(),
		v.minLength(1),
	),
	title: nonEmptyStringSchema,
	description: v.string(),
	quality_id: v.pipe(
		v.number(),
		v.minValue(0),
		v.maxValue(5),
	),
	moneybox: v.optional(bitSchema),
	variants: v.optional(
		v.array(itemVariantSchema),
	),
	monopoly_id: v.optional(
		v.pipe(
			v.number(),
			v.minValue(0),
			v.maxValue(9),
		),
	),
	sticker_group_id: v.optional(nonNegativeNumberSchema),
	collection_id: v.optional(positiveNumberSchema),
	twin_item_proto_ids: v.optional(
		v.array(positiveNumberSchema),
	),
	prices: v.optional(
		v.object({
			buy: v.optional(
				v.union([
					nonNegativeNumberSchema,
					v.record(
						nonEmptyStringSchema,
						nonNegativeNumberSchema,
					),
				]),
			),
			quick_sell: v.optional(nonNegativeNumberSchema),
		}),
	),
	key_item_proto_id: v.optional(positiveNumberSchema),
	case_item_proto_ids: v.optional(
		v.array(positiveNumberSchema),
	),
	drop: v.optional(
		v.record(
			nonEmptyStringSchema,
			v.unknown(),
		),
	),
	can_craft: v.optional(bitSchema),
});

const itemShortSchema = v.object({
	item_id: positiveNumberSchema,
	item_ids: v.optional(
		v.array(positiveNumberSchema),
	),
	ts_owned: positiveNumberSchema,
	ts_can_trade: v.optional(
		v.union([
			positiveNumberSchema,
			v.literal(-1),
		]),
	),
	ts_can_sell: v.optional(
		v.union([
			positiveNumberSchema,
			v.literal(-1),
		]),
	),
	souvenir: v.optional(nonEmptyStringSchema),
	autograph: v.optional(
		v.object({
			user_id: positiveNumberSchema,
			text: v.optional(nonEmptyStringSchema),
		}),
	),
	moneybox: v.optional(
		v.record(
			nonEmptyStringSchema,
			v.unknown(),
		),
	),
	seed: v.optional(nonEmptyStringSchema),
	variants: v.optional(
		v.array(itemVariantSchema),
	),
	xp_boost: v.optional(positiveNumberSchema),
});

export const itemSchema = v.object({
	...itemShortSchema.entries,
	can_delete: v.optional(bitSchema),
	previous_owners_user_ids: v.optional(
		v.array(positiveNumberSchema),
	),
	uses: v.optional(
		v.object({
			left: positiveNumberSchema,
			origin: v.optional(positiveNumberSchema),
		}),
	),
});

export type ThingPrototype = v.InferOutput<typeof thingPrototypeSchema>;
export type Thing = v.InferOutput<typeof thingSchema>;
export type ItemProto = v.InferOutput<typeof itemProtoSchema>;
export type Item = v.InferOutput<typeof itemSchema>;
export type ItemShort = v.InferOutput<typeof itemShortSchema>;
export type ItemVariant = v.InferOutput<typeof itemVariantSchema>;
