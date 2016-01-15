System.register(['angular2/router', './register/Register'], function(exports_1) {
    var router_1, Register_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Register_1_1) {
                Register_1 = Register_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                register: new router_1.Route({ path: '/register', component: Register_1.RegisterComponent, name: 'Register' }),
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
//# sourceMappingURL=routes.config.js.map