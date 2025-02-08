import {
	array,
	boolean,
	InferOutput,
	literal,
	nullable,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
	union,
	record,
	unknown,
} from 'valibot';
import { bit } from './common.js';

export const valiObjectItemVariantSchema = object({
	id: number(),
	is_default: bit(0),
	is_selected: bit(0),
	is_unlocked: bit(0),
	image: optional(
		string(),
	),
	description: optional(
		string(),
	),
	unlock: optional(
		object({
			moneybox: optional(
				number(),
			),
			buy_tokens_sp: optional(
				number(),
			),
			buy_tokens_cmpt: optional(
				number(),
			),
		}),
	),
});

export const valiObjectThingPrototypeSchema = object({
	thing_prototype_id: number(),
	thing_prototype_status: union([
		literal(0),
		literal(1),
	]),
	thing_type: number(),
	image: string(),
	title: string(),
	description: string(),
	group: optional(
		pipe(
			nullable(number()),
			transform((value) => (typeof value === 'number' ? value : undefined)),
		),
	),
	quality: number(),
	collection: optional(
		number(),
	),
	twin_thing_prototype_id: optional(
		array(number()),
	),
	delete_price: optional(
		number(),
	),
	can_be_upgraded: bit(0),
	buy_cost: optional(
		number(),
	),
	key: optional(
		number(),
	),
	cases: optional(
		array(number()),
	),
	drop: optional(
		object({
			thing_prototype_id: number(),
			hidden: optional(
				boolean(),
			),
		}),
	),
	variants: optional(
		array(valiObjectItemVariantSchema),
	),
});

export const valiObjectThingSchema = object({
	...valiObjectThingPrototypeSchema.entries,
	thing_id: number(),
	user_id: number(),
	owned_time: number(),
	can_give: optional(
		number(),
	),
	can_sell: optional(
		number(),
	),
	souvenir: optional(
		string(),
	),
	autograph: optional(
		object({
			user_id: number(),
			text: optional(
				string(),
			),
		}),
	),
	moneybox: optional(
		union([
			object({
				transactions: number(),
				money: number(),
			}),
			object({
				numbers: array(number()),
			}),
			object({
				count: number(),
			}),
		]),
	),
	uses_left: optional(number()),
	uses_origin: optional(number()),
	variants: optional(
		array(valiObjectItemVariantSchema),
	),
});

export const valiObjectItemProtoSchema = object({
	item_proto_id: number(),
	item_proto_status: union([
		literal(0),
		literal(1),
	]),
	type: number(),
	image: string(),
	title: string(),
	description: string(),
	quality_id: number(),
	moneybox: bit(0),
	variants: optional(
		array(valiObjectItemVariantSchema),
	),
	monopoly_id: optional(
		number(),
	),
	sticker_group_id: optional(
		number(),
	),
	collection_id: optional(
		number(),
	),
	twin_item_proto_ids: optional(
		array(number()),
	),
	prices: optional(
		object({
			buy: optional(
				union([
					number(),
					record(
						string(),
						number(),
					),
				]),
			),
			quick_sell: optional(number()),
		}),
	),
	key_item_proto_id: optional(number()),
	case_item_proto_ids: optional(
		array(number()),
	),
	drop: optional(
		record(
			string(),
			unknown(),
		),
	),
	can_craft: bit(0),
});

const valiObjectItemShortSchema = object({
	item_id: number(),
	item_ids: optional(
		array(number()),
	),
	ts_owned: number(),
	ts_can_trade: optional(
		number(),
	),
	ts_can_sell: optional(
		number(),
	),
	souvenir: optional(
		string(),
	),
	autograph: optional(
		object({
			user_id: number(),
			text: optional(
				string(),
			),
		}),
	),
	moneybox: optional(
		record(
			string(),
			unknown(),
		),
	),
	seed: optional(
		string(),
	),
	variants: optional(
		array(valiObjectItemVariantSchema),
	),
	xp_boost: optional(
		number(),
	),
});

export const valiObjectItemSchema = object({
	...valiObjectItemShortSchema.entries,
	can_delete: bit(0),
	previous_owners_user_ids: optional(
		array(number()),
	),
	uses: optional(
		object({
			left: number(),
			origin: optional(number()),
		}),
	),
});

export type ThingPrototype = InferOutput<typeof valiObjectThingPrototypeSchema>;
export type Thing = InferOutput<typeof valiObjectThingSchema>;
export type ItemProto = InferOutput<typeof valiObjectItemProtoSchema>;
export type Item = InferOutput<typeof valiObjectItemSchema>;
export type ItemShort = InferOutput<typeof valiObjectItemShortSchema>;
export type ItemVariant = InferOutput<typeof valiObjectItemVariantSchema>;
