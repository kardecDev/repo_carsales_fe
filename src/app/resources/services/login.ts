import { Injectable } from '@angular/core';
import { Requestlogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { Auth } from './auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private HttpClient: HttpClient, private authService: Auth) { }
  public doLogin(requestLogin: Requestlogin): Observable<ResponseLogin> {
    return this.HttpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
      requestLogin
    ).pipe(tap((loginResponse) => this.authService.loginResponse = loginResponse));
  }
}
