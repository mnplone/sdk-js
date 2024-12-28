import * as v from 'valibot';

import { UsersAPI } from './index.ts';
import {
	User,
	UserShort,
} from '../../types.ts';

/**
 * @param {UsersAPI} this -
 * @param {object} parameters -
 * @param {number | string} parameters.user_id -
 * @param {string} parameters.user_ids -
 * @param {string} parameters.type -
 * @returns {Promise<UserData | UserShortData>} -
 */
export async function get(
	this: UsersAPI,
	parameters: {
		user_id?: number | string,
		user_ids?: string,
		type?: string,
	},
): Promise<User | UserShort | User[] | UserShort[]> {
	const result = await this.baseClient.callMethod(
		'users.get',
		parameters,
		'GET',
	);

	return result;
}
