import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES} 
        from "@angular/forms";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movie.service";

@Component({
    templateUrl: "./movie-edit.component.html",
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class MovieEditComponent implements OnInit {

    form: FormGroup;
    id: number;
    title: FormControl;
    length: FormControl;
    rating: FormControl;

    constructor(private movieData: MovieData,
                private route: ActivatedRoute,
                private router: Router) {
        
        this.title = new FormControl("", Validators.required);
        this.length = new FormControl(0);
        this.rating = new FormControl(1);
        this.form = new FormGroup({
            title: this.title, 
            length: this.length,
            rating: this.rating
        });

    }

    ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this.movieData.getById(id)
            .subscribe(movie => {
                this.id = movie.id;
                this.title.updateValue(movie.title);
                this.rating.updateValue(movie.rating);
                this.length.updateValue(movie.length);
            },
            error => console.log(error));
    }

    save() {
        if (this.form.valid) {
            const movie = new Movie(this.id, 
                                  this.form.value.title, 
                                  this.form.value.rating, 
                                  this.form.value.length);
            this.movieData
                .update(movie)
                .subscribe(m => this.router.navigate(["details", m.id]),
                           err => console.log(err));
        }
    }
}