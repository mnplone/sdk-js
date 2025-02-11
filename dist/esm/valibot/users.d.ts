import { InferOutput } from 'valibot';
export declare const valiObjectUserShortSchema: import("valibot").SchemaWithPipe<[import("valibot").ObjectSchema<{
    readonly user_id: import("valibot").NumberSchema<undefined>;
    readonly domain: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
    readonly approved: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly nick: import("valibot").StringSchema<undefined>;
    readonly gender: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
    readonly avatar: import("valibot").StringSchema<undefined>;
    readonly online: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly current_game: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly gs_id: import("valibot").StringSchema<undefined>;
        readonly gs_game_id: import("valibot").StringSchema<undefined>;
    }, undefined>, never>;
    readonly rank: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").ObjectSchema<{
        readonly hidden: import("valibot").LiteralSchema<1, undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly qual: import("valibot").NumberSchema<undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly expired: import("valibot").LiteralSchema<1, undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly pts: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, never>;
    readonly vip: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly bot: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly moderator: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
}, undefined>, import("valibot").TransformAction<{
    user_id: number;
    gender: 0 | 1;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    bot_owner?: number | undefined;
}, Omit<{
    user_id: number;
    gender: 0 | 1;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    bot_owner?: number | undefined;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>]>;
