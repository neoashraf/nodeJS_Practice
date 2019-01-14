const http = require('http');
const url = require('url');
// create a http server
var server = http.createServer((req, res)=>{

    // get url and parse it
    var parseUrl = url.parse(req.url, true);
    // get the pathanme
    var path = parseUrl.pathname;
    path = path.replace(/^\/+|\/+$/g, '');
    // send response to the client
    res.end('Hola Baby!');
    // log message
    console.log(`User is hitting on ${path}`);

});

var portNum = 3000;
server.listen(portNum,() => console.log(`Listening on Port ${portNum}`));

// parse http path

