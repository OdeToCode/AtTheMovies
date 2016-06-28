import {Component, OnInit} from "@angular/core";
import {FORM_DIRECTIVES, Control, ControlGroup, Validators} from "@angular/common";
import {Router, RouteParams} from "@angular/router-deprecated";
import {MovieService} from "../services/MovieService"
import {Movie} from "../models/movie";

@Component({
	template: require("./movie-edit.html"),
    directives: [FORM_DIRECTIVES]
})
export class MovieEdit implements OnInit{
	
    form: ControlGroup;
    id: Control;
    title: Control;
    rating: Control;
    length: Control;
    
    constructor(private movieData: MovieService, 
                private params: RouteParams,
                private router: Router) {  
    
        this.id = new Control();
        this.title = new Control("", Validators.required);
        this.rating = new Control("");
        this.length = new Control();
        this.form = new ControlGroup({
            id: this.id,
            title: this.title, 
            rating: this.rating, 
            length: this.length            
        });      
    }
    
    ngOnInit() {
        var id = this.params.get("id");
        this.movieData.get(id)
                      .subscribe(movie =>{
                          this.id.updateValue(movie.id);
                          this.title.updateValue(movie.title);
                          this.rating.updateValue(movie.rating);
                          this.length.updateValue(movie.length)
                      });
    } 
    
    save() {
        if(this.form.valid) {
            var movie = new Movie(parseInt(this.id.value), 
                                           this.title.value,
                                           parseInt(this.length.value),
                                           parseInt(this.rating.value));
            this.movieData.save(movie)
                .subscribe(updatedMovie => {
                    this.router.navigate(['Details', {id: updatedMovie.id}]); 
                });                                                                                                                     
        }
    }
   
}   