import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';
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
    return of(environment.user.email === email && environment.user.password === password).pipe(
      tap(() => localStorage.setItem('currentUser', JSON.stringify(environment.user)))
    );
  }

  logout() {
    localStorage.setItem('currentUser', null);
  }

}