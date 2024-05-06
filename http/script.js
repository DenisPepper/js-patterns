import * as http from 'node:http';
import * as fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer();

server.addListener('request', (req, res) => {
    const file = fs.readFileSync(join(__dirname, 'message.txt'), { encoding: 'utf8' });

    res.setHeader('Content-Type', 'text/plain');
    res.end(file);
});

server.listen(4080, '127.0.0.1', () => console.log(`Server started on ${server.address()}`));