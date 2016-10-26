/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
var http = require('http');

function onRequest(request, response) {
    console.log("An user request "+ request.url);
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Sending some information to the user ..!");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server Start Up ...");