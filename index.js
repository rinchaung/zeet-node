const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello, world!');
});

/* __ Server setup */
server.listen(port, (req, res) => {
    console.log(`App is listening at http://${hostname}:${port}`);
});