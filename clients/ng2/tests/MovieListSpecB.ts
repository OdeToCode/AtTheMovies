import {provide} from "angular2/core";
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {it, describe, expect, inject, beforeEachProviders, 
	   beforeEach, TestComponentBuilder, injectAsync} from "angular2/testing";
import {Observable} from "rxjs";
import {Movie} from "../app/models/Movie";
import {MovieList} from "../app/list/movie-list";
import {MovieService} from "../app/services/MovieService";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {Router} from "angular2/router";

BrowserDomAdapter.makeCurrent();

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
		
	beforeEachProviders(() => {
		return [
		HTTP_PROVIDERS, 
		provide(Router, {useValue: null}),
		provide(MovieService, {useClass: FakeService})
	]});

	beforeEach(			
		injectAsync([TestComponentBuilder], (builder :TestComponentBuilder) => {		
			return builder.overrideTemplate(MovieList, "")
					      .createAsync(MovieList).then(fixture => {
				component = fixture.componentInstance;
			})
		})		
	);
	
	it("should have 3 movies after init", function() {
		
		component.ngOnInit();
		expect(component.movies.length).toBe(3);
	});
	
});