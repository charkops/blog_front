import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Anyone calling this will be able to subscribe to it to get all available users
  getAllUsers() {
    return this.http.get<User[]>(environment.backendUrl + '/users')
  }
}
