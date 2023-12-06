import type { GPTInfoType } from '../types/gpt';
import sql from '../db';

export async function load() {
	const raw_gpts =
		await sql`SELECT id, displayname, sortname, authorname, authorurl, description, image, slug, tags FROM gpt_entries;`;

	const gpts = raw_gpts.map(({ tags, ...gpt }) => {
		const newTags = tags ? tags.split(',') : [];

		return {
			...gpt,
			tags: newTags
		};
	}) as Partial<GPTInfoType>[];

	return {
		gpts
	};
}
