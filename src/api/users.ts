import {
	array,
	pipe,
	transform,
} from 'valibot';
import { M1ApiBase } from './base.js';
import {
	type User,
	type UserShort,
	valiObjectUserSchema,
	valiObjectUserShortSchema,
} from '../valibot/users.js';
import {
	isIterableIterator,
	isRecord,
} from '../utils.js';
import { type ApiResponse } from '../types.js';

// eslint-disable-next-line jsdoc/require-jsdoc
function transformer<T extends User | UserShort>(value: T[]) {
	const result = new Map<number, T>();

	for (const user of value) {
		result.set(
			user.user_id,
			user,
		);
	}

	return result;
}

const valiApiResponseUsersGetSchema = pipe(
	array(valiObjectUserSchema),
	transform(transformer),
);

const valiApiResponseUsersGetShortSchema = pipe(
	array(valiObjectUserShortSchema),
	transform(transformer),
);

const valiApiResponseUsersGetOneSchema = pipe(
	array(valiObjectUserSchema),
	transform((value) => value[0]),
);

const valiApiResponseUsersGetShortOneSchema = pipe(
	array(valiObjectUserShortSchema),
	transform((value) => value[0]),
);

export class M1ApiUsers extends M1ApiBase {
	/**
	 * Returns current user.
	 * @returns -
	 */
	get(): Promise<ApiResponse<User>>;
	/**
	 * Returns a user by ID or domain.
	 * @param user_id -
	 * @returns -
	 */
	get(user_id: number | string): Promise<ApiResponse<User>>;
	/**
	 * Returns users by IDs or domains.
	 * @param user_ids -
	 * @returns -
	 */
	get(user_ids: (number | string)[] | Set<number | string> | IterableIterator<number | string>): Promise<ApiResponse<Map<number, User>>>;
	/**
	 * Returns current user in short form.
	 * @param user_ids -
	 * @returns -
	 */
	get(options: { short: true }): Promise<ApiResponse<UserShort>>;
	/**
	 * Returns a user by ID or domain in short form.
	 * @param user_ids -
	 * @returns -
	 */
	get(
		user_id: number | string,
		options: { short: true },
	): Promise<ApiResponse<UserShort>>;
	/**
	 * Returns users by IDs or domains in short form.
	 * @param user_ids -
	 * @returns -
	 */
	get(
		user_ids: (number | string)[],
		options: { short: true },
	): Promise<ApiResponse<Map<number, UserShort>>>;
	get(
		arg0?: number | string
			| (number | string)[]
			| Set<number | string>
			| IterableIterator<number | string>
			| { short: true },
		arg1?: { short: true },
	) {
		let user_ids: (number | string)[] | null = null;
		let is_multiple_users = false;
		const data: {
			type?: string,
			user_ids?: string,
		} = {};

		if (isRecord(arg0) && arg0.short === true) {
			data.type = 'short';
		}
		else if (
			isIterableIterator(arg0)
			|| arg0 instanceof Set
		) {
			user_ids = [ ...arg0 ];
			is_multiple_users = true;
		}
		else if (Array.isArray(arg0)) {
			user_ids = arg0;
			is_multiple_users = true;
		}
		else if (typeof arg0 === 'string' || typeof arg0 === 'number') {
			user_ids = [ arg0 ];
		}

		if (isRecord(arg1) && arg1.short === true) {
			data.type = 'short';
		}

		if (user_ids) {
			data.user_ids = user_ids.join(',');
		}

		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'users.get',
			data,
			valiResponseSchema: data?.type === 'short'
				? (
					is_multiple_users
						? valiApiResponseUsersGetShortSchema
						: valiApiResponseUsersGetShortOneSchema
				)
				: (
					is_multiple_users
						? valiApiResponseUsersGetSchema
						: valiApiResponseUsersGetOneSchema
				),
		});
	}
}
