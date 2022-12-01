const { getClient } = require('./get-client');

(async () => {
    const client = await getClient();
    const name = process.argv[2] ?? 'john';
    // prevent sql injection
    const res = await client.query('SELECT $1::text as message', [`Hello ${name}!`]);
    let insertRow = await client.query('INSERT INTO my_table(name) VALUES($1);', [`${name}`]);
    console.log(`Inserted ${insertRow.rowCount} row`);
    await client.end();
})();
