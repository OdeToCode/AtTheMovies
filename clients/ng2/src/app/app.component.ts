import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated"
import {MovieList} from "./list/movie-list";
import {About} from "./about/about";
import {MovieDetail} from "./detail/movie-detail";
import {MovieEdit} from "./edit/movie-edit";
import {MovieEdit2} from "./edit/movie-edit2";
import {MovieNew} from "./edit/movie-new";
import '../style/styles.css';

@Component({
	selector: "movie-app",
	template: require("./app.component.html"),
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: "/list", name: "List", component:MovieList, useAsDefault:true  },
	{ path: "/about/*foo", name: "About", component:About },
	{ path: "/details/:id", name:"Details", component:MovieDetail },
	{ path: "/edit/:id", name:"Edit", component:MovieEdit },
	{ path: "/new/", name:"New", component:MovieNew }
])
export class AppComponent {
	title = "At The Movies";
}
