import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CredentialsService {
    constructor(private _http: HttpClient) {}
    //  login service
    public authenticate(user_details): any {
        return this._http.post('http://localhost:8080/login', user_details);
    }
}