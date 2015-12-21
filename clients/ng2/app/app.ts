	
	import {Component} from "angular2/core";
	import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router"
	import {MovieList} from "./list/movie-list";
	import {About} from "./about/about";
	import {MovieDetail} from "./detail/movie-detail";
	
	@Component({
		selector: "app",
		templateUrl: "/app/app.html",
		directives: [ROUTER_DIRECTIVES]
	})
	@RouteConfig([
		{ path: "/list", name: "List", component:MovieList, useAsDefault:true  },
		{ path: "/about/*foo", name: "About", component:About },
		{ path: "/details/:id", name:"Details", component:MovieDetail }
	])
	export class App {
		title = "At The Movies";
	}


