import { type M1 } from '../m1.js';
import { type User, type UserShort } from '../valibot/users.js';
import { type ApiResponse } from '../types.js';
export declare class M1ApiUsers {
    protected baseClient: M1;
    constructor(baseClient: M1);
    /**
     * Returns current user.
     * @returns -
     */
    get(): Promise<ApiResponse<User>>;
    /**
     * Returns a user by ID or domain.
     * @param user_id -
     * @returns -
     */
    get(user_id: number | string): Promise<ApiResponse<User>>;
    /**
     * Returns users by IDs or domains.
     * @param user_ids -
     * @returns -
     */
    get(user_ids: (number | string)[] | Set<number | string> | IterableIterator<number | string>): Promise<ApiResponse<Map<number, User>>>;
    /**
     * Returns current user in short form.
     * @param user_ids -
     * @returns -
     */
    get(options: {
        short: true;
    }): Promise<ApiResponse<UserShort>>;
    /**
     * Returns a user by ID or domain in short form.
     * @param user_ids -
     * @returns -
     */
    get(user_id: number | string, options: {
        short: true;
    }): Promise<ApiResponse<UserShort>>;
    /**
     * Returns users by IDs or domains in short form.
     * @param user_ids -
     * @returns -
     */
    get(user_ids: (number | string)[], options: {
        short: true;
    }): Promise<ApiResponse<Map<number, UserShort>>>;
}
