/**
 * Created by Sudheer Chowdary on 9/30/2016.
 */
//In intellij terminal execute below command before you start
//npm install connect

var connect = require('connect');
var http = require('http');

var app = connect();

//use of app
function logo(request, response) {
    console.log("User requesting for Logo");
}
function homePage(request, response) {
    console.log("User requesting for home page");
}

app.use('/logo', logo);
app.use('/home', homePage);

//use of next
function doFirst(request, response, next) {
    console.log("Doing first activity ..!")
    next();
}

function doSecond(request, response, next) {
    console.log("Doing second activity ..!")
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running ....")
