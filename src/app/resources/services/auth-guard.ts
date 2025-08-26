import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: Auth) { }

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }

}
