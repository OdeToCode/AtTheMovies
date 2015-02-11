var path = require("path");
var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
    response.sendFile(path.resolve(__dirname + "/../assets/main.html"));
});

router.use(express.static(__dirname + "/../assets"));
router.use(express.static(__dirname + "/../bower_components"));

module.exports = router;
