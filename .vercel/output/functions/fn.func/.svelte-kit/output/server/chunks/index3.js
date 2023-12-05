import postgres from "postgres";
const {
  VITE_PGHOST,
  VITE_PGDATABASE,
  VITE_PGUSER,
  VITE_PGPASSWORD,
  VITE_ENDPOINT_ID
} = process.env;
const sql = postgres({
  host: VITE_PGHOST,
  database: VITE_PGDATABASE,
  username: VITE_PGUSER,
  password: VITE_PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${VITE_ENDPOINT_ID}`
  }
});
export {
  sql as s
};
