import * as v from 'valibot';
import type { ValiBaseSchema } from './types.js';

/**
 * Check if a value is a record.
 * @param value -
 * @returns -
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object'
		&& value !== null
		&& !Array.isArray(value)
		&& value.constructor === Object
		&& Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Check if a value is an iterator.
 * @param value -
 * @returns -
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isIterableIterator(value: any): value is IterableIterator<unknown> {
	return value !== null
		&& typeof value === 'object'
		&& typeof Symbol.iterator in value
		&& typeof value[Symbol.iterator] === 'function'
		&& typeof value.next === 'function';
}

/**
 * Parses value with schema like valibot, but prints issue paths.
 * @param schema Valibot schema.
 * @param value Value to parse.
 * @returns Parsed value.
 */
export function parseWithNotice<const V extends ValiBaseSchema>(schema: V, value: unknown): v.InferOutput<V> {
	const result = v.safeParse(schema, value);

	if (result.success) {
		return result.output;
	}

	// eslint-disable-next-line no-console
	console.error(v.summarize(result.issues));

	throw new TypeError('Valibot found issues.');
}

/**
 *
 * @param string -
 * @returns -
 */
export function maskString(string: string) {
	if (string.length < 6) {
		return string;
	}

	return `${string.slice(0, 3)}***${string.slice(-3)}`;
}
