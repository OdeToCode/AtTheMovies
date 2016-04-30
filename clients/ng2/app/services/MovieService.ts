import {Injectable} from "angular2/core";
import {Http, RequestOptions, Headers} from "angular2/http";
import {Movie} from "../models/Movie";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

let baseUrl = "http://otc-movies.azurewebsites.net/movies";
let toMovie = (m:Movie) => new Movie(m.id, m.title, m.length, m.rating);
let getJsonOptions = function() {
    let options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append("Content-Type", "application/json");
    return options;
};

@Injectable()
export class MovieService {
	
	constructor(private http: Http) {

	}
	
	getAll() : Observable<Movie[]> {
		return this.http.get(baseUrl)
				   .map(r => r.json())
				   .map(movies => movies.map(toMovie))			
	}
	
	get(id: string) {
		return this.http.get(`${baseUrl}/${id}`)
				.map(r => r.json())
				.map(toMovie);
	}
	
	save(movie: Movie) {
		return this.http.put(baseUrl, JSON.stringify(movie), getJsonOptions())
				   .map(r => r.json())
				   .map(toMovie);
	}
}