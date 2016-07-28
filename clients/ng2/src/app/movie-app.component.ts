import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MovieData} from "./services/movie.service";

@Component({
  selector: "movie-app",
  templateUrl: "./movie-app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [MovieData],
})
export class MovieAppComponent {
  color: string;

  constructor() {
    this.color = "red";
  }

  changeColor() {
    this.color = "green";
  }
}