import { s as sql } from "../../chunks/index3.js";
async function load() {
  return {
    gpts: await sql`SELECT gpt_id, name, author, description, image, slug FROM gpt;`
  };
}
export {
  load
};
