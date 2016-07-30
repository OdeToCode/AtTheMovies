import {Http, RequestOptions, Headers} from "@angular/http";
import {Movie} from "../models/movie";
import {Injectable} from "@angular/core";

// const baseUrl = "http://otc-movies.azurewebsites.net/movies/";
const baseUrl = "http://localhost:15120/api/movies/";
const processResponse = r => r.json();
const jsonOptions = new RequestOptions({
    headers: new Headers({"Content-Type" : "application/json"})
});

@Injectable()
export class MovieData {

    constructor(private http: Http) {

    }

    getAll() {
        return this.http.get(baseUrl)
                        .map(processResponse);
    }

    getById(id: number) {
        return this.http.get(`${baseUrl}${id}`)
                        .map(processResponse);
    }

    update(movie: Movie) {
        return this.http.put(baseUrl, JSON.stringify(movie), jsonOptions)
                        .map(processResponse);
    }

    create(movie: Movie) {
        return this.http.post(baseUrl, JSON.stringify(movie), jsonOptions)
                        .map(processResponse);
    }

}