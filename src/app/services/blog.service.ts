import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  // Get blog of current user
  getBlog() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const blog_id = currentUser.blog_id;
    return this.http.get<Blog>(environment.backendUrl + '/blogs/' + blog_id);
  }
}
