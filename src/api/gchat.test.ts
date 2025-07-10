import {
	test,
	expect,
	describe,
} from 'vitest';
import { sdk } from '../../test/sdk.js';
import { isRecord } from '../utils.js';

describe('gchat.get', () => {
	test('type checking', async () => {
		const response = await sdk.gchat.get();

		expect(response.success).toBe(true);

		expect(isRecord(response.data.status)).toBe(true);

		expect(Array.isArray(response.data.messages)).toBe(true);
		expect(Array.isArray(response.data.users)).toBe(true);
		expect(Array.isArray(response.data.item_protos)).toBe(true);
	});
});

