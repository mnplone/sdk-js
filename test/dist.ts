import { M1 } from '../dist/main.js';

const sdk = new M1({
	hostname: process.env.TEST_HOSTNAME,
	access_token: process.env.TEST_ACCESS_TOKEN,
});

// eslint-disable-next-line no-console
console.log(sdk);
