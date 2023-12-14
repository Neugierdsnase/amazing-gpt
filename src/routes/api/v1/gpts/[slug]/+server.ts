import sql from '../../../../../db';
import type { RouteMetadataType } from '../../../../../types/server';
import _ from 'lodash';

export const GET = async ({ params }: RouteMetadataType) => {
	const uniqueIds = _.uniq(params.slug.split(','));

	const gpts = await sql`SELECT * FROM gpt_entries WHERE id in ${sql(uniqueIds)};`;

	const responseBody = JSON.stringify({ gpts });

	return new Response(responseBody);
};
