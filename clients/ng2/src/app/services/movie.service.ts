import {Movie} from "../models/movie";

const movies = [
    new Movie(1, "Star Wars", 4, 120),
    new Movie(2, "Terminator", 3, 93),
    new Movie(3, "Star Trek", 5, 118)
];

export class MovieData {

    getAll() {
        return movies;
    }

    getById(id: number) {
        return movies.filter(m => m.id === id)[0];
    }

}