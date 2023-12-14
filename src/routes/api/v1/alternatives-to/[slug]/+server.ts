import sql from '../../../../../db';
import type { RouteMetadataType } from '../../../../../types/server';
import _ from 'lodash';

const omitPart = (omitIds: string[]) => {
	if (!omitIds.length) return sql``;

	return sql`AND id NOT IN ${sql(omitIds)}`;
};

const tagsPart = (tags: string[]) => {
	return tags
		? tags.map(
				(tag) =>
					sql` AND (tags LIKE ${tag} OR tags LIKE ${tag} || ',%' OR tags LIKE '%,' || ${tag} OR tags LIKE '%,' || ${tag} || ',%')`
		  )
		: sql``;
};

export const GET = async ({ params, url }: RouteMetadataType) => {
	const gptSlug = params.slug;
	const uniqueOmitIds: string[] = _.uniq(url.searchParams.get('omit')?.split(','));

	const gpt = await sql`SELECT id, tags FROM gpt_entries WHERE slug = ${gptSlug};`;

	if (!gpt.length) return new Response('Not found', { status: 404 });

	const tags = gpt[0].tags.split(',');
	const gpts = await sql`SELECT * FROM gpt_entries WHERE 1 = 1 ${tagsPart(tags)} ${omitPart([
		...uniqueOmitIds,
		gpt[0].id
	])} ORDER BY RANDOM() LIMIT 3;`;

	const responseBody = JSON.stringify({ gpts });

	return new Response(responseBody);
};
