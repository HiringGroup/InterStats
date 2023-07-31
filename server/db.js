const { Pool } = require("pg");

const PG_URI =
  "postgres://hutjiuqq:t8RpJp0OR8nGJAY8BvmxGOe1oWp7dPNr@stampy.db.elephantsql.com/hutjiuqq";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

if (pool) {
  console.log("connected");
}

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
  pool: pool,
};
