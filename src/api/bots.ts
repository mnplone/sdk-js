import * as v from 'valibot';
import {
	valiObjectSessionSchema,
	type Session,
} from '../valibot/auth.js';
import { type ApiResponse } from '../types.js';
import { M1ApiBase } from './base.js';

export class M1ApiBots extends M1ApiBase {
	/**
	 * Creates a new bot.
	 * @param nick - A nickname of a new bot.
	 * @returns -
	 */
	create(nick: string): Promise<ApiResponse<{ user_id: number }>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'bots.create',
			data: {
				nick,
			},
			valiResponseSchema: v.object({
				user_id: v.number(),
			}),
		});
	}

	/**
	 * Generates access_token for a bot.
	 * @param user_id - The ID of the bot.
	 * @param ip - The IP address (IPv4 or IPv6).
	 * @returns -
	 */
	getToken(user_id: number, ip?: string): Promise<ApiResponse<Session>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'bots.getToken',
			data: {
				user_id,
				ip,
			},
			valiResponseSchema: valiObjectSessionSchema,
		});
	}
}
