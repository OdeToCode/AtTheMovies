import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
	selector: "app",
	template: "<h1>{{message}}</h1>"
})
class App {
	message: string
	constructor() {
		this.message = "Hello, from ng2!";
	}
}

bootstrap(App);