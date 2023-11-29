import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  readonly urlPrefix: string;
  readonly authPrefix: string;

  private readonly httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private _http: HttpClient) {
    this.urlPrefix = environment.API_URL;
    this.authPrefix = environment.API_URL + '';
  }

  /***** Login *****/
  userLogin(credentials: {}) {
    return this._http.post(this.urlPrefix + '/user/login', credentials, this.httpOptions);
  }

  /***** Registration *****/
  userRegister(credentials: {}): any {
    return this._http.post(this.urlPrefix + '/api/register', credentials, this.httpOptions);
  }
}
