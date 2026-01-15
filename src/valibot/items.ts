import * as v from 'valibot';
import { bit } from './common.js';

export const valiObjectItemVariantSchema = v.object({
	id: v.number(),
	is_default: bit(0),
	is_selected: bit(0),
	is_unlocked: bit(0),
	image: v.optional(v.string()),
	description: v.optional(v.string()),
	unlock: v.optional(
		v.object({
			moneybox: v.optional(v.number()),
			buy_tokens_sp: v.optional(v.number()),
			buy_tokens_cmpt: v.optional(v.number()),
		}),
	),
});
export type ItemVariant = v.InferOutput<typeof valiObjectItemVariantSchema>;

export const valiObjectThingPrototypeSchema = v.object({
	thing_prototype_id: v.number(),
	thing_prototype_status: v.number(),
	thing_type: v.number(),
	image: v.string(),
	title: v.string(),
	description: v.string(),
	group: v.optional(
		v.pipe(
			v.nullable(v.number()),
			v.transform((value) => (typeof value === 'number' ? value : undefined)),
		),
	),
	quality: v.number(),
	collection: v.optional(v.number()),
	twin_thing_prototype_id: v.optional(v.array(v.number())),
	delete_price: v.optional(v.nullable(v.number())),
	can_be_upgraded: bit(0),
	buy_cost: v.optional(v.number()),
	key: v.optional(v.number()),
	cases: v.optional(v.array(v.number())),
	drop: v.optional(
		v.array(
			v.object({
				thing_prototype_id: v.optional(v.number()),
				hidden: v.optional(v.boolean()),
				is_primary: v.optional(v.boolean()),
				is_rare: v.optional(v.number()),
				is_secondary: v.optional(v.number()),
			}),
		),
	),
	variants: v.optional(v.array(valiObjectItemVariantSchema)),
});
export type ThingPrototype = v.InferOutput<
	typeof valiObjectThingPrototypeSchema
>;

export const valiObjectThingSchema = v.object({
	...valiObjectThingPrototypeSchema.entries,
	thing_id: v.number(),
	user_id: v.number(),
	owned_time: v.number(),
	can_give: v.optional(v.number()),
	can_sell: v.optional(v.number()),
	souvenir: v.optional(v.string()),
	autograph: v.optional(
		v.object({
			user_id: v.number(),
			text: v.optional(v.string()),
		}),
	),
	gift: v.optional(
		v.object({
			from_user_id: v.number(),
			to_user_id: v.number(),
			ts: v.number(),
		}),
	),
	moneybox: v.optional(
		v.union([
			v.object({
				transactions: v.number(),
				money_inside: v.number(),
			}),
			v.object({
				numbers: v.array(v.number()),
			}),
			v.object({
				count: v.number(),
			}),
		]),
	),
	uses_left: v.optional(v.number()),
	uses_origin: v.optional(v.number()),
	variants: v.optional(v.array(valiObjectItemVariantSchema)),
});
export type Thing = v.InferOutput<typeof valiObjectThingSchema>;

export const valiObjectItemProtoSchema = v.object({
	item_proto_id: v.number(),
	item_proto_status: v.optional(v.picklist([0, 1, 2]), 0),
	type: v.number(),
	image: v.string(),
	title: v.string(),
	description: v.string(),
	quality_id: v.number(),
	moneybox: bit(0),
	variants: v.optional(v.array(valiObjectItemVariantSchema)),
	monopoly_id: v.optional(v.number()),
	sticker_group_id: v.optional(v.number()),
	collection_id: v.optional(v.number()),
	twin_item_proto_ids: v.optional(v.array(v.number())),
	prices: v.optional(
		v.object({
			buy: v.optional(
				v.union([
					v.number(),
					v.array(
						v.object({
							use_count: v.number(),
							price: v.number(),
						}),
					),
				]),
			),
			quick_sell: v.optional(v.number()),
		}),
	),
	key_item_proto_id: v.optional(v.number()),
	case_item_proto_ids: v.optional(v.array(v.number())),
	drop: v.optional(
		v.pipe(
			v.array(
				v.object({
					item_proto_id: v.optional(v.number()),
					is_primary: v.optional(v.boolean()),
					is_rare: v.optional(v.number()),
					is_secondary: v.optional(v.number()),
				}),
			),
			v.transform((value) =>
				value.filter((el) => el.item_proto_id !== undefined),
			),
		),
	),
	can_craft: bit(0),
});
export type ItemProto = v.InferOutput<typeof valiObjectItemProtoSchema>;

const valiObjectItemShortSchema = v.object({
	...valiObjectItemProtoSchema.entries,
	item_id: v.number(),
	item_ids: v.optional(v.array(v.number())),
	ts_owned: v.number(),
	ts_can_trade: v.optional(v.number()),
	ts_can_sell: v.optional(v.number()),
	souvenir: v.optional(v.string()),
	autograph: v.optional(
		v.object({
			user_id: v.number(),
			text: v.optional(v.string()),
		}),
	),
	gift: v.optional(
		v.object({
			from_user_id: v.number(),
			to_user_id: v.number(),
			ts: v.number(),
		}),
	),
	moneybox: v.optional(v.record(v.string(), v.unknown())),
	seed: v.optional(v.union([v.string(), v.number()])),
	variants: v.optional(v.array(valiObjectItemVariantSchema)),
	xp_boost: v.optional(v.number()),
});
export type ItemShort = v.InferOutput<typeof valiObjectItemShortSchema>;

export const valiObjectItemSchema = v.object({
	...valiObjectItemShortSchema.entries,
	can_delete: bit(0),
	previous_owners_user_ids: v.optional(v.array(v.number())),
	uses: v.optional(
		v.object({
			left: v.number(),
			origin: v.optional(v.number()),
		}),
	),
});
export type Item = v.InferOutput<typeof valiObjectItemSchema>;

export const valiObjectItemProtoLegacySchema = v.object({
	...valiObjectThingPrototypeSchema.entries,
	...valiObjectItemProtoSchema.entries,
});
