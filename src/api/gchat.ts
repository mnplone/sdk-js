import { M1ApiBase } from './base.js';
import { type ApiResponse } from '../types.js';
import {
	type ResponseGchatGet,
	type ResponseGchatSend,
	valiResponseGchatGetSchema,
	valiResponseGchatSendSchema,
} from '../valibot/gchat.js';

export class M1ApiGchat extends M1ApiBase {
	/**
	 * Get chat messages.
	 * @returns Returns gchat status, messages and its users and item_protos.
	 */
	get(): Promise<ApiResponse<ResponseGchatGet>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'gchat.get',
			data: {},
			valiResponseSchema: valiResponseGchatGetSchema,
		});
	}

	/**
	 * Send a message to the chat.
	 * @param message The message to send.
	 * @param options -
	 * @param options.is_public Whether the message is public.
	 * @returns Returns the message id.
	 */
	send(message: string, options: { is_public?: boolean }): Promise<ApiResponse<ResponseGchatSend>>;
	send(parameters: {
		message: string,
		is_public?: boolean,
	}): Promise<ApiResponse<ResponseGchatSend>>;
	send(
		param0: string | {
			message: string,
			is_public?: boolean,
		},
		param1?: {
			is_public?: boolean,
		},
	): Promise<ApiResponse<ResponseGchatSend>> {
		const data = {
			message: '',
		} as {
			message: string,
			is_public?: 0 | 1,
		};

		let is_public;

		if (typeof param0 === 'string') {
			data.message = param0;
			is_public = Boolean(param1?.is_public);
		}
		else {
			data.message = param0.message;
			is_public = Boolean(param0?.is_public);
		}

		if (is_public) {
			data.is_public = 1; // if not public - we don't need to send this field (at least for now)
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'gchat.send',
			data,
			valiResponseSchema: valiResponseGchatSendSchema,
		});
	}
}
