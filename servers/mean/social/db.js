var mongoose = request("mongoose");

mongoose.connect("mongodb://localhost/social", function(){
    console.log("mongo connected");
});

module.exports = mongoose;
