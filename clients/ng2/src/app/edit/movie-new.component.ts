import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movie.service";

@Component({
    templateUrl: "./movie-new.component.html"
})
export class MovieNewComponent {
    movie: Movie = new Movie(0, "", 0, 0);

    constructor(
        private router: Router,
        private movieData: MovieData) {
    }

    save(form: NgForm) {
        if (form.valid) {
            this.movieData.create(this.movie)
                          .subscribe(movie => this.router.navigate([
                              "detail", movie.id
                          ]), error => console.log(error));  
        }
    }

}