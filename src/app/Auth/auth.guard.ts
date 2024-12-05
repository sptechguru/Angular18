

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem(environment.localStorageKey)) {
      return true;
    }
    if (!localStorage.getItem(environment.localStorageKey)) {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
