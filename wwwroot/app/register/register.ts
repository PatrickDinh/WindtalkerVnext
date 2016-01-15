import {Component} from 'angular2/core';
import {RegisterService} from './register.service';

@Component({
  selector: 'register',
  templateUrl: './app/register/register.tpl.html',
  providers: [RegisterService]
})

export class RegisterComponent {
    public registered: boolean;
    public model: RegisterModel;
    
    constructor(private _registerService: RegisterService) {
        this.model = new RegisterModel();
    }
    
    submit() {
        this._registerService
            .registerUser(this.model.email, this.model.password)
            .subscribe(() => console.log('done'));
    }
}

class RegisterModel {
    public email: string;
    public password: string;
    
    constructor() { }
}