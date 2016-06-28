import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {AppComponent} from "./app/app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {MovieService} from "./app/services/MovieService";

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	MovieService
]).catch(err => console.log(err));
