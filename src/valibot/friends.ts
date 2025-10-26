import type { If } from 'type-fest';
import * as v from 'valibot';
import { valiObjectUserSchema, valiObjectUserShortSchema } from './users.js';

export const valiResponseFriendsGetBaseSchema = v.object({
	count: v.number(),
	friends: v.array(valiObjectUserSchema),
});
export type ResponseFriendsGetBase = v.InferOutput<
	typeof valiResponseFriendsGetBaseSchema
>;

export const valiResponseFriendsGetWithUserSchema = v.object({
	...valiResponseFriendsGetBaseSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseFriendsGetWithUser = v.InferOutput<
	typeof valiResponseFriendsGetWithUserSchema
>;

export const valiResponseFriendsGetShortSchema = v.object({
	count: v.number(),
	friends: v.array(valiObjectUserShortSchema),
});
export type ResponseFriendsGetShort = v.InferOutput<
	typeof valiResponseFriendsGetShortSchema
>;

export const valiResponseFriendsGetShortWithUserSchema = v.object({
	...valiResponseFriendsGetShortSchema.entries,
	user: valiObjectUserShortSchema,
});
export type ResponseFriendsGetShortWithUser = v.InferOutput<
	typeof valiResponseFriendsGetShortWithUserSchema
>;

export type ResponseFriendsGet<S extends boolean, U extends boolean> = If<
	S,
	If<U, ResponseFriendsGetShortWithUser, ResponseFriendsGetShort>,
	If<U, ResponseFriendsGetWithUser, ResponseFriendsGetBase>
>;

export const valiResponseFriendsGetRequestsSchema = v.object({
	count: v.number(),
	requests: v.array(valiObjectUserSchema),
});
export type ResponseFriendsGetRequests = v.InferOutput<
	typeof valiResponseFriendsGetRequestsSchema
>;

export const valiResponseFriendsGetRequestsShortSchema = v.object({
	count: v.number(),
	requests: v.array(valiObjectUserShortSchema),
});
export type ResponseFriendsGetRequestsShort = v.InferOutput<
	typeof valiResponseFriendsGetRequestsShortSchema
>;
