import { M1 } from '../src/m1.js';

export const sdk = new M1({
	access_token: process.env.TEST_ACCESS_TOKEN,
});
