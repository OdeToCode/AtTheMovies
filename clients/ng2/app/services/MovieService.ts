import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Movie} from "../models/Movie";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {
	
	constructor(private http: Http) {
		console.log(http);
	}
	
	getAll() : Observable<any> {
		return this.http.get("http://otc-movies.azurewebsites.net/movies")
				   .map(r => r.json())
				   .map(movies => movies.map(m => new Movie(m.id, m.title, m.length, m.rating)))			
	}
}