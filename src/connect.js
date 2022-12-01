// Guide to connect to a PostgreSQL database using Node.js
// https://northflank.com/guides/connecting-to-a-postgresql-database-using-node-js

const { Client } = require('pg');
require('dotenv').config();

try {
    (async () => {
        const client = new Client({
            host: process.env.PG_HOST,
            port: process.env.PG_PORT,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            ssl: false,
        });
        await client.connect();
        const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
        console.log(res.rows[0].connected);
        await client.end();
    })();
} catch (err) {
    console.error(err);
}
