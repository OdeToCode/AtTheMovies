import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

const baseUrl = "http://otc-movies.azurewebsites.net/movies/";

const processResponse = r => r.json();

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

}