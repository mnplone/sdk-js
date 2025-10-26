import * as v from 'valibot';
import type { CallMethodOptionsData } from '../m1.js';
import { type ApiResponse } from '../types.js';
import {
	type ObjectTradeId,
	type ObjectTradeList,
	valiObjectTradeIdSchema,
	valiObjectTradeListSchema,
} from '../valibot/trades.js';
import { M1ApiBase } from './base.js';

export class M1ApiTrades extends M1ApiBase {
	/**
	 * Create trade.
	 * @param options -
	 * @param options.item_ids_offer -
	 * @param options.item_ids_request -
	 * @param options.user_id -
	 * @returns =
	 */
	create(options: {
		item_ids_offer?: number[];
		item_ids_request?: number[];
		user_id: number;
	}): Promise<ApiResponse<ObjectTradeId>> {
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

	/**
	 * Accept incoming trade.
	 * @param trade_id -
	 * @returns =
	 */
	accept(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.accept',
			data: {
				trade_id,
			},
			valiResponseSchema: v.void(),
		});
	}

	/**
	 * Decline incoming trade.
	 * @param trade_id -
	 * @returns =
	 */
	decline(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.cancel',
			data: {
				trade_id,
			},
			valiResponseSchema: v.void(),
		});
	}

	/**
	 * Revoke outgoing trade.
	 * @param trade_id -
	 * @returns =
	 */
	revoke(trade_id: number): Promise<ApiResponse<void>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.revoke',
			data: {
				trade_id,
			},
			valiResponseSchema: v.void(),
		});
	}

	/**
	 * Returns list of incoming trades.
	 * @param options -
	 * @param options.offset -
	 * @param options.count -
	 * @returns =
	 */
	getIncoming(options: {
		offset?: number;
		count?: number;
	}): Promise<ApiResponse<ObjectTradeList>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'trades.getIncome',
			data: options,
			valiResponseSchema: valiObjectTradeListSchema,
		});
	}

	/**
	 * Returns list of outgoing trades.
	 * @param options -
	 * @param options.offset -
	 * @param options.count -
	 * @returns =
	 */
	getOutgoing(options: {
		offset?: number;
		count?: number;
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
		offset?: number;
		count?: number;
	}): Promise<ApiResponse<ObjectTradeList>>;
	/**
	 * Get the history of trades specified user.
	 * @param user_id - The user ID.
	 * @param options -
	 * @param options.count - The count of trades to return.
	 * @param options.offset - The offset of the trades to return.
	 * @returns The history of trades.
	 */
	history(
		user_id: number,
		options?: {
			offset?: number;
			count?: number;
		},
	): Promise<ApiResponse<ObjectTradeList>>;
	history(
		arg0?:
			| number
			| {
					offset?: number;
					count?: number;
			  },
		arg1?: {
			offset?: number;
			count?: number;
		},
	): Promise<ApiResponse<ObjectTradeList>> {
		let api_method = 'trades.history';
		const data =
			typeof arg0 === 'number'
				? {
						user_id: arg0,
						...arg1,
					}
				: arg0;

		if (data !== undefined && 'user_id' in data) {
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
