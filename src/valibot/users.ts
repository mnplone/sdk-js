import * as v from 'valibot';
import { bit } from './common.js';
import { valiObjectThingSchema } from './items.js';

// eslint-disable-next-line jsdoc/require-jsdoc
function transformerBot<const T extends v.InferOutput<typeof valiInputActiveUserShortSchema>>(value: T) {
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

const valiInputActiveUserShortSchema = v.object({
	user_id: v.number(),
	domain: v.optional(
		v.string(),
	),
	inactive: v.optional(
		v.undefined(),
	),
	approved: bit(0),
	nick: v.string(),
	gender: v.union([
		v.literal(0),
		v.literal(1),
	]),
	avatar: v.string(),
	online: bit(0),
	current_game: v.optional(
		v.object({
			gs_id: v.string(),
			gs_game_id: v.string(),
		}),
	),
	rank: v.optional(
		v.union([
			v.object({
				hidden: v.literal(1),
			}),
			v.object({
				qual: v.number(),
			}),
			v.object({
				expired: v.literal(1),
			}),
			v.object({
				id: v.number(),
				pts: v.number(),
			}),
		]),
	),
	vip: bit(0),
	bot: bit(0),
	bot_owner: v.optional(
		v.number(),
	),
	moderator: bit(0),
});

export const valiObjectActiveUserShortSchema = v.pipe(
	valiInputActiveUserShortSchema,
	v.transform(transformerBot),
);

export const valiObjectInactiveUserSchema = v.object({
	nick: v.string(),
	avatar: v.string(),
	avatar_key: v.string(),
	user_id: v.optional(
		v.number(),
	),
	domain: v.optional(
		v.union([
			v.string(),
			v.null(),
		]),
	),
	inactive: v.picklist([
		'not_exists',
		'global_ban',
	]),
});

export const valiObjectActiveUserSchema = v.pipe(
	v.object({
		...valiInputActiveUserShortSchema.entries,
		nicks_old: v.array(
			v.string(),
		),
		profile_cover: v.optional(
			v.string(),
		),
		social_vk: v.optional(
			v.number(),
		),
		social_discord: v.optional(
			v.string(),
		),
		social_twitch: v.optional(
			v.string(),
		),
		games: v.optional(
			v.number(),
		),
		games_wins: v.optional(
			v.number(),
		),
		xp: v.optional(
			v.number(),
		),
		xp_level: v.optional(
			v.number(),
		),
		badge: v.optional(valiObjectThingSchema),
		friendship: v.optional(
			v.number(),
		),
		muted: bit(0),
		mfp_ban_history: v.optional(
			v.union([
				v.object({
					type: v.literal(0),
					count: v.number(),
					ts_last_ban: v.number(),
					ts_end: v.optional(
						v.number(),
					),
				}),
				v.object({
					type: v.literal(1),
					ts_end: v.number(),
				}),
			]),
		),
	}),
	v.transform(transformerBot),
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

export const valiObjectUserShortSchema = v.variant(
	'inactive',
	[
		valiObjectActiveUserShortSchema,
		valiObjectInactiveUserSchema,
	],
);

export const valiObjectUserSchema = v.variant(
	'inactive',
	[
		valiObjectActiveUserSchema,
		valiObjectInactiveUserSchema,
	],
);

export type User = v.InferOutput<typeof valiObjectUserSchema>;
export type UserShort = v.InferOutput<typeof valiObjectUserShortSchema>;
