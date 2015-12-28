import {bootstrap} from "angular2/platform/browser"
import {ROUTER_PROVIDERS, 
		HashLocationStrategy, 
		LocationStrategy} from "angular2/router"
import {App} from "./app"
import {provide, enableProdMode} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http";
import {MovieService} from "./services/MovieService";


//enableProdMode();
bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	MovieService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

