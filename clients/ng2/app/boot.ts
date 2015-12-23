import {bootstrap} from "angular2/platform/browser"
import {ROUTER_PROVIDERS, 
		HashLocationStrategy, 
		LocationStrategy} from "angular2/router"
import {App} from "./app"
import {provide} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http";
import {MovieService} from "./services/movieservice";

bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	MovieService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

import {Request, RequestOptions, RequestMethod, Headers, Http} from "angular2/http";

let http: Http;
let headers: Headers;
let request: Request;

let options = new RequestOptions();
options.url = "/api/movies";
options.method = RequestMethod.Post;
options.headers = headers;
options.body = JSON.stringify({title: "Star Wars"});

request = new Request(options);

http.request(request);

