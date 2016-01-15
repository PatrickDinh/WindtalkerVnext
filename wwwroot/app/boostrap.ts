import * as router from 'angular2/router';
import {bootstrap}    from 'angular2/platform/browser';
import {bind, provide} from 'angular2/core';
import {App} from './app';

bootstrap(App, [
    router.ROUTER_PROVIDERS,
    bind(router.APP_BASE_HREF).toValue(location.pathname),
    provide(router.LocationStrategy, {useClass: router.HashLocationStrategy})
]);