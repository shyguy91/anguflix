var express = require('express');
var app = express();
var port = 8000;
app.listen(port, function(){
    console.log('Listening on port ' + port);
});
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/public"));