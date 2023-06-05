'use strict';
const http = require('http');
const port = process.env.PORT || 1337;

class FYSSDK {


    handleRequest(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello SDK API\n');
    }
}

const FYSSDK = new FYSSDK();

const server = http.createServer((req, res) => {
    FYSSDK.handleRequest(req, res);
});

server.listen(port, () => {
    console.log(`SDK API server is running on port ${port}`);
});
