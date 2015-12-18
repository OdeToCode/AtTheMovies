import {bootstrap} from "angular2/platform/browser"
import {ROUTER_PROVIDERS, 
		HashLocationStrategy, 
		LocationStrategy} from "angular2/router"
import {App} from "./app"
import {provide} from "angular2/core"

bootstrap(App, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);