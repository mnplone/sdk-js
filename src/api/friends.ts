import { void as voidSchema } from 'valibot';
import type { CallMethodOptionsData } from '../m1.js';
import type { ApiResponse } from '../types.js';
import { isRecord } from '../utils.js';
import {
	valiResponseFriendsGetSchema,
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
	is_short?: OS,
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

	/*
	m1.friends.get();
	m1.friends.get(1);
	m1.friends.get({ short: true });
	m1.friends.get(1, { short: true });
	m1.friends.get({ add_user: true });
	m1.friends.get(1, { add_user: true });
	m1.friends.get({ short: true, add_user: true });
	m1.friends.get(1, { short: true, add_user: true });
	*/

	// TODO: refactor
	// get();
	// get(options: FriendsGetBaseOptions);
	// get(options: FriendsGetBaseOptions & FriendsGetOptionsWithUser);
	// get(options: FriendsGetBaseOptions & FriendsGetOptionsShort);
	// get(options: FriendsGetBaseOptions & FriendsGetOptionsWithUser & FriendsGetOptionsShort);
	// get(user_id: number);
	// get(user_id: number, options: FriendsGetBaseOptions);
	// get(user_id: number, options: FriendsGetBaseOptions & FriendsGetOptionsWithUser);
	// get(user_id: number, options: FriendsGetBaseOptions & FriendsGetOptionsShort);
	// get(user_id: number, options: FriendsGetBaseOptions & FriendsGetOptionsWithUser & FriendsGetOptionsShort);
	// get<const ID extends boolean, WU, WS>(): ID extends true ? Schema1 : Schema2;

	// get(user_id, FriendsGetBaseOptions);
	// getShort(user_id, FriendsGetBaseOptions);
	// getWithUser(user_id, FriendsGetBaseOptions);
	// getShortWithUser(user_id, FriendsGetBaseOptions);

	_get<
		const OS extends boolean,
		const OU extends boolean,
	>(options?: FriendsGetOptions<OS, OU>): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
	_get<
		const OS extends boolean,
		const OU extends boolean,
	>(
		user_id: number | string,
		options?: FriendsGetOptions<OS, OU>,
	): Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>
	_get<
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

		const is_short = options?.is_short ?? false;
		const add_user = options?.add_user ?? false;

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.get',
			data: {
				user_id,
				online: options?.online ? 1 : undefined,
				add_user: add_user ? 1 : undefined,
				type: is_short ? 'short' : undefined,
				offset: options?.offset,
				count: options?.count,
			},
			valiResponseSchema: options?.is_short
				? (options?.add_user
					? valiResponseFriendsGetShortWithUserSchema
					: valiResponseFriendsGetShortSchema)
				: (options?.add_user
					? valiResponseFriendsGetWithUserSchema
					: valiResponseFriendsGetSchema),
		}) as Promise<ApiResponse<ResponseFriendsGet<OS, OU>>>;
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
		const data: {
			user_id?: number | string,
			online?: number,
			add_user?: number,
			type?: 'short',
			offset?: number,
			count?: number,
		} = {};

		let is_short = false;

		if (typeof param0 === 'number' || typeof param0 === 'string') {
			data.user_id = param0;
		}
		else if (isRecord(param0)) {
			if (param0.user_id) {
				data.user_id = param0.user_id;
			}

			if (param0.online) {
				data.online = 1;
			}

			if (param0.add_user) {
				data.add_user = 1;
			}

			if (param0.short) {
				data.type = 'short';
				is_short = true;
			}

			if (param0.offset) {
				data.offset = param0.offset;
			}

			if (param0.count) {
				data.count = param0.count;
			}
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'friends.get',
			data,
			valiResponseSchema: is_short
				? valiResponseFriendsGetShortSchema
				: valiResponseFriendsGetSchema,
		});
	}
}
