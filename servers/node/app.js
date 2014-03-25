var express = require("express");
var app = express();

app.use(express.bodyParser());
app.use("/", express.static(__dirname + "/../../clients"));

var routes = require("./routes")(app);

app.listen(process.env.PORT || 3000);
console.log("Started!!");

