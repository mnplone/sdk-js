import * as v from 'valibot';

/**
 * Creates bit schema.
 * @param default_value -
 * @returns -
 */
export function bit(default_value: 0 | 1) {
	return v.pipe(
		v.optional(v.picklist([0, 1]), default_value),
		v.transform((value) => value === 1),
	);
}
