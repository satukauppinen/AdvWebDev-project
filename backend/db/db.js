const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'muista_lisätä_salasana_tähän',
  port: 5432,
});

module.exports = pool;
