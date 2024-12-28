import { get } from './get.ts';
import { M1 } from '../../m1.ts';

export class UsersAPI {
	constructor(public baseClient: M1) {
		if (baseClient instanceof M1 === false) {
			throw new TypeError('baseClient must be an instance of M1');
		}

		this.baseClient = baseClient;
	}

	public get = get;
}
