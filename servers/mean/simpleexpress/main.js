var express = require("express");
var server = express();

server.get("/", function(request, response) {
    response.send(200, "Hello, from Express!");
});

server.listen(3000);
