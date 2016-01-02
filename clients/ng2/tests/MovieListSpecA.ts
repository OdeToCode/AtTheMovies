import {Observable} from "rxjs";
import {Movie} from "../app/models/Movie";
import {MovieList} from "../app/list/movie-list";
import {MovieService} from "../app/services/MovieService";

class FakeService extends MovieService {
	
	constructor() {
		super(null);
	}
	
	getAll() {	
		let movies = [[
			new Movie(1, "", 1, 1),
			new Movie(1, "", 1, 1),
			new Movie(1, "", 1, 1) 
		]];
		return Observable.from(movies);
	}
	
}

describe("The MovieList component", () => {
	
	let component : MovieList;
	beforeEach(() => {
		component = new MovieList(new FakeService(), null);
	});
	
	it("should have 3 movies after init", function() {
		
		component.ngOnInit();
		console.log(component.movies);
		expect(component.movies.length).toBe(3);
	});
	
});

