const fs = require('fs');
const http = require('http');

fs.writeFile('demo.txt', 'Hello there\n', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  const myServer = http.createServer((req, res) => {
    fs.readFile('demo1.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      res.end(data);
    });
  });

  myServer.listen(3000, () => {
    console.log('Server started');
  });
});
