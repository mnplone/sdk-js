import {
	InferOutput,
	number,
	object,
	array,
	optional,
} from 'valibot';
import {
	valiObjectUserSchema,
	valiObjectUserShortSchema,
} from './users.js';

export const valiResponseFriendsGetRequestsSchema = object({
	count: number(),
	requests: array(valiObjectUserSchema),
});

export const valiResponseFriendsGetSchema = object({
	count: number(),
	friends: array(valiObjectUserSchema),
	user: optional(valiObjectUserSchema),
});

export const valiResponseFriendsGetRequestsShortSchema = object({
	count: number(),
	requests: array(valiObjectUserShortSchema),
});

export const valiResponseFriendsGetShortSchema = object({
	count: number(),
	friends: array(valiObjectUserShortSchema),
	user: optional(valiObjectUserShortSchema),
});

export type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
export type ResponseFriendsGet = InferOutput<typeof valiResponseFriendsGetSchema>;
export type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
export type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;
