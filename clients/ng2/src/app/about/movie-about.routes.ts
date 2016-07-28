import {RouterConfig} from "@angular/router";
import {MovieAboutComponent,
        MovieAboutLocationComponent,
        MovieAboutPhoneComponent} from "./movie-about.component.ts";
import {AboutGuard} from "./guard.service";

export const aboutRoutes: RouterConfig = [
    {
        path: "about",
        canActivate: [AboutGuard],
        canDeactivate: [AboutGuard],
        component: MovieAboutComponent,
        children: [
            { path: "phone", component: MovieAboutPhoneComponent},
            { path: "location", component: MovieAboutLocationComponent}
        ]
    }
];