import { s as sql } from "../../../../chunks/index3.js";
async function load({ params }) {
  const { slug } = params;
  console.log("slug", slug);
  const idFromSlug = slug.replaceAll("-", "_");
  const gpt = await sql`SELECT * FROM gpt:${idFromSlug}`;
  return {
    gpt
  };
}
export {
  load
};
