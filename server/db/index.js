const { Pool } = require("pg");

const pool = new Pool(); // inside Pool obj you can put data for the connection (host, username, password, port...), but in the .env i configure PGUSER variables and Pool automaticly knows
/* 
    PGUSER=postgres
    PGHOST='localhost'
    PGPASSWORD=kakodate8
    PGDATABASE=sneakers
    PGPORT=5432
*/

module.exports = {
  query: (text, params) => pool.query(text, params),
};
