import { M1 } from '../src/m1.js';
import { refresh_hook } from '../src/hooks/refresh.js';

export const sdk = new M1({
	hooks: {
		1: refresh_hook,
	},
});
