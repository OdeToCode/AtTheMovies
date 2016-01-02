import { EventEmitter, Component, Directive, Input, Output, OnInit, OnDestroy, OnChanges} from "angular2/core";
import {StarPipe} from "../pipes/StarPipe"
import {Movie} from "../models/Movie";

@Component({
	selector:"movie-display",
	template: `
		<div>
			<h3> {{ movie.title }} </h3>
			<div (click)="changeRating()">
				Rating: {{movie.rating | stars }}
			</div>
		</div>
	`,
	pipes: [StarPipe]
})
export class MovieDisplay  {
	
	@Input() movie : Movie
	@Output() ratingChange : EventEmitter<number> = new EventEmitter();
	
	
	changeRating() {
		this.ratingChange.emit(this.movie.rating + 1);
	}
		
}

	// ngOnChanges(changes) {
	// 	console.dir(changes);		
	// }


@Directive({
	
})
export class Foo {}