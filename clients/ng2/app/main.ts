
	import {bootstrap} from "angular2/platform/browser";
	import {Component} from "angular2/core";
	import {Movie} from "./models/movie"
	
	@Component({
		selector: "app",	
		templateUrl: "/app/main.html"
	})
	export class App {
		
		title: string
		firstName: string
		movies: Array<Movie>
		color: string
		
		constructor() {
			this.title = "ng2";
			this.firstName = "Scott";
			this.color = "red";
			this.movies = [
				new Movie("Star Wars", 120, 1979, 5),
				new Movie("Jurrasic Park", 130, 1992, 4),
				new Movie("SP", 300, 2014, 1)	
			];
		}
		
		setColor(newColor: string) {
			console.log("hit");
			this.movies.push(new Movie("foo", 20, 1920, 1));
			this.color = newColor;
		}
	}
	
	bootstrap(App);
