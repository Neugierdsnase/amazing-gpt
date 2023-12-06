import { s as sql } from "../../../../chunks/index3.js";
async function load({ params }) {
  const { slug } = params;
  const idFromSlug = slug.replaceAll("-", "_");
  const [gpt] = await sql`SELECT * FROM gpt_entries WHERE id = ${idFromSlug};`;
  const tags = gpt.tags.split(",");
  return {
    gpt: { ...gpt, tags }
  };
}
export {
  load
};