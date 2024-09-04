const http = require('http');
const fs = require('fs');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    let path = './views/';
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        path = path + 'index.html';
    } else if (req.url === '/contact') {
        path = path + 'contact.html';
    } else {
        res.statusCode = 404;
        path = path + '404.html';
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, host, () => {
    console.log(`Server is operating at http://${host}:${port}`);
});
