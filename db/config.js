const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // don't check for SSL cert
  },
});
console.log(process.env.DATABASE_URL);
module.exports = {
  query: (query) => pool.query(query),
};