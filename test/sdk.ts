import { M1 } from '../src/m1.js';

export const sdk = new M1({
	hostname: process.env.TEST_HOSTNAME,
	access_token: process.env.TEST_ACCESS_TOKEN,
});

// sdk.im.send({
// 	user_id: 1,
// 	image_token: 'wQxWr',
// 	send_id: '1234567890',
// });
