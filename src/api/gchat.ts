import { M1ApiBase } from './base.js';
import type { ApiResponse } from '../types.js';
import {
	type ResponseGchatGet,
	type ResponseGchatSend,
	valiResponseGchatGetSchema,
	valiResponseGchatSendSchema,
} from '../valibot/gchat.js';
import type { CallMethodOptionsData } from '../m1.js';

export class M1ApiGchat extends M1ApiBase {
	/**
	 * Get chat messages.
	 * @returns Returns gchat status, messages and its users and item_protos.
	 */
	get(): Promise<ApiResponse<ResponseGchatGet>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'gchat.get',
			valiResponseSchema: valiResponseGchatGetSchema,
		});
	}

	/**
	 * Send a message to the chat.
	 * @param message The message to send.
	 * @returns Message id.
	 */
	send(message: string): Promise<ApiResponse<ResponseGchatSend>>;
	/**
	 * Send a message to the chat.
	 * @param message The message to send.
	 * @param options -
	 * @param options.is_public Whether the message is public.
	 * @returns Message id.
	 */
	send(
		message: string,
		options: {
			is_public: boolean,
		},
	): Promise<ApiResponse<ResponseGchatSend>>;
	send(
		message: string,
		options?: {
			is_public: boolean,
		},
	): Promise<ApiResponse<ResponseGchatSend>> {
		const data: CallMethodOptionsData = { message };

		if (options?.is_public) {
			data.is_public = 1;
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'gchat.send',
			data,
			valiResponseSchema: valiResponseGchatSendSchema,
		});
	}
}
