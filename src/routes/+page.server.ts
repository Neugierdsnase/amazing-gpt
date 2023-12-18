import type { GPTInfoType } from '../types/gpt';
import sql from '../db';
import { getUniqueTags } from '$lib/util';

export async function load() {
	const raw_gpts =
		await sql`SELECT id, displayname, sortname, authorname, authorurl, description, image, slug, tags, ytshorturl FROM gpt_entries`;

	const gpts = raw_gpts.map(({ tags, ...gpt }) => {
		const newTags = tags ? tags.split(',') : [];

		return {
			...gpt,
			tags: newTags
		};
	}) as Partial<GPTInfoType>[];

	const rawTags = await sql`SELECT DISTINCT tags FROM gpt_entries;`;
	const tags = rawTags
		.map(({ tags }) => tags)
		.map((tag) => tag.split(','))
		.flat();

	return {
		gpts,
		allTags: getUniqueTags(tags)
	};
}
