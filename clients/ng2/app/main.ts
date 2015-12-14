
	import {bootstrap, Component} from "angular2/angular2";
	
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
	
	
	