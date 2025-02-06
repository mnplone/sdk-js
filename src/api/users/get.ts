// import * as v from 'valibot';

import { M1 } from '../../m1.ts';
import { Dictionary } from '../../types.ts';
import {
	User,
	UserShort,
} from '../../valibot/users.ts';

/**
 * @this {UsersApi}
 * @param arg0 -
 * @param arg1 -
 * @param arg1.short -
 * @returns {Promise<User | User[] | UserShort | UserShort[]>} -
 */
export async function get(
	this: M1,
	arg0?: number | string | (number | string)[] | { short: true },
	arg1?: { short: true },
): Promise<User | User[] | UserShort | UserShort[]> {
	if (this instanceof M1 === false) {
		throw new TypeError('"this" is not an instance of M1');
	}

	if (arg0 === undefined) {
		const response = await this.callMethod('users.get', {});
		return response as User;
	}

	if (typeof arg0 === 'object' && arg0 !== null && 'short' in arg0 && arg0.short === true) {
		const response = await this.callMethod('users.get', { type: 'short' });
		return response as UserShort;
	}

	const parameters: Dictionary<string> = {};
	const is_short = typeof arg1 === 'object' && arg1 !== null && 'short' in arg1 && arg1.short === true;

	if (is_short) {
		parameters.type = 'short';
	}

	if (Array.isArray(arg0)) {
		const response = await this.callMethod(
			'users.get',
			{
				user_ids: arg0.toString(),
				...parameters,
			},
		);
		return is_short
			? response as UserShort[]
			: response as User[];
	}

	if (typeof arg0 === 'number' || typeof arg0 === 'string') {
		const response = await this.callMethod('users.get', {
			user_id: arg0,
			...parameters,
		});
		return is_short
			? response as UserShort
			: response as User;
	}

	throw new TypeError('Invalid argument 0');
}
