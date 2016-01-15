import {Http, RequestOptions, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class RegisterService {
    constructor(private _http: Http) {
        
    }
    
    registerUser(email: string, password: string) {
        var dto: RegisterRequestDto = {
            email: email,
            password: password
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new RequestOptions({
            headers: headers
        });
        
        return this._http.post("/api/register", JSON.stringify(dto), requestOptions);
    }
}

class RegisterRequestDto {
    public email: string;
    public password: string;
}

class RegisterResponseDto {
    
}