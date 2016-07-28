import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {MovieData} from "../services/movie.service";
import {Movie} from "../models/movie";

@Component({
    templateUrl: "./movie-detail.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieDetailComponent implements OnInit {

    movie: Movie;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private movieData: MovieData) {

                }

    ngOnInit() {
        let id = +this.route.snapshot.params["id"];
        this.movie = this.movieData.getById(id);
    }

    goToList() {
        this.router.navigate([""]);
    }
}