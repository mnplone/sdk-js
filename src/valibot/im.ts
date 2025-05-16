import {
	array,
	type InferOutput,
	null_,
	number,
	object,
	string,
	union,
} from 'valibot';

import { valiObjectUserShortSchema } from './users.js';

export const valiResponseImSendSchema = object({
	msg_id: number(),
});

export const valiObjectMessageSchema = object({
	msg_id: number(),
	is_read: number(),
	text: string(),
	ts_created: number(),
	type: number(),
	user_id: number(),
});

const valiObjectSyncSchema = object({
	events: array(
		object({
			chain: array(
				union([ number(), null_() ]),
			),
			data: object({
				type: number(),
				msg_id: number(),
				dialog: object({
					user_id: number(),
				}),
			}),
		}),
	),
	dialogs: array(
		object({
			user_id: number(),
			new_counter: number(),
		}),
	),
	messages: array(valiObjectMessageSchema),
});

export const valiObjectDialogSchema = object({
	message: valiObjectMessageSchema,
	new_counter: number(),
	user_id: number(),
});

export const valiResponseImDialogsGetSchema = object({
	dialogs: array(valiObjectDialogSchema),
	sync: valiObjectSyncSchema,
	users_data: array(valiObjectUserShortSchema),
});

export const valiResponseImHistoryGetSchema = object({
	messages: array(valiObjectMessageSchema),
	sync: valiObjectSyncSchema,
	users_data: array(valiObjectUserShortSchema),
});

export type ResponseImSend = InferOutput<typeof valiResponseImSendSchema>;
export type ResponseImDialogsGet = InferOutput<typeof valiResponseImDialogsGetSchema>;
export type ResponseImHistoryGet = InferOutput<typeof valiResponseImHistoryGetSchema>;
export type Dialog = InferOutput<typeof valiObjectDialogSchema>;
export type Message = InferOutput<typeof valiObjectMessageSchema>;
