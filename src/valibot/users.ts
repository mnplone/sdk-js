import * as v from 'valibot';

const userShortSchema = v.object({
	user_id: v.pipe(
		v.number(),
		v.minValue(1),
	),
	domain: v.optional(
		v.pipe(
			v.string(),
			v.minLength(1),
		),
	),
	approved: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
	nick: v.pipe(
		v.string(),
		v.minLength(1),
	),
	gender: v.union([
		v.literal(0),
		v.literal(1),
	]),
	avatar: v.pipe(
		v.string(),
		v.minLength(1),
	),
	avatar_key: v.pipe(
		v.string(),
		v.minLength(1),
	),
	online: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
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
				v.literal(0),
				v.literal(1),
			]),
		}),
		v.object({
			id: v.number(),
			pts: v.number(),
		}),
	]),
	vip: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
	bot: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
	bot_owner: v.optional(
		v.pipe(
			v.number(),
			v.minValue(1),
		),
	),
	moderator: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
});

const userSchema = v.object({
	...userShortSchema.entries,
	nicks_old: v.array(
		v.pipe(
			v.string(),
			v.minLength(1),
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
	// badge: thingSchema,
	friendship: v.optional(
		v.pipe(
			v.number(),
			v.minValue(0),
			v.maxValue(6),
		),
	),
	muted: v.optional(
		v.union([
			v.literal(0),
			v.literal(1),
		]),
	),
	mfp_ban_history: v.optional(
		v.record(
			v.string(),
			v.unknown(),
		),
	),
});
