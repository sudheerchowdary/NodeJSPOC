/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
var fs = require('fs');

fs.writeFileSync("sample.txt", "My name is sudheer and I am from india ..!")
console.log(fs.readFileSync("sample.txt").toString())

var path = require('path');
var samplePath = "C://ProgrrmFiles//Sample/sample.html";
var sample1Path = "C://ProgrrmFiles//Sample/sample1.html";

console.log(path.normalize(sample1Path));
console.log(path.dirname(samplePath));
console.log(path.basename(samplePath));
console.log(path.extname(samplePath));

console.log(__dirname);
console.log(__filename);

setInterval(function () {
    console.log("Hello Guys ..!");
}, 1000);

