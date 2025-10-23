import { M1ApiBase } from './base.js';
import { isRecord } from '../utils.js';
import { type ApiResponse } from '../types.js';
import {
	type ResponseImDialogsGet,
	type ResponseImHistoryGet,
	type ResponseImSend,
	valiResponseImDialogsGetSchema,
	valiResponseImHistoryGetSchema,
	valiResponseImSendSchema,
} from '../valibot/im.js';

type ImSendOptions = {
	send_id?: string,
};

export class M1ApiIm extends M1ApiBase {
	/**
	 * Sends a text message to a user or a group chat
	 * @param options -
	 * @param options.user_id - The user ID of the recipient
	 * @param options.text - The message text
	 * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
	 * @returns - The message ID
	 */
	send(options: {
		user_id: number,
		text: string,
	} & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
	/**
	 * Sends a text message to a group chat
	 * @param options -
	 * @param options.chat_id - The chat ID
	 * @param options.text - The message text
	 * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
	 * @returns - The message ID
	 */
	send(options: {
		chat_id: number,
		text: string,
	} & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
	/**
	 * Sends an image to a user
	 * @param options -
	 * @param options.user_id - The user ID of the recipient
	 * @param options.image_token - The image token
	 * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
	 * @returns - The message ID
	 */
	send(options: {
		user_id: number,
		image_token: string,
	} & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
	/**
	 * Sends an image to a group chat
	 * @param options -
	 * @param options.chat_id - The chat ID
	 * @param options.image_token - The image token
	 * @param options.send_id - Temporary message ID used for tracking until server responds with the actual message ID
	 * @returns - The message ID
	 */
	send(options: {
		chat_id: number,
		image_token: string,
	} & ImSendOptions): Promise<ApiResponse<ResponseImSend>>;
	send(options: {
		user_id?: number,
		chat_id?: number,
		text?: string,
		image_token?: string,
		send_id?: string,
	}): Promise<ApiResponse<ResponseImSend>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'im.send',
			data: options,
			valiResponseSchema: valiResponseImSendSchema,
		});
	}

	/**
	 * Get dialogs
	 * @param options -
	 * @param options.id_last -
	 * @param options.offset -
	 * @param options.count -
	 * @returns -
	 */
	getDialogs(options?: {
		id_last?: string,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseImDialogsGet>> {
		const data = options ?? {} as {
			id_last?: string,
			offset?: number,
			count?: number,
		};

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'im.dialogsGet',
			data,
			valiResponseSchema: valiResponseImDialogsGetSchema,
		});
	}

	/**
	 * Get history
	 * @param user_id -
	 * @param options -
	 * @param options.id_last -
	 * @param options.offset -
	 * @param options.count -
	 * @returns -
	 */
	getHistory(user_id: number): Promise<ApiResponse<ResponseImHistoryGet>>;
	getHistory(user_id: number, options: {
		id_last?: string,
		count?: number,
	}): Promise<ApiResponse<ResponseImHistoryGet>>;
	getHistory(arg0: number | {
		user_id: number,
		id_last?: string,
		offset?: number,
		count?: number,
	}, arg1?: {
		id_last?: string,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseImHistoryGet>> {
		const data = {} as {
			user_id: number,
			id_last?: string,
			offset?: number,
			count?: number,
		};
		if (typeof arg0 === 'number') {
			data.user_id = arg0;
			if (isRecord(arg1)) {
				if (arg1.id_last) {
					data.id_last = arg1.id_last;
				}

				if (arg1.offset) {
					data.offset = arg1.offset;
				}

				if (arg1.count) {
					data.count = arg1.count;
				}
			}
		}
		else if (isRecord(arg0)) {
			data.user_id = arg0.user_id;
			if (arg0.id_last) {
				data.id_last = arg0.id_last;
			}

			if (arg0.offset) {
				data.offset = arg0.offset;
			}

			if (arg0.count) {
				data.count = arg0.count;
			}
		}
		else {
			throw new TypeError('Invalid parameters');
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'im.historyGet',
			data,
			valiResponseSchema: valiResponseImHistoryGetSchema,
		});
	}

	/**
	 * Send an im.sync ws request
	 * @param id_last -
	 */
	sync(id_last: number): void {
		if (!this.baseClient.ws || !this.baseClient.ws.is_connected) {
			throw new Error('WebSocket is not connected');
		}

		this.baseClient.ws.emit(
			'api',
			[
				'im.sync',
				{ id_last },
			],
		);
	}
}
