/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
var http = require('http');
var fs = require('fs');

function badReuest(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404: Page Not Found!");
    response.end();
}

function onRequest(request, response) {
    console.log("An user request " + request.url);
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else {
        badReuest(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server Start Up ...");