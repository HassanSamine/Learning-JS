//Load the HTTP module 
const http = require('http');

//Create a HTTP server

const server = http.createServer((req, res) => {
    //Set the response status code to 200
    res.statusCode = 200;
    res.setHeader('content-Type', 'text?plain');
    //send "Hello World!"
    res.end('Hello World!\n');
});

//Define the port to listen on
const port = 3000;

//Make the server listen on port 3000
server.listen(port, () => {
    console.log('Server running at http://localhost:${port}/'); 
});

