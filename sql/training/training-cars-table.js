import pg from 'pg';
const { Client } = pg;

const client = new Client({
  user: 'postgres',
  password: "3E#IfVq'LshO8(*{",
  host: 'localhost',
  port: 5432,
  database: 'trainig',
});

await client.connect();

console.log(await client.query('SELECT * FROM cars'));

await client.end();
