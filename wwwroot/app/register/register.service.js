System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var RegisterService, RegisterRequestDto, RegisterResponseDto;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegisterService = (function () {
                function RegisterService(_http) {
                    this._http = _http;
                }
                RegisterService.prototype.registerUser = function (email, password) {
                    var dto = {
                        email: email,
                        password: password
                    };
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var requestOptions = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this._http.post("/api/register", JSON.stringify(dto), requestOptions);
                };
                RegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterService);
                return RegisterService;
            })();
            exports_1("RegisterService", RegisterService);
            RegisterRequestDto = (function () {
                function RegisterRequestDto() {
                }
                return RegisterRequestDto;
            })();
            RegisterResponseDto = (function () {
                function RegisterResponseDto() {
                }
                return RegisterResponseDto;
            })();
        }
    }
});
//# sourceMappingURL=register.service.js.map