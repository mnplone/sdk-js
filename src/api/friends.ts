import { void as voidSchema } from 'valibot';
import type { CallMethodOptionsData } from '../m1.js';
import type { ApiResponse } from '../types.js';
import { isRecord } from '../utils.js';
import {
	valiResponseFriendsGetBaseSchema,
	valiResponseFriendsGetShortSchema,
	valiResponseFriendsGetShortWithUserSchema,
	valiResponseFriendsGetWithUserSchema,
	valiResponseFriendsGetRequestsSchema,
	valiResponseFriendsGetRequestsShortSchema,
	type ResponseFriendsGetRequests,
	type ResponseFriendsGet,
	type ResponseFriendsGetRequestsShort,
} from '../valibot/friends.js';
import { M1ApiBase } from './base.js';

type FriendsGetOptions<OS extends boolean, OU extends boolean> = {
	online?: boolean,
	short?: OS,
	add_user?: OU,
	offset?: number,
	count?: number,
};

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
	getRequests(options?: {
		count?: number,
		offset?: number,
	}): Promise<ApiResponse<ResponseFriendsGetRequests>>;
	getRequests({
		count,
		offset,
		short,
	}: {
		count?: number,
		offset?: number,
		short?: boolean,
	} = {}): Promise<ApiResponse<ResponseFriendsGetRequests | ResponseFriendsGetRequestsShort>> {
		const is_short = short === true;
		const data: CallMethodOptionsData = {
			count,
			offset,
		};

		if (is_short) {
			data.type = 'short';
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.getRequests',
			data,
			valiResponseSchema: is_short
				? valiResponseFriendsGetRequestsShortSchema
				: valiResponseFriendsGetRequestsSchema,
		});
	}

	/**
	 * Returns a list of friends.
	 * @param options -
	 * @param options.count The number of friends to return.
	 * @param options.offset The number of friends to skip.
	 * @param options.short Whether to return a short list of friends.
	 * @param options.add_user Whether to add user information to the response.
	 * @param options.online Whether to return only online friends.
	 * @returns A list of friends and their count.
	 */
	get<
		const OS extends boolean,
		const OU extends boolean,
	>(options?: FriendsGetOptions<OS, OU>): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
	/**
	 * Returns a list of friends.
	 * @param user_id - The ID of the user whose friends to get.
	 * @param options -
	 * @param options.count The number of friends to return.
	 * @param options.offset The number of friends to skip.
	 * @param options.short Whether to return a short list of friends.
	 * @param options.add_user Whether to add user information to the response.
	 * @param options.online Whether to return only online friends.
	 * @returns A list of friends and their count.
	 */
	get<
		const OS extends boolean,
		const OU extends boolean,
	>(
		user_id: number | string,
		options?: FriendsGetOptions<OS, OU>,
	): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
	get<
		const OS extends boolean,
		const OU extends boolean,
	>(
		arg0?: number | string | FriendsGetOptions<OS, OU>,
		arg1?: FriendsGetOptions<OS, OU>,
	): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>> {
		const user_id = typeof arg0 === 'number' || typeof arg0 === 'string'
			? arg0
			: undefined;
		const options = isRecord(arg0) ? arg0 : arg1;

		const is_short = options?.short ?? false;
		const add_user = options?.add_user ?? false;

		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'friends.get',
			data: {
				user_id,
				online: options?.online ? 1 : undefined,
				add_user: add_user ? 1 : undefined,
				type: is_short ? 'short' : undefined,
				offset: options?.offset,
				count: options?.count,
			},
			valiResponseSchema: options?.short
				? (options?.add_user
					? valiResponseFriendsGetShortWithUserSchema
					: valiResponseFriendsGetShortSchema)
				: (options?.add_user
					? valiResponseFriendsGetWithUserSchema
					: valiResponseFriendsGetBaseSchema),
		}) as Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
	}
}
