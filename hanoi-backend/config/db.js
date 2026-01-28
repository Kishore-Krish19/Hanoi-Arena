const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 4000, // TiDB default port
  waitForConnections: true,
  connectionLimit: 100, // Important for your 180 players
  ssl: {
    rejectUnauthorized: false // Required for TiDB Cloud security
  }
});

module.exports = pool.promise();