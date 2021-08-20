const { Pool } = require("pg");

const pool =  new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'loja_cubos',
    password: '102030',
    port: 5432
});


const query = (text, param) => {
    return pool.query(text, param);
}


module.exports = {
    query
}