import { void as voidSchema } from 'valibot';
import { M1ApiBase } from './base.js';
import { type ApiResponse } from '../types.js';
import type { CallMethodOptionsData } from '../m1.js';
import {
	valiObjectTradeIdSchema,
	valiObjectTradeListSchema,
	type ObjectTradeId,
	type ObjectTradeList,
} from '../valibot/trades.js';

export class M1ApiTrades extends M1ApiBase {
	create(options: {
		item_ids_offer?: number[],
		item_ids_request?: number[],
		user_id: number,
	}): Promise<ApiResponse<ObjectTradeId>> {
		if (options.item_ids_request === undefined && options.item_ids_offer === undefined) {
			throw new Error('One of item_ids_to or item_ids_from is required');
		}

		const data: CallMethodOptionsData = {
			user_id: options.user_id,
		};

		if (options.item_ids_request !== undefined) {
			data.thing_ids_to = options.item_ids_request.join(',');
		}

		if (options.item_ids_offer !== undefined) {
			data.thing_ids_from = options.item_ids_offer.join(',');
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.create',
			data,
			valiResponseSchema: valiObjectTradeIdSchema,
		});
	}

	accept(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.accept',
			data: {
				trade_id,
			},
			valiResponseSchema: voidSchema(),
		});
	}

	decline(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.cancel',
			data: {
				trade_id,
			},
			valiResponseSchema: voidSchema(),
		});
	}

	revoke(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.revoke',
			data: {
				trade_id,
			},
			valiResponseSchema: voidSchema(),
		});
	}

	getIncoming(options: {
		count?: number,
		offset?: number,
	}): Promise<ApiResponse<ObjectTradeList>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.getIncome',
			data: options,
			valiResponseSchema: valiObjectTradeListSchema,
		});
	}

	getOutgoing(options: {
		count?: number,
		offset?: number,
	}): Promise<ApiResponse<ObjectTradeList>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.getOutbound',
			data: options,
			valiResponseSchema: valiObjectTradeListSchema,
		});
	}

	/**
	 * Get the history of trades.
	 * @param options -
	 * @param options.count - The count of trades to return.
	 * @param options.offset - The offset of the trades to return.
	 * @returns The history of trades.
	 */
	history(options?: {
		count?: number,
		offset?: number,
	}): Promise<ApiResponse<ObjectTradeList>>;
	/**
	 * Get the history of trades.
	 * @param user_id - The user ID.
	 * @param options -
	 * @param options.count - The count of trades to return.
	 * @param options.offset - The offset of the trades to return.
	 * @returns The history of trades.
	 */
	history(
		user_id: number,
		options?: {
			count?: number,
			offset?: number,
		},
	): Promise<ApiResponse<ObjectTradeList>>;
	history(
		arg0?: number | {
			user_id?: number,
			count?: number,
			offset?: number,
		},
		arg1?: {
			count?: number,
			offset?: number,
		},
	): Promise<ApiResponse<ObjectTradeList>> {
		let api_method = 'trades.history';
		const data = {} as {
			count?: number,
			offset?: number,
			user_id?: number,
		};

		if (typeof arg0 === 'number') {
			data.user_id = arg0;
			data.count = arg1?.count;
			data.offset = arg1?.offset;
		}
		else if (typeof arg0 === 'object') {
			if (arg0.user_id !== undefined) {
				data.user_id = arg0.user_id;
			}

			data.count = arg0.count;
			data.offset = arg0.offset;
		}

		if (data.user_id !== undefined) {
			api_method = 'trades.historyWith';
		}

		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method,
			data,
			valiResponseSchema: valiObjectTradeListSchema,
		});
	}
}
