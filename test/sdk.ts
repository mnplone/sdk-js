import { M1 } from '../src/m1.js';

export const sdk = new M1({
	hostname: process.env.TEST_HOSTNAME,
	access_token: process.env.TEST_ACCESS_TOKEN,
	headers: {
		Cookie: process.env.CLOUDFLARE_COOKIE!,
	},
});
