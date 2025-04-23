import {
	array,
	InferOutput,
	null_,
	number,
	object,
	optional,
	union,
} from 'valibot';
import { valiObjectThingSchema } from './items.js';
import { valiObjectUserSchema } from './users.js';

export const valiObjectTradeIdSchema = object({
	trade_id: number(),
});

export const valiObjectTradeSchema = object({
	create_time: number(),
	reaction_time: union([ number(), null_() ]),
	status: number(),
	trade_id: number(),
	things_from: array(valiObjectThingSchema),
	things_to: array(valiObjectThingSchema),
	user_id_from: number(),
	user_id_to: number(),
});

export const valiObjectTradeListSchema = object({
	collections: array(number()),
	qualities: array(number()),
	item_ids_equipped: optional(
		array(number()),
	),
	thing_types: array(number()),
	trades: array(valiObjectTradeSchema),
	user_data: array(valiObjectUserSchema),
});

export type ObjectTrade = InferOutput<typeof valiObjectTradeSchema>;

export type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;

export type ObjectTradeList = InferOutput<typeof valiObjectTradeListSchema>;
