import * as v from 'valibot';

const symbol = Object.create(null);

/**
 * Creates absent schema.
 *
 * This schema requires a property from the object to be absent in input and sets it to the specified value in output.
 * @param default_value The value to set in output.
 * @returns The absent schema.
 */
export function absent<T>(default_value: T) {
	return v.pipe(
		v.exactOptional(v.unknown(), symbol),
		v.check((value) => value === symbol),
		v.transform(() => default_value),
	);
}
