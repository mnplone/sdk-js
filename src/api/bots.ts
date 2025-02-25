import { type M1 } from '../m1.js';
import {
	object,
	number,
} from 'valibot';
import {
	valiObjectSessionSchema,
	type Session,
} from '../valibot/auth.js';
import { type ApiResponse } from '../types.js';
// import { isRecord } from '../utils.js';

export class M1ApiBots {
	// eslint-disable-next-line no-useless-constructor
	constructor(protected baseClient: M1) {
		// do nothing
		// win
	}

	create(nick: string): Promise<ApiResponse<{ user_id: number }>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'bots.create',
			data: {
				nick,
			},
			valiResponseSchema: object({
				user_id: number(),
			}),
		});
	}

	getToken(user_id: number, ip?: string): Promise<ApiResponse<Session>> {
		const options: {
			user_id: number,
			ip?: string,
		} = {
			user_id,
		};
		if (ip !== undefined) {
			options.ip = ip;
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'bots.getToken',
			data: options,
			valiResponseSchema: valiObjectSessionSchema,
		});
	}
}
