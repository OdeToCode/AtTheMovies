import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router"
import {List} from "./list/list";
import {About} from "./about/about";

@Component({
	selector: "app",
	templateUrl: "/app/app.html",
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: "/list", name: "List", component:List, useAsDefault:true  },
	{ path: "/about" name: "About", component:About }
])
export class App {
	title = "At The Movies";
}