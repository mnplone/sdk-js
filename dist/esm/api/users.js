import { array, pipe, transform, } from 'valibot';
import { M1ApiBase } from './base.js';
import { valiObjectUserSchema, valiObjectUserShortSchema, } from '../valibot/users.js';
import { isIterableIterator, isRecord, } from '../utils.js';
// eslint-disable-next-line jsdoc/require-jsdoc
function transformer(value) {
    const result = new Map();
    for (const user of value) {
        result.set(user.user_id, user);
    }
    return result;
}
const valiApiResponseUsersGetSchema = pipe(array(valiObjectUserSchema), transform(transformer));
const valiApiResponseUsersGetShortSchema = pipe(array(valiObjectUserShortSchema), transform(transformer));
const valiApiResponseUsersGetOneSchema = pipe(array(valiObjectUserSchema), transform((value) => value[0]));
const valiApiResponseUsersGetShortOneSchema = pipe(array(valiObjectUserShortSchema), transform((value) => value[0]));
export class M1ApiUsers extends M1ApiBase {
    get(arg0, arg1) {
        let user_ids = null;
        let is_multiple_users = false;
        let options;
        if (isRecord(arg0)) {
            options = arg1;
        }
        else if (isIterableIterator(arg0)
            || arg0 instanceof Set) {
            user_ids = [...arg0];
            is_multiple_users = true;
        }
        else if (Array.isArray(arg0)) {
            user_ids = arg0;
            is_multiple_users = true;
        }
        else if (arg0 !== undefined) {
            user_ids = [arg0];
        }
        if (isRecord(arg1)) {
            options = arg1;
        }
        return this.baseClient.callMethod({
            http_method: 'GET',
            api_method: 'users.get',
            data: {
                user_ids: user_ids
                    ? user_ids.join(',')
                    : undefined,
            },
            valiResponseSchema: options?.short === true
                ? (is_multiple_users
                    ? valiApiResponseUsersGetShortSchema
                    : valiApiResponseUsersGetShortOneSchema)
                : (is_multiple_users
                    ? valiApiResponseUsersGetSchema
                    : valiApiResponseUsersGetOneSchema),
        });
    }
}
