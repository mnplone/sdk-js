import * as v from 'valibot';
export declare const valiObjectUserShortSchema: v.SchemaWithPipe<[v.ObjectSchema<{
    readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly domain: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 2, undefined>]>, never>;
    readonly approved: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 2, undefined>]>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly online: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
        readonly game_id: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    }, undefined>, never>;
    readonly rank: v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.UnionSchema<[v.LiteralSchema<1, undefined>], undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly vip: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly moderator: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    user_id: number;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    rank: {
        hidden: 1;
    } | {
        id: number;
        pts: number;
    };
    approved: boolean;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        game_id: string;
    } | undefined;
    bot_owner?: number | undefined;
}, {
    bot: {
        owner_user_id: number;
    } | null;
    user_id: number;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    rank: {
        hidden: 1;
    } | {
        id: number;
        pts: number;
    };
    approved: boolean;
    online: boolean;
    vip: boolean;
    moderator: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        game_id: string;
    } | undefined;
}>]>;
export declare const valiObjectUserSchema: v.SchemaWithPipe<[v.ObjectSchema<{
    readonly nicks_old: v.ArraySchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 2, undefined>]>, undefined>;
    readonly profile_cover: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
    readonly social_vk: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly games: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly games_wins: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly xp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly xp_level: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
    readonly badge: v.ObjectSchema<{
        readonly thing_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly owned_time: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly can_give: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
        readonly can_sell: v.OptionalSchema<v.UnionSchema<[v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, v.LiteralSchema<-1, undefined>], undefined>, never>;
        readonly souvenir: v.OptionalSchema<v.StringSchema<undefined>, never>;
        readonly autograph: v.OptionalSchema<v.ObjectSchema<{
            readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
            readonly text: v.OptionalSchema<v.StringSchema<undefined>, never>;
        }, undefined>, never>;
        readonly moneybox: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
            readonly transactions: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
            readonly money: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
        }, undefined>, v.ObjectSchema<{
            readonly numbers: v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>;
        }, undefined>, v.ObjectSchema<{
            readonly count: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>;
        }, undefined>], undefined>, never>;
        readonly uses_left: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
        readonly uses_origin: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
        readonly variants: v.OptionalSchema<v.ObjectSchema<{
            readonly id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
            readonly is_default: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_selected: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly is_unlocked: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly image: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
            readonly description: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>, never>;
            readonly unlock: v.OptionalSchema<v.ObjectSchema<{
                readonly moneybox: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
                readonly buy_tokens_sp: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
                readonly buy_tokens_cmpt: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
            }, undefined>, never>;
        }, undefined>, never>;
        readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
        readonly thing_prototype_status: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
        readonly thing_type: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>;
        readonly image: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
        readonly title: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
        readonly description: v.StringSchema<undefined>;
        readonly group: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 9, undefined>]>, never>;
        readonly quality: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 5, undefined>]>;
        readonly collection: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        readonly twin_thing_prototype_id: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
        readonly delete_price: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        readonly can_be_upgraded: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly buy_cost: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>]>, never>;
        readonly key: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
        readonly cases: v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, undefined>, never>;
        readonly drop: v.OptionalSchema<v.ObjectSchema<{
            readonly thing_prototype_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
            readonly hidden: v.OptionalSchema<v.BooleanSchema<undefined>, never>;
        }, undefined>, never>;
    }, undefined>;
    readonly friendship: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 6, undefined>]>, never>;
    readonly muted: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly mfp_ban_history: v.OptionalSchema<v.RecordSchema<v.StringSchema<undefined>, v.UnknownSchema, undefined>, never>;
    readonly user_id: v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>;
    readonly domain: v.OptionalSchema<v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 2, undefined>]>, never>;
    readonly approved: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly nick: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 2, undefined>]>;
    readonly gender: v.UnionSchema<[v.LiteralSchema<0, undefined>, v.LiteralSchema<1, undefined>], undefined>;
    readonly avatar: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    readonly online: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly current_game: v.OptionalSchema<v.ObjectSchema<{
        readonly gs_id: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
        readonly game_id: v.SchemaWithPipe<[v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>]>;
    }, undefined>, never>;
    readonly rank: v.UnionSchema<[v.ObjectSchema<{
        readonly hidden: v.UnionSchema<[v.LiteralSchema<1, undefined>], undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly id: v.NumberSchema<undefined>;
        readonly pts: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly vip: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly bot_owner: v.OptionalSchema<v.SchemaWithPipe<[v.NumberSchema<undefined>, v.MinValueAction<number, 1, undefined>]>, never>;
    readonly moderator: v.SchemaWithPipe<[v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>, v.TransformAction<{
    user_id: number;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    rank: {
        hidden: 1;
    } | {
        id: number;
        pts: number;
    };
    approved: boolean;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    nicks_old: string[];
    badge: {
        description: string;
        image: string;
        thing_prototype_status: 0 | 1;
        thing_type: number;
        quality: number;
        thing_prototype_id: number;
        title: string;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        key?: number | undefined;
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
            description?: string | undefined;
            image?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        } | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    };
    muted: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        game_id: string;
    } | undefined;
    bot_owner?: number | undefined;
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    games?: number | undefined;
    games_wins?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        [x: string]: unknown;
    } | undefined;
}, {
    games: {
        total: number | undefined;
        won: number | undefined;
    };
    user_id: number;
    nick: string;
    gender: 0 | 1;
    avatar: string;
    rank: {
        hidden: 1;
    } | {
        id: number;
        pts: number;
    };
    approved: boolean;
    online: boolean;
    vip: boolean;
    bot: boolean;
    moderator: boolean;
    nicks_old: string[];
    badge: {
        description: string;
        image: string;
        thing_prototype_status: 0 | 1;
        thing_type: number;
        quality: number;
        thing_prototype_id: number;
        title: string;
        can_be_upgraded: boolean;
        user_id: number;
        thing_id: number;
        owned_time: number;
        key?: number | undefined;
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
            description?: string | undefined;
            image?: string | undefined;
            unlock?: {
                moneybox?: number | undefined;
                buy_tokens_sp?: number | undefined;
                buy_tokens_cmpt?: number | undefined;
            } | undefined;
        } | undefined;
        can_give?: number | undefined;
        can_sell?: number | undefined;
        souvenir?: string | undefined;
        autograph?: {
            user_id: number;
            text?: string | undefined;
        } | undefined;
        uses_left?: number | undefined;
        uses_origin?: number | undefined;
    };
    muted: boolean;
    domain?: string | undefined;
    current_game?: {
        gs_id: string;
        game_id: string;
    } | undefined;
    bot_owner?: number | undefined;
    profile_cover?: string | undefined;
    social_vk?: number | undefined;
    xp?: number | undefined;
    xp_level?: number | undefined;
    friendship?: number | undefined;
    mfp_ban_history?: {
        [x: string]: unknown;
    } | undefined;
}>]>;
export type User = v.InferOutput<typeof valiObjectUserSchema>;
export type UserShort = v.InferOutput<typeof valiObjectUserShortSchema>;
