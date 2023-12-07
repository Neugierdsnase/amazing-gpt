import sql from '../../../db';
import type { RouteMetadataType } from '../../../types/server';

export const load = async ({ params }: RouteMetadataType) => {
  const { slug } = params;
  const idFromSlug = slug.replaceAll('-', '_');

  const [gpt] = await sql`SELECT * FROM gpt_entries WHERE id = ${idFromSlug};`;
  const tags = gpt.tags.split(',');

  return {
    gpt: { ...gpt, tags }
  };
};
