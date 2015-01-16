import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/movies";

export class MovieData {

    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
    }

    getAll() {
        return this.http.get(baseUrl).then(response => {
            console.log(response.content);
            return response.content;
        });
    }

}
