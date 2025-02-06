import * as v from 'valibot';

export const bitSchema = v.pipe(
	v.optional(
		v.literal(1),
	),
	v.transform(
		(value) => value === 1,
	),
);

export const positiveNumberSchema = v.pipe(
	v.number(),
	v.minValue(1),
);

export const nonNegativeNumberSchema = v.pipe(
	v.number(),
	v.minValue(0),
);

export const nonEmptyStringSchema = v.pipe(
	v.string(),
	v.minLength(1),
);
