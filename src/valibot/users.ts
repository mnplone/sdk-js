import {
	array,
	InferOutput,
	object,
	pipe,
	number,
	optional,
	union,
	literal,
	string,
	transform,
} from 'valibot';
import { bit } from './common.js';
import { valiObjectThingSchema } from './items.js';

// eslint-disable-next-line jsdoc/require-jsdoc
function transformerBot<const T extends InferOutput<typeof valiInputUserShortSchema>>(value: T) {
	const {
		bot,
		bot_owner,
		...value_rest
	} = value;

	return {
		...value_rest,
		bot: bot
			? {
				owner_user_id: bot_owner!,
			}
			: null,
	};
}

const valiInputUserShortSchema = object({
	user_id: number(),
	domain: optional(
		string(),
	),
	approved: bit(0),
	nick: string(),
	gender: union([
		literal(0),
		literal(1),
	]),
	avatar: string(),
	online: bit(0),
	current_game: optional(
		object({
			gs_id: string(),
			gs_game_id: string(),
		}),
	),
	rank: optional(
		union([
			object({
				hidden: literal(1),
			}),
			object({
				qual: number(),
			}),
			object({
				expired: literal(1),
			}),
			object({
				id: number(),
				pts: number(),
			}),
		]),
	),
	vip: bit(0),
	bot: bit(0),
	bot_owner: optional(
		number(),
	),
	moderator: bit(0),
});

export const valiObjectUserShortSchema = pipe(
	valiInputUserShortSchema,
	transform(transformerBot),
);

export const valiObjectUserSchema = pipe(
	object({
		...valiInputUserShortSchema.entries,
		nicks_old: array(string()),
		profile_cover: optional(
			string(),
		),
		social_vk: optional(
			number(),
		),
		social_discord: optional(
			string(),
		),
		social_twitch: optional(
			string(),
		),
		games: optional(
			number(),
		),
		games_wins: optional(
			number(),
		),
		xp: optional(
			number(),
		),
		xp_level: optional(
			number(),
		),
		badge: optional(valiObjectThingSchema),
		friendship: optional(
			number(),
		),
		muted: bit(0),
		mfp_ban_history: optional(
			union([
				object({
					type: literal(0),
					count: number(),
					ts_last_ban: number(),
					ts_end: optional(
						number(),
					),
				}),
				object({
					type: literal(1),
					ts_end: number(),
				}),
			]),
		),
	}),
	transform(transformerBot),
	transform((value) => {
		const {
			games,
			games_wins,
			...value_rest
		} = value;

		return {
			...value_rest,
			games: {
				total: games,
				won: games_wins,
			},
		};
	}),
);

export type User = InferOutput<typeof valiObjectUserSchema>;
export type UserShort = InferOutput<typeof valiObjectUserShortSchema>;
