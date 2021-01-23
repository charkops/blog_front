import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private postsService: PostsService,
    private router: Router
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
    const post_id = +post.post_id;
    
    // Navigate to /post/:post_id to view full post
    this.router.navigate(["post", post_id]);
  }

}
