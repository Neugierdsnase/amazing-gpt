import postgres from "postgres";

const host = import.meta.env.VITE_PGHOST;
const database = import.meta.env.VITE_PGDATABASE;
const username = import.meta.env.VITE_PGUSER;
const password = import.meta.env.VITE_PGPASSWORD;
const endpointId = import.meta.env.VITE_ENDPOINT_ID;

const sql = postgres({
  host,
  database,
  username,
  password,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${endpointId}`,
  },
});

export default sql;
