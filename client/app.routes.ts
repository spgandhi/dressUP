import { RouterConfig, provideRouter } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { WardrobeListComponent } from './imports/wardrobe/wardrobe-list.component';
 
const routes: RouterConfig = [
  { path: '', component: WardrobeListComponent },
  { path: 'home', component: WardrobeListComponent, canActivate: ['CanActivateForLoggedIn'] }
];
 
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  { provide: 'CanActivateForLoggedIn', useValue: () => !! Meteor.userId() }
];