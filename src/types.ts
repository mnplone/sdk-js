
export type Dictionary<T> = Record<string, T>;

export type M1APIResponseData = Dictionary<unknown> | unknown[];

export interface M1APIErrorResponse {
	code: number;
	description: string;
	data?: Dictionary<unknown>;
}

export interface M1APISuccessResponse<T extends M1APIResponseData> {
	code: 0;
	data: T;
}

export type M1APIResponse<T extends M1APIResponseData> =
	| M1APISuccessResponse<T>
	| M1APIErrorResponse
	| T;

export interface UserShort {
	user_id: number;
	domain?: string;
	approved?: 0 | 1;
	nick: string;
	gender: 0 | 1;
	avatar: string;
	avatar_key: string;
	online?: 0 | 1;
	current_game?: {
		gs_id: string,
		game_id: string,
	};
	rank: {
		hidden: 0 | 1,
	} | {
		id: number,
		pts: number,
	};
	vip?: 0 | 1;
	bot?: 0 | 1;
	bot_owner?: number;
	moderator?: 0 | 1;
}

export interface User extends UserShort {
	nicks_old: string[];
	profile_cover?: string;
	social_vk?: number;
	games?: number;
	games_wins?: number;
	xp?: number;
	xp_level?: number;
	badge?: Item;
	friendship?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	muted?: 0 | 1;
	mfp_ban_history?: Dictionary<unknown>;
}

export interface Item {
	id: number;
}

