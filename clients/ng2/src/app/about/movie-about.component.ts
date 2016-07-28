import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template:
        `<div>The about page</div>
         <nav>
            <a [routerLink]="['phone']">Phone</a>
            <a [routerLink]="['location']">Location</a>
         </nav>
         <router-outlet></router-outlet>
        `
})
export class MovieAboutComponent {
    canDeactivate() {
        console.log("can deactivate");
        return true;
    }
}

@Component({
    template: "This is info about the phone number"
})
export class MovieAboutPhoneComponent {

}

@Component({
    template: "This is info about the lcoation..."
})
export class MovieAboutLocationComponent {

}