import sql from "../../../db";

export async function load({ params }) {
  const { slug } = params;
  const idFromSlug = slug.replaceAll("-", "_");

  const gpt = await sql`SELECT * FROM gpt_entries WHERE id = ${idFromSlug};`;

  return {
    gpt,
  };
}
