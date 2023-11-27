import type { GPTInfoType } from '../types/gpt';
import { db } from '../db';

export async function load() {
	return {
		gpts: (await db.query('SELECT * FROM gpt;')) as unknown as GPTInfoType[]
	};
}
