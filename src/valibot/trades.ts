import * as v from 'valibot';
import { valiObjectItemSchema, valiObjectThingSchema } from './items.js';
import { valiObjectUserSchema } from './users.js';

export const valiObjectTradeIdSchema = v.object({
	trade_id: v.number(),
});
export type ObjectTradeId = v.InferOutput<typeof valiObjectTradeIdSchema>;

const valiObjectTradeSideSchema = v.object({
	user_id: v.number(),
	item_ids: v.array(valiObjectItemSchema),
});

export const valiObjectTradeSchema = v.object({
	create_time: v.number(),
	reaction_time: v.nullable(v.number()),
	status: v.number(),
	trade_id: v.number(),
	things_from: v.array(valiObjectThingSchema),
	things_to: v.array(valiObjectThingSchema),
	user_id_from: v.number(),
	user_id_to: v.number(),
});
export type ObjectTrade = v.InferOutput<typeof valiObjectTradeSchema>;

export const valiObjectNewTradeSchema = v.object({
	trade_id: v.number(),
	status: v.number(),
	ts_created: v.number(),
	ts_completed: v.nullable(v.number()),
	initiator: valiObjectTradeSideSchema,
	receiver: valiObjectTradeSideSchema,
});
export type ObjectNewTrade = v.InferOutput<typeof valiObjectNewTradeSchema>;

export const valiObjectTradeListSchema = v.object({
	collections: v.array(v.number()),
	qualities: v.array(v.number()),
	item_ids_equipped: v.optional(v.array(v.number())),
	thing_types: v.array(v.number()),
	trades: v.array(valiObjectTradeSchema),
	user_data: v.array(valiObjectUserSchema),
});
export type ObjectTradeList = v.InferOutput<typeof valiObjectTradeListSchema>;
