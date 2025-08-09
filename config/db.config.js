require("dotenv").config();

const {Pool} = require("pg");
const pool = new Pool({
    user : process.env.DB_USER,
    host: process.env.DB_USER,
    database : process.env.DB_USER,
    password : process.env.DB_USER,
    port : process.env.DB_USER,
});

module.exports = pool;;

