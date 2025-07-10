import type { If } from 'type-fest';
import {
	type InferOutput,
	number,
	object,
	array,
} from 'valibot';
import {
	valiObjectUserSchema,
	valiObjectUserShortSchema,
} from './users.js';

export const valiResponseFriendsGetBaseSchema = object({
	count: number(),
	friends: array(valiObjectUserSchema),
});
export type ResponseFriendsGetBase = InferOutput<typeof valiResponseFriendsGetBaseSchema>;

export const valiResponseFriendsGetWithUserSchema = object({
	...valiResponseFriendsGetBaseSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseFriendsGetWithUser = InferOutput<typeof valiResponseFriendsGetWithUserSchema>;

export const valiResponseFriendsGetShortSchema = object({
	count: number(),
	friends: array(valiObjectUserShortSchema),
});
export type ResponseFriendsGetShort = InferOutput<typeof valiResponseFriendsGetShortSchema>;

export const valiResponseFriendsGetShortWithUserSchema = object({
	...valiResponseFriendsGetShortSchema.entries,
	user: valiObjectUserShortSchema,
});
export type ResponseFriendsGetShortWithUser = InferOutput<typeof valiResponseFriendsGetShortWithUserSchema>;

export type ResponseFriendsGet<S extends boolean, U extends boolean> =
	If<
		S,
		If<U, ResponseFriendsGetShortWithUser, ResponseFriendsGetShort>,
		If<U, ResponseFriendsGetWithUser, ResponseFriendsGetBase>
	>;

export const valiResponseFriendsGetRequestsSchema = object({
	count: number(),
	requests: array(valiObjectUserSchema),
});
export type ResponseFriendsGetRequests = InferOutput<typeof valiResponseFriendsGetRequestsSchema>;

export const valiResponseFriendsGetRequestsShortSchema = object({
	count: number(),
	requests: array(valiObjectUserShortSchema),
});
export type ResponseFriendsGetRequestsShort = InferOutput<typeof valiResponseFriendsGetRequestsShortSchema>;

