const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Start the server
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});