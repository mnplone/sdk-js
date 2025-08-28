import type { If } from 'type-fest';
import {
	object,
	string,
	number,
	array,
	optional,
	record,
	type InferOutput,
} from 'valibot';
import {
	valiObjectItemSchema,
	valiObjectThingSchema,
} from './items.js';
import { valiObjectUserSchema } from './users.js';

// Base collections schema
const valiCollectionSchema = object({
	collection_id: number(),
	title: string(),
});

// Thing types schema (only for legacy)
const valiThingTypeSchema = object({
	id: number(),
	title: string(),
});

// Qualities schema (only for legacy)
const valiQualitySchema = object({
	id: number(),
	title: string(),
	coeff_rent: number(),
});

// Equipped schemas
const valiEquippedArraySchema = object({
	item_ids_equipped: array(number()),
});

const valiEquippedTreeSchema = object({
	equipped: object({
		game: record(
			string(),
			object({
				cards: record(
					string(),
					array(number()),
				),
				generator: number(),
				joke: number(),
			}),
		),
	}),
});

// Base new response schema (add_legacy=0)
export const valiResponseInventoryGetBaseSchema = object({
	count: number(),
	collections: array(valiCollectionSchema),
	items: array(valiObjectItemSchema),
});
export type ResponseInventoryGetBase = InferOutput<typeof valiResponseInventoryGetBaseSchema>;

// Legacy response schema (add_legacy=1)
export const valiResponseInventoryGetLegacySchema = object({
	count: number(),
	collections: array(valiCollectionSchema),
	things: array(valiObjectThingSchema),
	thing_types: optional(array(valiThingTypeSchema)),
	qualities: optional(array(valiQualitySchema)),
});
export type ResponseInventoryGetLegacy = InferOutput<typeof valiResponseInventoryGetLegacySchema>;

// Base response with user
export const valiResponseInventoryGetWithUserSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUser = InferOutput<typeof valiResponseInventoryGetWithUserSchema>;

// Legacy response with user
export const valiResponseInventoryGetLegacyWithUserSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUser = InferOutput<typeof valiResponseInventoryGetLegacyWithUserSchema>;

// Base with equipped array
export const valiResponseInventoryGetWithEquippedArraySchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries,
});
export type ResponseInventoryGetWithEquippedArray = InferOutput<typeof valiResponseInventoryGetWithEquippedArraySchema>;

// Base with equipped tree
export const valiResponseInventoryGetWithEquippedTreeSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries,
});
export type ResponseInventoryGetWithEquippedTree = InferOutput<typeof valiResponseInventoryGetWithEquippedTreeSchema>;

// Base with user and equipped array
export const valiResponseInventoryGetWithUserAndEquippedArraySchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedArraySchema>;

// Base with user and equipped tree
export const valiResponseInventoryGetWithUserAndEquippedTreeSchema = object({
	...valiResponseInventoryGetBaseSchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetWithUserAndEquippedTreeSchema>;

// Legacy with equipped array
export const valiResponseInventoryGetLegacyWithEquippedArraySchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries,
});
export type ResponseInventoryGetLegacyWithEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedArraySchema>;

// Legacy with equipped tree
export const valiResponseInventoryGetLegacyWithEquippedTreeSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries,
});
export type ResponseInventoryGetLegacyWithEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithEquippedTreeSchema>;

// Legacy with user and equipped array
export const valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedArraySchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUserAndEquippedArray = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedArraySchema>;

// Legacy with user and equipped tree
export const valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema = object({
	...valiResponseInventoryGetLegacySchema.entries,
	...valiEquippedTreeSchema.entries,
	user: valiObjectUserSchema,
});
export type ResponseInventoryGetLegacyWithUserAndEquippedTree = InferOutput<typeof valiResponseInventoryGetLegacyWithUserAndEquippedTreeSchema>;

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
