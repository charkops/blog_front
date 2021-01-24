import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  // Retrieves all categories belonging to a specific 'blog_id'
  getCategories() {
    // Get blog_id from currently logged in user
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const blog_id = currentUser.blog_id;

    return this.http.post<Category[]>(environment.backendUrl + '/categories', { blog_id });
  }

  getCategory(category_id: number) {
    return this.http.get<any>(environment.backendUrl + '/categories/' + category_id);
  }
}
