import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    templateUrl: "./movie-app.component.html",
    selector: "movie-app" 
})
class MovieAppComponent {
    
    message: string;

    constructor() {
        this.message = "Hello, from a component!";
    }

    changeMessage() {
        this.message = "This is a new mesage!";
    }
}

 bootstrap(MovieAppComponent);


























// import {bootstrap} from "@angular/platform-browser-dynamic";
// import {MovieAppComponent} from "./app/movie-app.component.ts";
// import {APP_ROUTER_PROVIDERS} from "./app/movie-app.routes";
// import {HTTP_PROVIDERS} from "@angular/http";
// import {AboutGuard} from "./app/about/guard.service";
// import { disableDeprecatedForms, 
//          provideForms } from '@angular/forms';
// import "./style/app.scss";

// bootstrap(MovieAppComponent, [
//     AboutGuard, 
//     disableDeprecatedForms(),
//     provideForms(),
//     APP_ROUTER_PROVIDERS,
//     HTTP_PROVIDERS
// ]);
