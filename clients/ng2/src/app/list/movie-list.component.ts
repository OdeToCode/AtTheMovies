import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MovieData} from "../services/movie.service";
import {Movie} from "../models/movie";

@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieListComponent {

    movies: Movie[] = [];

    constructor(movieData: MovieData) {
        movieData.getAll().subscribe(
            movies => this.movies = movies,
            error => console.log(error));
    }
}