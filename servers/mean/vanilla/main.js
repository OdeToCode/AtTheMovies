var http = require("http");

var server = http.createServer(function(request, response){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello, World!");
        response.end();
});

server.listen(3000);
