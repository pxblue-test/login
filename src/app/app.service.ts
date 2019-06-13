import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  constructor() {
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') ? true : false;
  }

  login(email: string, password: string): Observable<boolean> {

// if email is valid (matches regex) and password length > 0
    let user= {
      'email': email,
      'password': password
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    return of(true);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user):Observable<boolean> {
    if(user){
      return of(true);
    }
  }

}
