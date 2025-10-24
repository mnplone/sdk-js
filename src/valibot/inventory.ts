import type { If } from 'type-fest';
import * as v from 'valibot';
import {
	valiObjectItemSchema,
	valiObjectThingSchema,
} from './items.js';
import { valiObjectUserSchema } from './users.js';

// Base collections schema
const valiCollectionSchema = v.object({
	collection_id: v.number(),
	title: v.string(),
});

// Thing types schema (only for legacy)
const valiThingTypeSchema = v.object({
	id: v.number(),
	title: v.string(),
});

// Qualities schema (only for legacy)
const valiQualitySchema = v.object({
	id: v.number(),
	title: v.string(),
	coeff_rent: v.number(),
});

// Equipped schemas
const valiEquippedArraySchema = v.object({
	item_ids_equipped: v.optional(
		v.array(v.number()),
	),
});

const valiEquippedTreeSchema = v.object({
	equipped: v.optional(
		v.object({
			game: v.record(
				v.string(),
				v.object({
					cards: v.record(
						v.string(),
						v.array(v.number()),
					),
					generator: v.number(),
					joke: v.number(),
				}),
			),
		}),
	),
});

export const valiResponseInventoryCraftSchema = v.object({
	item: valiObjectItemSchema,
});
export type ResponseInventoryCraft = v.InferOutput<typeof valiResponseInventoryCraftSchema>;

// Base new response schema (add_legacy=0)
export const valiResponseInventoryGetBaseSchema = v.object({
	count: v.number(),
	collections: v.array(valiCollectionSchema),
	items: v.array(valiObjectItemSchema),
});
export type ResponseInventoryGetBase = v.InferOutput<typeof valiResponseInventoryGetBaseSchema>;

// Legacy response schema (add_legacy=1)
export const valiResponseInventoryGetLegacySchema = v.object({
	count: v.number(),
	collections: v.array(valiCollectionSchema),
	things: v.array(valiObjectThingSchema),
	thing_types: v.optional(v.array(valiThingTypeSchema)),
	qualities: v.optional(v.array(valiQualitySchema)),
});
export type ResponseInventoryGetLegacy = v.InferOutput<typeof valiResponseInventoryGetLegacySchema>;

// Base response with user
export const valiResponseInventoryGetWithUserSchema = v.object({
	...valiResponseInventoryGetBaseSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUser = v.InferOutput<typeof valiResponseInventoryGetWithUserSchema>;

// Legacy response with user
export const valiResponseInventoryGetLegacyWithUserSchema = v.object({
	...valiResponseInventoryGetLegacySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUser = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserSchema>;

// Base with equipped array
export const valiResponseInventoryGetWithEquippedArraySchema = v.object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries,
});
export type ResponseInventoryGetWithEquippedArray = v.InferOutput<typeof valiResponseInventoryGetWithEquippedArraySchema>;

// Base with equipped tree
export const valiResponseInventoryGetWithEquippedTreeSchema = v.object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries,
});
export type ResponseInventoryGetWithEquippedTree = v.InferOutput<typeof valiResponseInventoryGetWithEquippedTreeSchema>;

// Base with user and equipped array
export const valiResponseInventoryGetWithUserAndEquippedArraySchema = v.object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUserAndEquippedArray = v.InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedArraySchema>;

// Base with user and equipped tree
export const valiResponseInventoryGetWithUserAndEquippedTreeSchema = v.object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUserAndEquippedTree = v.InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedTreeSchema>;

// Legacy with equipped array
export const valiResponseInventoryGetLegacyWithEquippedArraySchema = v.object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries,
});
export type ResponseInventoryGetLegacyWithEquippedArray = v.InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedArraySchema>;

// Legacy with equipped tree
export const valiResponseInventoryGetLegacyWithEquippedTreeSchema = v.object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries,
});
export type ResponseInventoryGetLegacyWithEquippedTree = v.InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedTreeSchema>;

// Legacy with user and equipped array
export const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = v.object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUserAndEquippedArray = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema>;

// Legacy with user and equipped tree
export const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = v.object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUserAndEquippedTree = v.InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema>;

// Conditional type for equipped parameter
type EquippedResponse<
	E extends 'array' | 'tree' | undefined,
	Base,
	WithArray,
	WithTree,
> = E extends 'array'
	? WithArray
	: E extends 'tree'
		? WithTree
		: Base;

// Main conditional type similar to friends.ts
export type ResponseInventoryGet<
	OL extends boolean = true,
	OU extends boolean = false,
	OE extends 'array' | 'tree' | undefined = undefined,
> = If<
	OL,
	// Legacy mode (add_legacy=1)
	If<
		OU,
		// With user
		EquippedResponse<
			OE,
			ResponseInventoryGetLegacyWithUser,
			ResponseInventoryGetLegacyWithUserAndEquippedArray,
			ResponseInventoryGetLegacyWithUserAndEquippedTree
		>,
		// Without user
		EquippedResponse<
			OE,
			ResponseInventoryGetLegacy,
			ResponseInventoryGetLegacyWithEquippedArray,
			ResponseInventoryGetLegacyWithEquippedTree
		>
	>,
	// New mode (add_legacy=0)
	If<
		OU,
		// With user
		EquippedResponse<
			OE,
			ResponseInventoryGetWithUser,
			ResponseInventoryGetWithUserAndEquippedArray,
			ResponseInventoryGetWithUserAndEquippedTree
		>,
		// Without user
		EquippedResponse<
			OE,
			ResponseInventoryGetBase,
			ResponseInventoryGetWithEquippedArray,
			ResponseInventoryGetWithEquippedTree
		>
	>
>;
