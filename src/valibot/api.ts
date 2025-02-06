import * as v from 'valibot';

export const M1ApiResponseDataSchema = v.union([
	v.record(
		v.string(),
		v.unknown(),
	),
	v.array(
		v.unknown(),
	),
]);

export const M1ApiErrorSchema = v.object({
	code: v.number(),
	description: v.string(),
	data: v.optional(
		v.record(
			v.string(),
			v.unknown(),
		),
	),
});

export const M1ApiOldResponseSchema = v.object({
	code: v.number(),
	description: v.optional(
		v.string(),
	),
	data: v.optional(
		M1ApiResponseDataSchema,
	),
});

export type M1ApiResponseData = v.InferOutput<typeof M1ApiResponseDataSchema>;
export type M1ApiError = v.InferOutput<typeof M1ApiErrorSchema>;
export type M1ApiOldResponse = v.InferOutput<typeof M1ApiOldResponseSchema>;
