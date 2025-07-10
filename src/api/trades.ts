import { void as voidSchema } from 'valibot';
import { M1ApiBase } from './base.js';
import { type ApiResponse } from '../types.js';
import {
	valiObjectTradeIdSchema,
	valiObjectTradeListSchema,
	type ObjectTradeId,
	type ObjectTradeList,
} from '../valibot/trades.js';

export class M1ApiTrades extends M1ApiBase {
	create(options: {
		item_ids_to?: number[],
		item_ids_from?: number[],
		user_id: number,
	}): Promise<ApiResponse<ObjectTradeId>> {
		if (param0.item_ids_to === undefined && param0.item_ids_from === undefined) {
			throw new Error('One of item_ids_to or item_ids_from is required');
		}

		const data = {
			user_id: param0.user_id,
		};

		if (param0.item_ids_to !== undefined) {
			data.thing_ids_to = param0.item_ids_to.join(',');
		}

		if (param0.item_ids_from !== undefined) {
			data.thing_ids_from = param0.item_ids_from.join(',');
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
	 * @param user_id - The user ID.
	 * @param param1 -
	 * @param param1.count - The count of trades to return.
	 * @param param1.offset - The offset of the trades to return.
	 * @returns The history of trades.
	 */
	history(options?: {
		count?: number,
		offset?: number,
	}): Promise<ApiResponse<ObjectTradeList>>;
	history(
		user_id: number,
		options?: {
			count?: number,
			offset?: number,
		},
	): Promise<ApiResponse<ObjectTradeList>>;
	history(
		arg0: number | {
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

		if (typeof param0 === 'number') {
			data.user_id = param0;
			data.count = param1?.count || 20;
			data.offset = param1?.offset || 0;
		}
		else if (typeof param0 === 'object') {
			if (param0.user_id !== undefined) {
				data.user_id = param0.user_id;
			}

			data.count = param0.count || 20;
			data.offset = param0.offset || 0;
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
