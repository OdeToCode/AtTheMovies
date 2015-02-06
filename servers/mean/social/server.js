var express = require("express");
var bodyParser = require("body-parser");
var Post = require("./models/post");

var app = express();
app.use(bodyParser.json());

app.get("/api/posts", function(request, response){
    response.json({
        username: "sallen",
        body: "Trying out node"
    });
});

app.post("/api/posts", function(request, response) {

    var post = new Post({
        username:request.body.username,
        body: request.body.body
    })

    post.save(function(error, post){
        if(err) return next(err);
        response.json(201, post);
    });
});

app.listen(3000, function(){
    console.log("Server listening on", 3000);
});
