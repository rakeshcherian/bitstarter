var express = require('express');
var fs = require('fs');
var Buffer =  require('buffer').Buffer;

function readFromFile(fileName){
    var buffer = fs.readFileSync(fileName);
    return buffer.toString;
}


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFromFile("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
