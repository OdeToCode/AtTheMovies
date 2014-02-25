var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.use("/", express.static(__dirname + "/../../clients"));

app.get("/", function(request, response){
	response.write("Hello!!");
	response.end();
}); 

console.log("Server started");
app.listen(process.env.PORT || 3000);