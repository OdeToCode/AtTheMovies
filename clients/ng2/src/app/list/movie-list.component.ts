import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MovieData} from "../services/movie.service";
import {Movie} from "../models/movie";
import {MoviePanelComponent} from "./movie-panel.component";

@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.component.html",
    directives: [ROUTER_DIRECTIVES, MoviePanelComponent]
})
export class MovieListComponent implements OnInit {

    movies: Movie[] = [];

    constructor(private movieData: MovieData) {
        
    }

    ngOnInit() {
        this.movieData.getAll().subscribe(
            movies => this.movies = movies,
            error => console.log(error)
        );
    }
}