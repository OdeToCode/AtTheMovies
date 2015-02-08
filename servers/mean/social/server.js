var express = require("express");
var bodyParser = require("body-parser");
var Post = require("./models/post");

var app = express();
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/layouts/main.html");
});

app.get("/angular.js", function(request, response) {
    response.sendFile(__dirname + "/bower_components/angular/angular.js");
});

app.get("/api/posts", function(request, response){
    Post.find().exec(function(error, posts){
        if(error) next(error);
        response.status(200).json(posts);
    });
});

app.post("/api/posts", function(request, response) {

    var post = new Post({
        username:request.body.username,
        body: request.body.body
    })

    post.save(function(error, post){
        if(error) return next(error);
        response.status(201).json(post);
    });
});

app.listen(3000, function(){
    console.log("Server listening on", 3000);
});
