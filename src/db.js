const { Pool } = require('pg');

const pool = new Pool({
  user: 'youruser',
  host: 'localhost',
  database: 'employeedb',
  password: 'yourpassword',
  port: 5432,
});

module.exports = pool;
