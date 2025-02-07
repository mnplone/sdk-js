/**
 * Check if a value is a record.
 * @param value -
 * @returns -
 */
export function isRecord(value) {
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
export function isIterableIterator(value) {
    return value !== null
        && typeof value === 'object'
        && typeof Symbol.iterator in value
        && typeof value[Symbol.iterator] === 'function'
        && typeof value.next === 'function';
}
