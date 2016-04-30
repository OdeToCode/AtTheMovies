import {Component, OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";
import {MovieService} from "../services/MovieService"
import {Movie} from "../models/movie";

@Component({
	templateUrl: "/app/edit/movie-edit2.html"
})
export class MovieEdit2 implements OnInit{
	
    constructor(private movieData: MovieService, 
                private params: RouteParams,
                private router: Router) {   
        this.movie = new Movie(0, "", 0, 0);   
    }
    
    ngOnInit() {
        var id = this.params.get("id");
        this.movieData.get(id)
                      .subscribe(movie => {
                          this.movie = movie;
                      });
    } 
    
    save(form) {
        console.log(form);
        debugger;
        if(form.valid) {
             this.movieData.save(this.movie)
                .subscribe(updatedMovie => {
                    this.router.navigate(['Details', {id: updatedMovie.id}]); 
                });                                                                                                                     
        }
    }
        
    movie: Movie;   
}   