export declare const valiObjectUserSchema: import("valibot").SchemaWithPipe<[import("valibot").ObjectSchema<{
    readonly nicks_old: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly profile_cover: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
    readonly social_vk: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly games: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly games_wins: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly xp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly xp_level: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly badge: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly thing_id: import("valibot").NumberSchema<undefined>;
        readonly user_id: import("valibot").NumberSchema<undefined>;
        readonly owned_time: import("valibot").NumberSchema<undefined>;
        readonly can_give: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly can_sell: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly souvenir: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
        readonly autograph: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly user_id: import("valibot").NumberSchema<undefined>;
            readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
        }, undefined>, never>;
        readonly moneybox: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").ObjectSchema<{
            readonly transactions: import("valibot").NumberSchema<undefined>;
            readonly money: import("valibot").NumberSchema<undefined>;
        }, undefined>, import("valibot").ObjectSchema<{
            readonly numbers: import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, import("valibot").ObjectSchema<{
            readonly count: import("valibot").NumberSchema<undefined>;
        }, undefined>], undefined>, never>;
        readonly uses_left: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly uses_origin: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly variants: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly id: import("valibot").NumberSchema<undefined>;
            readonly is_default: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
            readonly is_selected: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
            readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
            readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
            readonly unlock: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly moneybox: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
                readonly buy_tokens_sp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
                readonly buy_tokens_cmpt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
            }, undefined>, never>;
        }, undefined>, undefined>, never>;
        readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
        readonly thing_prototype_status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
        readonly thing_type: import("valibot").NumberSchema<undefined>;
        readonly image: import("valibot").StringSchema<undefined>;
        readonly title: import("valibot").StringSchema<undefined>;
        readonly description: import("valibot").StringSchema<undefined>;
        readonly group: import("valibot").OptionalSchema<import("valibot").SchemaWithPipe<[import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, never>, import("valibot").TransformAction<number | null, number | undefined>]>, never>;
        readonly quality: import("valibot").NumberSchema<undefined>;
        readonly collection: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly twin_thing_prototype_id: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, never>;
        readonly delete_price: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly can_be_upgraded: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly key: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
        readonly cases: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, never>;
        readonly drop: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly thing_prototype_id: import("valibot").NumberSchema<undefined>;
            readonly hidden: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, never>;
        }, undefined>, never>;
    }, undefined>, never>;
    readonly friendship: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly muted: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly mfp_ban_history: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<0, undefined>;
        readonly count: import("valibot").NumberSchema<undefined>;
        readonly last_ban: import("valibot").NumberSchema<undefined>;
        readonly ts_last_ban: import("valibot").NumberSchema<undefined>;
        readonly ts_end: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<1, undefined>;
        readonly ts_end: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, never>;
    readonly user_id: import("valibot").NumberSchema<undefined>;
    readonly domain: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
    readonly approved: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly nick: import("valibot").StringSchema<undefined>;
    readonly gender: import("valibot").UnionSchema<[import("valibot").LiteralSchema<0, undefined>, import("valibot").LiteralSchema<1, undefined>], undefined>;
    readonly avatar: import("valibot").StringSchema<undefined>;
    readonly online: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly current_game: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly gs_id: import("valibot").StringSchema<undefined>;
        readonly gs_game_id: import("valibot").StringSchema<undefined>;
    }, undefined>, never>;
    readonly rank: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").ObjectSchema<{
        readonly hidden: import("valibot").LiteralSchema<1, undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly qual: import("valibot").NumberSchema<undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly expired: import("valibot").LiteralSchema<1, undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly id: import("valibot").NumberSchema<undefined>;
        readonly pts: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, never>;
    readonly vip: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly bot: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, never>;
    readonly moderator: import("valibot").SchemaWithPipe<[import("valibot").OptionalSchema<import("valibot").PicklistSchema<[0, 1], undefined>, 0 | 1>, import("valibot").TransformAction<0 | 1, boolean>]>;
}, undefined>, import("valibot").TransformAction<{
    user_id: number;
    gender: 0 | 1;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    nicks_old: string[];
    muted: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    bot_owner?: number | undefined;
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        image: string;
        description: string;
        thing_prototype_status: 0 | 1;
        thing_prototype_id: number;
        thing_type: number;
        title: string;
        quality: number;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        moneybox?: {
            transactions: number;
            money: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        group?: number | undefined;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | undefined;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        last_ban: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
}, Omit<{
    user_id: number;
    gender: 0 | 1;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    nicks_old: string[];
    muted: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    bot_owner?: number | undefined;
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        image: string;
        description: string;
        thing_prototype_status: 0 | 1;
        thing_prototype_id: number;
        thing_type: number;
        title: string;
        quality: number;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        moneybox?: {
            transactions: number;
            money: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        group?: number | undefined;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | undefined;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        last_ban: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}>, import("valibot").TransformAction<Omit<{
    user_id: number;
    gender: 0 | 1;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    nicks_old: string[];
    muted: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    bot_owner?: number | undefined;
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        image: string;
        description: string;
        thing_prototype_status: 0 | 1;
        thing_prototype_id: number;
        thing_type: number;
        title: string;
        quality: number;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        moneybox?: {
            transactions: number;
            money: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        group?: number | undefined;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | undefined;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        last_ban: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
}, "bot_owner" | "bot"> & {
    bot: {
        owner_user_id: number;
    } | null;
}, {
    games: {
        total: number | undefined;
        won: number | undefined;
    };
    user_id: number;
    domain?: string | undefined;
    gender: 0 | 1;
    current_game?: {
        gs_id: string;
        gs_game_id: string;
    } | undefined;
    rank?: {
        hidden: 1;
    } | {
        qual: number;
    } | {
        expired: 1;
    } | {
        id: number;
        pts: number;
    } | undefined;
    approved: boolean;
    nick: string;
    avatar: string;
    online: boolean;
    vip: boolean;
    moderator: boolean;
    nicks_old: string[];
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    badge?: {
        image: string;
        description: string;
        thing_prototype_status: 0 | 1;
        thing_prototype_id: number;
        thing_type: number;
        title: string;
        quality: number;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        moneybox?: {
            transactions: number;
            money: number;
        } | {
            numbers: number[];
        } | {
            count: number;
        } | undefined;
        group?: number | undefined;
        collection?: number | undefined;
        twin_thing_prototype_id?: number[] | undefined;
        delete_price?: number | undefined;
        buy_cost?: number | undefined;
        key?: number | undefined;
        cases?: number[] | undefined;
        drop?: {
            thing_prototype_id: number;
            hidden?: boolean | undefined;
        } | undefined;
        variants?: {
            id: number;
            is_default: boolean;
            is_selected: boolean;
            is_unlocked: boolean;
            image?: string | undefined;
            description?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        }[] | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    } | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        type: 0;
        count: number;
        last_ban: number;
        ts_last_ban: number;
        ts_end?: number | undefined;
    } | {
        type: 1;
        ts_end: number;
    } | undefined;
    muted: boolean;
    bot: {
        owner_user_id: number;
    } | null;
}>]>;
export type User = InferOutput<typeof valiObjectUserSchema>;
export type UserShort = InferOutput<typeof valiObjectUserShortSchema>;
