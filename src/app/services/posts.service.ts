import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // Returns a promise, which when finished, returns all posts in a blog
  getAllPosts() {
    // Get blog_id from currentUser
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const blog_id = +currentUser.blog_id;

    return this.http.get<any>(environment.backendUrl + '/posts/all/' + blog_id);
  }

  getPost(post_id: number) {
    // Get post from post_id
    return this.http.get<any>(environment.backendUrl + '/posts/' + post_id);
  }

  getAllPostsFromCategory(category_id: number) {
    return this.http.get<any>(environment.backendUrl + '/postsFromCategory/' + category_id);
  }

  createPost(newPost: any) {
    return this.http.post<any>(environment.backendUrl + '/posts', newPost);
  }

  deletePost(post_id: number) {
    return this.http.delete<any>(environment.backendUrl + '/posts/' + post_id);
  }
}
