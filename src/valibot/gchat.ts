import * as v from 'valibot';
import { bit } from './common.js';
import { valiObjectUserShortSchema } from './users.js';
import { valiObjectItemProtoSchema } from './items.js';

export const valiObjectGchatMessageBaseSchema = v.object({
	msg_id: v.string(),
	ts: v.number(),
	user_id: v.number(),
});

export const valiObjectGchatMessageAdditionalDataSchema = v.variant('type', [
	v.object({
		type: v.literal(1),
		text: v.string(),
		is_public: v.optional(bit(1)),
		user_ids_mentioned: v.optional(v.array(v.number())),
	}),
	v.object({
		type: v.literal(2),
		case_item_proto_id: v.number(),
		drop_item_proto_id: v.number(),
	}),
	v.object({
		type: v.literal(3),
		user_id_receiver: v.number(),
		item_proto_id: v.number(),
	}),
	v.object({
		type: v.literal(4),
		item_proto_ids: v.array(v.number()),
	}),
]);

export const valiObjectGchatMessageSchema = v.intersect([
	valiObjectGchatMessageBaseSchema,
	valiObjectGchatMessageAdditionalDataSchema,
]);
export type GchatMessage = v.InferOutput<typeof valiObjectGchatMessageSchema>;

export const valiResponseGchatGetSchema = v.object({
	messages: v.array(valiObjectGchatMessageSchema),
	status: v.object({
		closed: v.boolean(),
		slowmode: v.boolean(),
		emoteonly: v.boolean(),
	}),
	users: v.array(valiObjectUserShortSchema),
	item_protos: v.array(valiObjectItemProtoSchema),
});
export type ResponseGchatGet = v.InferOutput<typeof valiResponseGchatGetSchema>;

export const valiResponseGchatSendSchema = v.object({
	msg_id: v.string(),
});
export type ResponseGchatSend = v.InferOutput<
	typeof valiResponseGchatSendSchema
>;
