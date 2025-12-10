import * as v from 'valibot';

import { valiObjectUserShortSchema } from './users.js';

export const valiResponseImSendSchema = v.object({
	msg_id: v.number(),
});
export type ResponseImSend = v.InferOutput<typeof valiResponseImSendSchema>;

export const valiObjectMessageSchema = v.object({
	msg_id: v.number(),
	is_read: v.number(),
	text: v.string(),
	ts_created: v.number(),
	type: v.number(),
	user_id: v.number(),
});
export type Message = v.InferOutput<typeof valiObjectMessageSchema>;

const valiObjectSyncSchema = v.object({
	events: v.array(
		v.object({
			chain: v.array(v.union([v.number(), v.null()])),
			data: v.object({
				type: v.number(),
				msg_id: v.number(),
				dialog: v.object({
					user_id: v.number(),
				}),
			}),
		}),
	),
	dialogs: v.array(
		v.object({
			user_id: v.number(),
			new_counter: v.number(),
		}),
	),
	messages: v.array(valiObjectMessageSchema),
});

export const valiObjectDialogSchema = v.object({
	message: valiObjectMessageSchema,
	new_counter: v.number(),
	user_id: v.number(),
});
export type Dialog = v.InferOutput<typeof valiObjectDialogSchema>;

export const valiResponseImDialogsGetSchema = v.object({
	dialogs: v.array(valiObjectDialogSchema),
	sync: valiObjectSyncSchema,
	users_data: v.array(valiObjectUserShortSchema),
});
export type ResponseImDialogsGet = v.InferOutput<
	typeof valiResponseImDialogsGetSchema
>;

export const valiResponseImHistoryGetSchema = v.object({
	messages: v.array(valiObjectMessageSchema),
	sync: valiObjectSyncSchema,
	users_data: v.array(valiObjectUserShortSchema),
});
export type ResponseImHistoryGet = v.InferOutput<
	typeof valiResponseImHistoryGetSchema
>;
