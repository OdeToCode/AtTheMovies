import {Component, Input} from "@angular/core";
import {Movie} from "../models/movie";

@Component({
    selector: "movie-panel",
    templateUrl: "./movie-panel.component.html"
})
export class MoviePanelComponent {
    @Input() movie: Movie;
}