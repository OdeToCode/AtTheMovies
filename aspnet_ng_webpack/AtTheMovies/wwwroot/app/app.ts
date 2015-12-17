import 'rxjs/add/operator/map';
import {bootstrap} from "angular2/bootstrap"
import {Component, OnInit} from "angular2/core"
import {Http, HTTP_PROVIDERS} from "angular2/http";

@Component({
	selector: "movies-app",
	templateUrl: "/app/app.html"
})
class App implements OnInit {
	
	movies: Array<any>
	constructor(public http: Http) {}
	
	ngOnInit() {
		this.http.get("/movies")
			.map(r => r.json())
			.subscribe(movies => this.showMovies(movies))	
	}
	
	private showMovies(movies) {
		this.movies = movies;
	}
}

bootstrap(App, [HTTP_PROVIDERS]);

