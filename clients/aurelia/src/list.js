import {MovieData} from "./movieData"

export class List {
    static inject() { return [MovieData];}

    constructor(movieData) {
        this.movieData = movieData;
    }

    activate() {
        this.movieData.getAll().then(movies => this.movies = movies);
    }
}
