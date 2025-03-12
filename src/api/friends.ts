import { void as voidSchema } from 'valibot';
import {
	valiResponseFriendsGetRequestsSchema,
	valiResponseFriendsGetSchema,
	valiResponseFriendsGetRequestsShortSchema,
	valiResponseFriendsGetShortSchema,
	type ResponseFriendsGetRequests,
	type ResponseFriendsGet,
	type ResponseFriendsGetRequestsShort,
	type ResponseFriendsGetShort,
} from '../valibot/friends.js';
import { type ApiResponse } from '../types.js';
import { M1ApiBase } from './base.js';
import { isRecord } from '../utils.js';

export class M1ApiFriends extends M1ApiBase {
	/**
	 * Adds a friend.
	 * @param user_id - The ID of the user to add.
	 * @returns -
	 */
	add(user_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.add',
			data: {
				user_id,
			},
			valiResponseSchema: voidSchema(),
		});
	}

	/**
	 * Deletes a friend.
	 * @param user_id - The ID of the user to delete.
	 * @returns -
	 */
	delete(user_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.delete',
			data: {
				user_id,
			},
			valiResponseSchema: voidSchema(),
		});
	}

	/**
	 * Returns a list of friend requests.
	 * @param options -
	 * @param options.count The number of requests to return.
	 * @param options.offset The number of requests to skip.
	 * @param options.short Whether to return a short list of requests.
	 * @returns A list of friend requests and their count.
	 */
	getRequests(options: {
		count?: number,
		offset?: number,
		short: true,
	}): Promise<ApiResponse<ResponseFriendsGetRequestsShort>>;
	/**
	 * Returns a list of friends.
	 * @param options -
	 * @param options.count The number of friends to return.
	 * @param options.offset The number of friends to skip.
	 * @param options.short Whether to return a short list of friends.
	 * @returns A list of friends and their count.
	 */
	getRequests(options: {
		count?: number,
		offset?: number,
		short?: false,
	}): Promise<ApiResponse<ResponseFriendsGetRequests>>;
	getRequests({
		count = 20,
		offset = 0,
		short = false,
	}: {
		count?: number,
		offset?: number,
		short?: boolean,
	} = {}): Promise<ApiResponse<ResponseFriendsGetRequests | ResponseFriendsGetRequestsShort>> {
		const is_short = short === true;
		const options: {
			count: number,
			offset: number,
			type?: string,
		} = {
			count,
			offset,
		};

		if (is_short) {
			options.type = 'short';
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.getRequests',
			data: options,
			valiResponseSchema: is_short
				? valiResponseFriendsGetRequestsShortSchema
				: valiResponseFriendsGetRequestsSchema,
		});
	}

	/**
	 * Returns a list of friends.
	 * @param user_id - The ID of the user to get friends for.
	 * @returns A list of friends and their count.
	 */
	get(user_id: number | string): Promise<ApiResponse<ResponseFriendsGet>>;
	/**
	 * Returns a list of friends.
	 * @param options -
	 * @param options.user_id The ID of the user to get friends for.
	 * @param options.online Whether to return online friends.
	 * @param options.add_user Whether to return friends who have added the user.
	 * @param options.short Whether to return a short list of friends.
	 * @param options.offset The number of friends to skip.
	 * @param options.count The number of friends to return.
	 * @returns A list of friends and their count.
	 */
	get(options: {
		user_id?: number | string,
		online?: boolean,
		add_user?: boolean,
		short: true,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseFriendsGetShort>>;
	/**
	 * Returns a list of friends.
	 * @param options -
	 * @param options.user_id The ID of the user to get friends for.
	 * @param options.online Whether to return online friends.
	 * @param options.add_user Whether to return friends who have added the user.
	 * @param options.short Whether to return a short list of friends.
	 * @param options.offset The number of friends to skip.
	 * @param options.count The number of friends to return.
	 * @returns A list of friends and their count.
	 */
	get(options: {
		user_id?: number | string,
		online?: boolean,
		add_user?: boolean,
		short?: false,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseFriendsGet>>;
	get(param0: number | string | {
		user_id?: number | string,
		online?: boolean,
		add_user?: boolean,
		short?: boolean,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseFriendsGet | ResponseFriendsGetShort>> {
		const options: {
			user_id?: number | string,
			online?: number,
			add_user?: number,
			type?: 'short',
			offset?: number,
			count?: number,
		} = {};

		let is_short = false;

		if (typeof param0 === 'number' || typeof param0 === 'string') {
			options.user_id = param0;
		}
		else if (isRecord(param0)) {
			if (param0.user_id) {
				options.user_id = param0.user_id;
			}

			if (param0.online) {
				options.online = 1;
			}

			if (param0.add_user) {
				options.add_user = 1;
			}

			if (param0.short) {
				options.type = 'short';
				is_short = true;
			}

			if (param0.offset) {
				options.offset = param0.offset;
			}

			if (param0.count) {
				options.count = param0.count;
			}
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.get',
			data: options,
			valiResponseSchema: is_short
				? valiResponseFriendsGetShortSchema
				: valiResponseFriendsGetSchema,
		});
	}
}
