const http = require('http');

// create a http server
var server = http.createServer((req, res)=>{
    console.log('Hola Baby!');
});

var portNum = 3000;
server.listen(portNum,() => console.log(`Listening on Port ${portNum}`));