import { s as sql } from "../../chunks/index3.js";
async function load() {
  const raw_gpts = await sql`SELECT id, displayname, sortname, authorname, authorurl, description, image, slug, tags FROM gpt_entries;`;
  const gpts = raw_gpts.map(({ tags, ...gpt }) => {
    const newTags = tags ? tags.split(",") : [];
    return {
      ...gpt,
      tags: newTags
    };
  });
  return {
    gpts
  };
}
export {
  load
};
