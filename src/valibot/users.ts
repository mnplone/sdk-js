import * as v from 'valibot';
import { bit } from './common.js';
import { thingSchema } from './items.js';

export const valiObjectUserShortSchema = v.pipe(
	v.object({
		user_id: v.pipe(
			v.number(),
			v.minValue(1),
		),
		domain: v.optional(
			v.pipe(
				v.string(),
				v.minLength(2),
			),
		),
		approved: bit(0),
		nick: v.pipe(
			v.string(),
			v.minLength(2),
		),
		gender: v.union([
			v.literal(0),
			v.literal(1),
		]),
		avatar: v.pipe(
			v.string(),
			v.minLength(1),
		),
		online: bit(0),
		current_game: v.optional(
			v.object({
				gs_id: v.pipe(
					v.string(),
					v.minLength(1),
				),
				game_id: v.pipe(
					v.string(),
					v.minLength(1),
				),
			}),
		),
		rank: v.union([
			v.object({
				hidden: v.union([
					v.literal(1),
				]),
			}),
			v.object({
				id: v.number(),
				pts: v.number(),
			}),
		]),
		vip: bit(0),
		bot: bit(0),
		bot_owner: v.optional(
			v.pipe(
				v.number(),
				v.minValue(1),
			),
		),
		moderator: bit(0),
	}),
	v.transform((value) => {
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
	}),
);

export const valiObjectUserSchema = v.pipe(
	v.object({
		...valiObjectUserShortSchema.entries,
		nicks_old: v.array(
			v.pipe(
				v.string(),
				v.minLength(2),
			),
		),
		profile_cover: v.optional(
			v.pipe(
				v.string(),
				v.minLength(1),
			),
		),
		social_vk: v.optional(
			v.pipe(
				v.number(),
				v.minValue(1),
			),
		),
		games: v.optional(
			v.pipe(
				v.number(),
				v.minValue(0),
			),
		),
		games_wins: v.optional(
			v.pipe(
				v.number(),
				v.minValue(0),
			),
		),
		xp: v.optional(
			v.pipe(
				v.number(),
				v.minValue(0),
			),
		),
		xp_level: v.optional(
			v.pipe(
				v.number(),
				v.minValue(0),
			),
		),
		badge: thingSchema,
		friendship: v.optional(
			v.pipe(
				v.number(),
				v.minValue(0),
				v.maxValue(6),
			),
		),
		muted: bit(0),
		mfp_ban_history: v.optional(
			v.record(
				v.string(),
				v.unknown(),
			),
		),
	}),
	v.transform((value) => {
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

export type User = v.InferOutput<typeof valiObjectUserSchema>;
export type UserShort = v.InferOutput<typeof valiObjectUserShortSchema>;
