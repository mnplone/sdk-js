import {
	array,
	type InferOutput,
	nullable,
	number,
	object,
	optional,
} from 'valibot';
import {
	valiObjectItemSchema,
	valiObjectThingSchema,
} from './items.js';
import { valiObjectUserSchema } from './users.js';

export const valiObjectTradeIdSchema = object({
	trade_id: number(),
});
export type ObjectTradeId = InferOutput<typeof valiObjectTradeIdSchema>;

const valiObjectTradeSideSchema = object({
	user_id: number(),
	item_ids: array(valiObjectItemSchema),
});

export const valiObjectTradeSchema = object({
	create_time: number(),
	reaction_time: nullable(number()),
	status: number(),
	trade_id: number(),
	things_from: array(valiObjectThingSchema),
	things_to: array(valiObjectThingSchema),
	user_id_from: number(),
	user_id_to: number(),
});
export type ObjectTrade = InferOutput<typeof valiObjectTradeSchema>;

export const valiObjectNewTradeSchema = object({
	trade_id: number(),
	status: number(),
	ts_created: number(),
	ts_completed: nullable(number()),
	initiator: valiObjectTradeSideSchema,
	receiver: valiObjectTradeSideSchema,
});
export type ObjectNewTrade = InferOutput<typeof valiObjectNewTradeSchema>;

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
export type ObjectTradeList = InferOutput<typeof valiObjectTradeListSchema>;
