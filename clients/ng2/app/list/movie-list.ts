import {Component, OnInit} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {Movie} from "../models/movie"
import {MovieService} from "../services/MovieService"

@Component({
	selector: "movie-list",	
	templateUrl: "/app/list/movie-list.html",
	directives: [ROUTER_DIRECTIVES]
})
export class MovieList implements OnInit { 
	
	title: string,
	movies: Array<Movie> = null;
	today: Date = new Date();
	
	constructor(
		private movieData: MovieService,
		private router: Router) {
							
		this.title = "ng2";		
	}	
				
	ngOnInit() {
		this.movieData.getAll()
			.subscribe(movies => this.movies = movies,
					   error => console.log(error));			
	}
	
	goToDetails(id: string) {
		this.router.navigate(["Details", { id: id}]);
	}
}
