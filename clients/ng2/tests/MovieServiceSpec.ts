import { 
  beforeEach,
  beforeEachProviders,
  expect,
  inject, 
  injectAsync,
  it
 } from "angular2/testing";
import {provide} from 'angular2/core';
import {MockBackend, MockConnection} from 'angular2/src/http/backends/mock_backend';
import {
  BaseRequestOptions,
  ConnectionBackend,
  HTTP_PROVIDERS,
  Http, Response, ResponseOptions
} from 'angular2/http';
import {MovieService} from "../app/services/MovieService";

describe("the movie service", function() {

  let mockBackend: MockBackend;
  let movieServce: MovieService;
  
  beforeEachProviders(() => [
    MovieService,
    HTTP_PROVIDERS,
    MockBackend,
    provide(ConnectionBackend, { useClass: MockBackend }),
  ]);

  beforeEach(inject([MovieService, MockBackend], (_movieService, _mockBackend) => {
    movieServce = _movieService;
    mockBackend = _mockBackend;
        
  }));

  afterEach(() => mockBackend.verifyNoPendingRequests());

  it("is present", () => { expect(movieServce).toBeDefined() });

  it("should make a request to get movies", injectAsync([], () => {

    mockBackend.connections.subscribe(function(c:MockConnection){
      let response = new ResponseOptions({body: "[{},{}]"});
      c.mockRespond(new Response(response));
    });
  
      return movieServce.getAll().toPromise()
        .then(movies => { 
          expect(movies.length).toBe(2)
        });
    }));

});
