import postgres from "postgres";
const host = "ep-still-union-32116685.eu-central-1.aws.neon.tech";
const database = "gpts";
const username = "reader";
const password = "ZKcak6Fqh9RU";
const endpointId = "ep-still-union-32116685";
const sql = postgres({
  host,
  database,
  username,
  password,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${endpointId}`
  }
});
export {
  sql as s
};
