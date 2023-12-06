import sql from '../../../db';

type ParamsType = {
  slug: string;
};

type MetadataType = {
  params: ParamsType;
};

export const load = async ({ params }: MetadataType) => {
  const { slug } = params;
  const idFromSlug = slug.replaceAll('-', '_');

  const [gpt] = await sql`SELECT * FROM gpt_entries WHERE id = ${idFromSlug};`;
  const tags = gpt.tags.split(',');

  return {
    gpt: { ...gpt, tags }
  };
};
