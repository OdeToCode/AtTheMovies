import {bootstrap} from "@angular/platform-browser-dynamic";
import {MovieAppComponent} from "./app/movie-app.component.ts";
import {APP_ROUTER_PROVIDERS} from "./app/movie-app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import {AboutGuard} from "./app/about/guard.service";

bootstrap(MovieAppComponent, [
    AboutGuard, 
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
