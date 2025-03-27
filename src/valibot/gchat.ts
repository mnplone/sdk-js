import {
	InferOutput,
	array,
	boolean,
	literal,
	intersect,
	number,
	object,
	optional,
	string,
	union,
} from 'valibot';
import { bit } from './common.js';
import { valiObjectUserShortSchema } from './users.js';
import { valiObjectItemProtoSchema } from './items.js';

export const valiObjectGchatMessageBaseSchema = object({
	msg_id: string(),
	ts: number(),
	user_id: number(),
});

export const valiObjectGchatMessageAdditionalDataSchema = union([
	object({
		type: literal(1),
		text: string(),
		is_public: optional(bit(1)),
		user_ids_mentioned: optional(
			array(number()),
		),
	}),
	object({
		type: literal(2),
		case_item_proto_id: number(),
		drop_item_proto_id: number(),
	}),
	object({
		type: literal(3),
		user_id_receiver: number(),
		item_proto_id: number(),
	}),
	object({
		type: literal(4),
		item_proto_ids: array(number()),
	}),
]);

export const valiObjectGchatMessageSchema = intersect([
	valiObjectGchatMessageBaseSchema,
	valiObjectGchatMessageAdditionalDataSchema,
]);

export const valiResponseGchatGetSchema = object({
	messages: array(valiObjectGchatMessageSchema),
	status: object({
		closed: boolean(),
		slowmode: boolean(),
		emoteonly: boolean(),
	}),
	users: array(valiObjectUserShortSchema),
	item_protos: array(valiObjectItemProtoSchema),
});

export const valiResponseGchatSendSchema = object({
	msg_id: string(),
});

export type ResponseGchatGet = InferOutput<typeof valiResponseGchatGetSchema>;
export type GchatMessage = InferOutput<typeof valiObjectGchatMessageSchema>;
export type ResponseGchatSend = InferOutput<typeof valiResponseGchatSendSchema>;
