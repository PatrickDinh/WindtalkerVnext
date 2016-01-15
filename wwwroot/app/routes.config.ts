import { Route, Router } from 'angular2/router';
import { RegisterComponent } from './register/Register';
import { LoginComponent } from './login/Login';

export var Routes = {
  register: new Route({path: '/register', component: RegisterComponent, name: 'Register'}),
  login: new Route({path: '/login', component: LoginComponent, name: 'Login'}),
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
