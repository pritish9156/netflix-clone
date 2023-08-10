const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, html) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }

    // Set the response header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    // Send the HTML file content as the response
    res.end(html);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
