import { db } from '../../../db';

export async function load({ params }) {
  const { slug } = params;
  console.log('slug', slug);
  const idFromSlug = slug.replaceAll('-', '_');
  const gpt = await db.query(`SELECT * FROM gpt:${idFromSlug};`);

  return {
    gpt
  };
}
