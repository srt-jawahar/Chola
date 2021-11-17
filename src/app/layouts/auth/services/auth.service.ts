import { Router } from '@angular/router';
import { AuthState } from './../state/auth.reducer';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginPayload } from '../models/login';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthPageAction } from '../state/actions';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private store: Store<AuthState>,
    private route: Router,
    
  ) {}

 
  public testService(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((result) => result));
  }

  public signOut(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    
    this.route.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    let token :any;
    token = localStorage.getItem('accessToken');
    if (this.jwtHelper.isTokenExpired(token)) {
      //session expired
      //toastr msg

      this.signOut();
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

}
