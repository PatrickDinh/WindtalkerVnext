import {Component} from 'angular2/core';
import * as router from 'angular2/router';
import { Routes, APP_ROUTES } from './routes.config';

@Component({
    selector: 'windtalker-app',
    templateUrl: './app/app.tpl.html',
    directives: [router.ROUTER_DIRECTIVES]
})

@router.RouteConfig(APP_ROUTES)

export class App { 
     public routes = Routes;
}