import {Component, Input, Output, OnInit, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {StarPipe} from "../pipes/StarPipe"
import {Movie} from "../models/movie";

@Component({
	selector:"movie-display",
	template: `
		<div class='panel panel-default'>
			<div class='panel-heading'> {{ movie.title }} </div>
			<div class='panel-body' >
				<div (click)="changeRating()">Rating: {{movie.rating | stars }}</div>
				<div><a [routerLink]="['Edit', { id: movie.id}]" class='btn btn-default'>Edit</a></div>
			</div>
		</div>
	`,
	pipes: [StarPipe],
	directives: [ROUTER_DIRECTIVES]
})
export class MovieDisplay  {
	
	@Input() movie : Movie
	@Output() ratingChange : EventEmitter<number> = new EventEmitter<number>();
	
	
	changeRating() {
		this.ratingChange.emit(this.movie.rating + 1);
	}
		
}

