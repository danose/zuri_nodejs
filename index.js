var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8081);

console.log('Server running at port 8081');