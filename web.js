var express = require('express');
var fs = require('fs');

var fileContents = function(){{
    fs.readFileSync('index.html')
}

function readFromFile(fileName){
    return fs.readFileSync(fileName).toString;
}


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fileContents().toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
