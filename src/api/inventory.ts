/* eslint-disable complexity */
import type { CallMethodOptionsData } from '../m1.js';
import type { ApiResponse } from '../types.js';
import { isRecord } from '../utils.js';
import {
	valiResponseInventoryCraftSchema,
	valiResponseInventoryGetBaseSchema,
	valiResponseInventoryGetWithUserSchema,
	valiResponseInventoryGetLegacySchema,
	valiResponseInventoryGetLegacyWithUserSchema,
	valiResponseInventoryGetWithEquippedArraySchema,
	valiResponseInventoryGetWithEquippedTreeSchema,
	valiResponseInventoryGetWithUserAndEquippedArraySchema,
	valiResponseInventoryGetWithUserAndEquippedTreeSchema,
	valiResponseInventoryGetLegacyWithEquippedArraySchema,
	valiResponseInventoryGetLegacyWithEquippedTreeSchema,
	valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema,
	valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema,
	type ResponseInventoryGet,
	type ResponseInventoryCraft,
} from '../valibot/inventory.js';
import { M1ApiBase } from './base.js';

type InventoryGetOptions<
	OL extends boolean,
	OU extends boolean,
	OE extends 'array' | 'tree' | undefined = undefined,
> = {
	include_stock?: boolean,
	order?: 'time' | 'quality',
	count?: number,
	add_user?: OU,
	add_legacy?: OL,
	add_equipped?: OE,
	shrink?: boolean,
};

export class M1ApiInventory extends M1ApiBase {
	/**
	 * Craft an item.
	 * @param item_ids - The IDs of the items to craft.
	 * @returns The crafted item.
	 */
	craft(item_ids: number[]): Promise<ApiResponse<ResponseInventoryCraft>> {
		return this.baseClient.callMethod({
			http_method: 'POST',
			api_method: 'inventory.craft',
			data: {
				item_ids: item_ids.join(','),
			},
			valiResponseSchema: valiResponseInventoryCraftSchema,
		});
	}

	/**
	 * Returns information about user's inventory.
	 * @param options - The options for the request.
	 * @param options.include_stock - Whether to return stock quality items.
	 * @param options.order - Sort order for items.
	 * @param options.count - Number of items to return.
	 * @param options.add_user - Whether to add user information to the response.
	 * @param options.add_legacy - Whether to embed legacy Thing parameters into Item objects.
	 * @param options.add_equipped - Whether to return equipped items information.
	 * @param options.shrink - Whether to compress identical items into one.
	 * @returns Inventory information.
	 */
	get<
		const OL extends boolean = true,
		const OU extends boolean = false,
		const OE extends 'array' | 'tree' | undefined = undefined,
	>(options?: InventoryGetOptions<OL, OU, OE>): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
	/**
	 * Returns information about specified user's inventory.
	 * @param user_id - The ID or domain of the user whose inventory to get.
	 * @param options - The options for the request.
	 * @param options.include_stock - Whether to return stock quality items.
	 * @param options.order - Sort order for items.
	 * @param options.count - Number of items to return.
	 * @param options.add_user - Whether to add user information to the response.
	 * @param options.add_legacy - Whether to embed legacy Thing parameters into Item objects.
	 * @param options.add_equipped - Whether to return equipped items information.
	 * @param options.shrink - Whether to compress identical items into one.
	 * @returns Inventory information.
	 */
	get<
		const OL extends boolean = true,
		const OU extends boolean = false,
		const OE extends 'array' | 'tree' | undefined = undefined,
	>(
		user_id: number | string,
		options?: InventoryGetOptions<OL, OU, OE>,
	): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
	get<
		const OL extends boolean = true,
		const OU extends boolean = false,
		const OE extends 'array' | 'tree' | undefined = undefined,
	>(
		arg0?: number | string | InventoryGetOptions<OL, OU, OE>,
		arg1?: InventoryGetOptions<OL, OU, OE>,
	): Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>> {
		const user_id = typeof arg0 === 'number' || typeof arg0 === 'string'
			? arg0
			: undefined;
		const options = isRecord(arg0) ? arg0 : arg1;

		const add_legacy = options?.add_legacy ?? true; // По умолчанию true согласно документации
		const add_user = options?.add_user ?? false;
		const add_equipped = options?.add_equipped;

		const data: CallMethodOptionsData = {
			user_id,
			include_stock: options?.include_stock ? 1 : undefined,
			order: options?.order,
			count: options?.count,
			add_user: add_user ? 1 : undefined,
			add_legacy: Number(add_legacy),
			add_equipped,
			shrink: options?.shrink ? 1 : undefined,
		};

		// Determine the correct schema based on options
		let valiResponseSchema;

		if (add_legacy === false) {
			// Legacy mode
			if (add_user) {
				if (add_equipped === 'array') {
					valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedArraySchema;
				}
				else if (add_equipped === 'tree') {
					valiResponseSchema = valiResponseInventoryGetWithUserAndEquippedTreeSchema;
				}
				else {
					valiResponseSchema = valiResponseInventoryGetWithUserSchema;
				}
			}
			else if (add_equipped === 'array') {
				valiResponseSchema = valiResponseInventoryGetWithEquippedArraySchema;
			}
			else if (add_equipped === 'tree') {
				valiResponseSchema = valiResponseInventoryGetWithEquippedTreeSchema;
			}
			else {
				valiResponseSchema = valiResponseInventoryGetBaseSchema;
			}
		}
		else if (add_user) {
			// New mode with user
			if (add_equipped === 'array') {
				valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema;
			}
			else if (add_equipped === 'tree') {
				valiResponseSchema = valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema;
			}
			else {
				valiResponseSchema = valiResponseInventoryGetLegacyWithUserSchema;
			}
		}
		else if (add_equipped === 'array') {
			valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedArraySchema;
		}
		else if (add_equipped === 'tree') {
			valiResponseSchema = valiResponseInventoryGetLegacyWithEquippedTreeSchema;
		}
		else {
			valiResponseSchema = valiResponseInventoryGetLegacySchema;
		}

		return this.baseClient.callMethod({
			http_method: 'GET',
			api_method: 'inventory.get',
			data,
			valiResponseSchema,
		}) as Promise<ApiResponse<ResponseInventoryGet<OL, OU, OE>>>;
	}
}
