import {
	optional,
	picklist,
	transform,
	pipe,
} from 'valibot';

/**
 * Creates bit schema.
 * @param default_value -
 * @returns -
 */
export function bit(default_value: 0 | 1) {
	return pipe(
		optional(
			picklist([ 0, 1 ]),
			default_value,
		),
		transform(
			(value) => value === 1,
		),
	);
}
