import {CanActivate, CanDeactivate} from '@angular/router';
import {MovieAboutComponent} from "./movie-about.component";

export class AboutGuard implements 
      CanActivate, CanDeactivate<MovieAboutComponent> {

  canActivate() {
    console.log('canActivate');
    return true;
  }

  canDeactivate(component) {
    return component.canDeactivate();
  }
}