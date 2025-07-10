import type { IsEqual } from 'type-fest';
import {
	type InferOutput,
	number,
	object,
	array,
	optional,
} from 'valibot';
import {
	valiObjectUserSchema,
	valiObjectUserShortSchema,
} from './users.js';

export const valiResponseFriendsGetSchema = object({
	count: number(),
	friends: array(valiObjectUserSchema),
});

export const valiResponseFriendsGetWithUserSchema = object({
	...valiResponseFriendsGetSchema.entries,
	user: valiObjectUserSchema,
});

export const valiResponseFriendsGetShortSchema = object({
	count: number(),
	friends: array(valiObjectUserShortSchema),
});

export const valiResponseFriendsGetShortWithUserSchema = object({
	...valiResponseFriendsGetShortSchema.entries,
	user: valiObjectUserShortSchema,
});

export type ResponseFriendsGet<S extends boolean, U extends boolean> =
	IsEqual<S, true> extends true
		? IsEqual<U, true> extends true
			? InferOutput<typeof valiResponseFriendsGetShortWithUserSchema>
			: InferOutput<typeof valiResponseFriendsGetShortSchema>
		: IsEqual<U, true> extends true
			? InferOutput<typeof valiResponseFriendsGetWithUserSchema>
			: InferOutput<typeof valiResponseFriendsGetSchema>

export const valiResponseFriendsGetRequestsSchema = object({
	count: number(),
	requests: array(valiObjectUserSchema),
});

export const valiResponseFriendsGetRequestsShortSchema = object({
	count: number(),
	requests: array(valiObjectUserShortSchema),
});

export type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;
export type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;
export type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;
