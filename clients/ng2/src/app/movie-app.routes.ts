import {provideRouter, RouterConfig} from "@angular/router";
import {MovieListComponent} from "./list/movie-list.component";
import {MovieDetailComponent} from "./detail/movie-detail.component";
import {aboutRoutes} from "./about/movie-about.routes";

export const routes: RouterConfig = [

    { path: "", component: MovieListComponent },
    { path: "detail/:id", component: MovieDetailComponent },
    ...aboutRoutes,
    { path: "**", redirectTo: "" }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
