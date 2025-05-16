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

export class M1ApiIm extends M1ApiBase {
	/**
	 * Send a message to a user
	 * @param user_id - The user ID of the recipient
	 * @param text - The message text
	 * @returns The message ID
	 */
	send(user_id: number, text: string): Promise<ApiResponse<ResponseImSend>>;
	/**
	 * Send a message to a user
	 * @param parameters - The object with the user ID of the recipient and the message text
	 * @returns The message ID
	 */
	send(
		user_id: number,
		text: string,
		options: { send_id: string },
	): Promise<ApiResponse<ResponseImSend>>;
	send(
		user_id: number,
		text: string,
		options?: { send_id: string },
	): Promise<ApiResponse<ResponseImSend>> {
		const data = {} as {
			user_id: number,
			text: string,
			send_id?: string,
		};
		if (typeof param0 === 'number' && typeof param1 === 'string') {
			data.user_id = param0;
			data.text = param1;
		}
		else if (isRecord(param0)) {
			data.user_id = param0.user_id;
			data.text = param0.text;
			if (param0.send_id) {
				data.send_id = param0.send_id;
			}
		}
		else {
			throw new TypeError('Invalid parameters');
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'im.send',
			data,
			valiResponseSchema: valiResponseImSendSchema,
		});
	}

	/**
	 * Get dialogs
	 * @param parameters -
	 * @param parameters.id_last -
	 * @param parameters.offset -
	 * @param parameters.count -
	 * @returns -
	 */
	getDialogs(options?: {
		id_last?: string,
		offset?: number,
		count?: number,
	}): Promise<ApiResponse<ResponseImDialogsGet>> {
		const data = {} as {
			id_last?: string,
			offset?: number,
			count?: number,
		};
		if (id_last) {
			data.id_last = id_last;
		}

		if (offset) {
			data.offset = offset;
		}

		if (count) {
			data.count = count;
		}

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
	 * @param parameters -
	 * @param parameters.id_last -
	 * @param parameters.offset -
	 * @param parameters.count -
	 * @returns -
	 */
	getHistory(user_id: number): Promise<ApiResponse<ResponseImHistoryGet>>;
	getHistory(user_id: number, options: {
		id_last?: string,
		offset?: number,
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
		if (typeof param0 === 'number') {
			data.user_id = param0;
			if (isRecord(param1)) {
				if (param1.id_last) {
					data.id_last = param1.id_last;
				}

				if (param1.offset) {
					data.offset = param1.offset;
				}

				if (param1.count) {
					data.count = param1.count;
				}
			}
		}
		else if (isRecord(param0)) {
			data.user_id = param0.user_id;
			if (param0.id_last) {
				data.id_last = param0.id_last;
			}

			if (param0.offset) {
				data.offset = param0.offset;
			}

			if (param0.count) {
				data.count = param0.count;
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
