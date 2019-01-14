const http = require('http');
const url = require('url');
// create a http server
var server = http.createServer((req, res)=>{

    // get url and parse it
    var parsedUrl = url.parse(req.url, true);
    // get the pathanme
    var path = parsedUrl.pathname;
    // trim extra / at the end of req url
    path = path.replace(/^\/+|\/+$/g, '');
    // get the http method
    var requestMethod = req.method.toLowerCase();
    // get the query string as an object
    var queryStringObject = parsedUrl.query;
    // send response to the client   
    res.end('Hola Baby!');
    // log message
    console.log(`User is hitting on ${path} with method ${requestMethod} and with query`, queryStringObject);

});

var portNum = 3000;
server.listen(portNum,() => console.log(`Listening on Port ${portNum}`));

// parse http path
