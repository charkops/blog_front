import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  availablePosts: Post[] = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    // Grab all posts from blog
    this.postsService.getAllPosts()
    .subscribe(posts => {
      // NOTE (@charkops): Fix this posts.posts, its just ugly.
      // Backend returns an object with { posts } inside, change it to return just the list
      this.availablePosts = posts.posts;
    })
  }

  onPostClick(i: number) {
    const post = this.availablePosts[i];
    
    // Navigate to /post/:post_id to view full post
    
  }

}
