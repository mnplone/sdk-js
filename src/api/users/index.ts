import { get } from './get.ts';
import { M1 } from '../../m1.ts';
import {
	User,
	UserShort,
} from '../../valibot/users.ts';

export class UsersApi {
	constructor(public baseClient: M1) {
		if (baseClient instanceof M1 === false) {
			throw new TypeError('baseClient must be an instance of M1');
		}

		this.baseClient = baseClient;
	}

	public get(
		arg0?: number | string | (number | string)[] | { short: true },
		arg1?: { short: true },
	): Promise<User | User[] | UserShort | UserShort[]> {
		return get.call(this.baseClient, arg0, arg1);
	}
}
