//import {HTTP_PROVIDERS} from "angular2/http";	
import {Component, provide, Provider} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router"
import {HTTP_PROVIDERS} from "angular2/http";
import {MovieList} from "./list/movie-list";
import {About} from "./about/about";
import {MovieDetail} from "./detail/movie-detail";
import {MovieEdit} from "./edit/movie-edit";
import {MovieNew} from "./edit/movie-new";


@Component({
	selector: "app",
	templateUrl: "/app/app.html",
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: "/list", name: "List", component:MovieList, useAsDefault:true  },
	{ path: "/about/*foo", name: "About", component:About },
	{ path: "/details/:id", name:"Details", component:MovieDetail },
	{ path: "/edit/:id", name:"Edit", component:MovieEdit },
	{ path: "/new/", name:"New", component:MovieNew }
])
export class App {
	title = "At The Movies";
}