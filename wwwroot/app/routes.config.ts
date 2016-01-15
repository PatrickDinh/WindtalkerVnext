import { Route, Router } from 'angular2/router';
import { RegisterComponent } from './register/Register';

export var Routes = {
  register: new Route({path: '/register', component: RegisterComponent, name: 'Register'}),
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
