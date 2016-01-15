System.register(['angular2/router', 'angular2/platform/browser', 'angular2/core', './app'], function(exports_1) {
    var router, browser_1, core_1, app_1;
    return {
        setters:[
            function (router_1) {
                router = router_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router.ROUTER_PROVIDERS,
                core_1.bind(router.APP_BASE_HREF).toValue(location.pathname),
                core_1.provide(router.LocationStrategy, { useClass: router.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boostrap.js.map