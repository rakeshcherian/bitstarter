var express = require('express');
var fs = require('fs');

function readFromFile(fileName){
    return fs.readFileSync(fileName).toString;
}


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFromFile('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
