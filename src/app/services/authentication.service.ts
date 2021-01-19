import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // A helper - getter for User
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Store user info to be logged in even through refreshing the page
  login(email: string, password: string) {
    return this.http.post<any>(environment.backendUrl + '/users/login', { email, password })
      .pipe(map(user => {
        // Store user details and JWT token in local storage
        // NOTE (@charkops): Don't store the password in localStorage for every1 to see ?
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log('login->user:');
        console.log(user);
        return user;
      }));
  }

  // Self-explenatory
  logout() {
    // Remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
