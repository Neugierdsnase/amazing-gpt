import { getUniqueTags } from '$lib/util';
import sql from '../../../../db';
import type { RouteMetadataType } from '../../../../types/server';

const searchQueryPart = (searchQuery: string) => {
	return searchQuery
		? sql` AND (sortname LIKE '%' || ${searchQuery} || '%' OR description LIKE '%' || ${searchQuery} || '%')`
		: sql``;
};

const tagsPart = (tags: string[]) => {
	return tags
		? tags.map(
				(tag) =>
					sql` AND (tags LIKE ${tag} OR tags LIKE ${tag} || ',%' OR tags LIKE '%,' || ${tag} OR tags LIKE '%,' || ${tag} || ',%')`
		  )
		: sql``;
};

const sortPart = (sort: string) => {
	switch (sort) {
		case 'added':
			return sql` ORDER BY added`;
		case 'updated':
			return sql` ORDER BY updated`;
		default:
			return sql` ORDER BY sortname`;
	}
};

const sortDirectionPart = (sortDirection: string) => {
	return sortDirection === 'desc' ? sql` DESC` : sql` ASC`;
};

export const GET = async ({ url }: RouteMetadataType) => {
	const { searchParams } = url;
	const searchQuery = searchParams.get('query');
	const paramTags = searchParams.get('tags')?.split(',');
	const sort = searchParams.get('sort');
	const sortDirection = searchParams.get('sortDirection');

	const gpts = await sql`
SELECT * FROM gpt_entries
WHERE 1=1
${searchQueryPart(searchQuery)}
${tagsPart(paramTags)}
${sortPart(sort)}
${sortDirectionPart(sortDirection)}
  ;`;

	const rawTags = await sql`SELECT DISTINCT tags FROM gpt_entries;`;
	const mediumTags = rawTags
		.map(({ tags }) => tags)
		.map((tag) => tag.split(','))
		.flat();

	const tags = getUniqueTags(mediumTags);

	const responseBody = JSON.stringify({ gpts, tags });

	return new Response(responseBody);
};
