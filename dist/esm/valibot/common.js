import * as v from 'valibot';
/**
 * Creates bit schema.
 * @param default_value -
 * @returns -
 */
export function bit(default_value) {
    return v.pipe(v.optional(v.picklist([0, 1]), default_value), v.transform((value) => value === 1));
}
export const positiveNumberSchema = v.pipe(v.number(), v.minValue(1));
export const nonNegativeNumberSchema = v.pipe(v.number(), v.minValue(0));
export const nonEmptyStringSchema = v.pipe(v.string(), v.minLength(1));
