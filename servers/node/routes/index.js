var movie = require("../controllers/movies.js");

module.exports = function(app) {

    app.get("/api/movies", movie.getAllMovies);
    app.get("/api/movies/slow/:id", movie.getMovieByIdSlowly);
    app.get("/api/movies/:id", movie.getMovieById);
    app.put("/api/movies", movie.updateMovie);
    app.post("/api/movies", movie.createMovie);
    app.delete("/api/movies/:id", movie.deleteMovie);
};