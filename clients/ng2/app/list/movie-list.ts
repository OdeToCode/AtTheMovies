import {Component, OnInit} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {Movie} from "../models/movie"
import {StarPipe} from "../pipes/StarPipe";
import {MovieService} from "../services/MovieService"
import {MovieDisplay} from "./movie-display";
import {HighLight} from "../directives/HighLight";

@Component({
	selector: "movie-list",	
	templateUrl: "/app/list/movie-list.html",
	pipes: [StarPipe],
	directives: [ROUTER_DIRECTIVES, MovieDisplay, HighLight]
})
export class MovieList implements OnInit { 
	
	constructor(movieData: MovieService,
				router: Router) {
							
		this.title = "ng2";
		this.router = router;
		this.movieData = movieData;		
	}	
			
	onRatingChange(movie, rating) {
		movie.rating = rating;
		console.dir(arguments);
	}
				
	ngOnInit() {
		this.movieData.getAll()
			.subscribe(movies => this.movies = movies,
					   error => console.log(error));			
	}
	
	goToDetails(id: string) {
		this.router.navigate(["Details", { id: id}]);
	}
		
	title: string;
	movies: Array<Movie>;
	router: Router;
	movieData: MovieService;
	
}
