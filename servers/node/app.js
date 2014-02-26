var express = require("express");
var app = express();

app.use(express.bodyParser());
app.use("/", express.static(__dirname + "/../../clients"));

var routes = require("./routes")(app);

console.log("Started!!");
app.listen(process.env.PORT || 3000);