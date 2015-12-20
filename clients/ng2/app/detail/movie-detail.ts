import {RouteParams} from "angular2/router";
import {Component, OnInit} from "angular2/core";

@Component({
	template: "<div>{{id}}</div>"
})
export class MovieDetail implements OnInit {
	
	
	constructor(private _params : RouteParams) {
		this.id = _params.get("id");
	}
	
	ngOnInit() {
		
	}
	
	id:string;
	
}