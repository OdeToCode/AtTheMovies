import {provideRouter, RouterConfig} from "@angular/router";
import {MovieListComponent} from "./list/movie-list.component";
import {MovieDetailComponent} from "./detail/movie-detail.component";
import {MovieNewComponent} from "./edit/movie-new.component";
import {MovieEditComponent} from "./edit/movie-edit.component";
import {aboutRoutes} from "./about/movie-about.routes";

export const routes: RouterConfig = [

    { path: "", component: MovieListComponent },
    { path: "detail/:id", component: MovieDetailComponent },
    { path: "edit/:id", component: MovieEditComponent },
    { path: "new", component: MovieNewComponent },
    ...aboutRoutes,
    { path: "**", redirectTo: "" }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
