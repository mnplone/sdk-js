import * as v from 'valibot';
/**
 * Creates bit schema.
 * @param default_value -
 * @returns -
 */
export declare function bit(default_value: 0 | 1): v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
export declare const positiveNumberSchema: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
export declare const nonNegativeNumberSchema: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
export declare const nonEmptyStringSchema: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
