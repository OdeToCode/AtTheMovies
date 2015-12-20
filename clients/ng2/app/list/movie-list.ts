import {Component} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {Movie} from "../models/movie"

@Component({
	selector: "movie-list",	
	templateUrl: "/app/list/movie-list.html",
	directives: [ROUTER_DIRECTIVES]
})
export class MovieList {
		
	title: string
	movies: Array<Movie>
		
	constructor(private _router: Router) {
		this.title = "ng2";
		this.movies = [
			new Movie("Star Wars", 120, 1979, 5),
			new Movie("Jurrasic Park", 130, 1992, 4),
			new Movie("SP", 300, 2014, 1)	
		];
	}	
	
	goToDetails(id: string) {
		this._router.navigate(["Details", { id: id}]);
	}
}
