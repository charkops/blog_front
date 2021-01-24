import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post_id: number;  
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post_id = this.route.snapshot.params['post_id'];

    // Get post
    this.post = new Post;
    this.postsService.getPost(this.post_id)
    .subscribe(post => {
      // NOTE (@charkops): Please fix this aswell, same thing, back-end returns an
      // object with 'post' in it, should be just post
      this.post = post.post;
    })
  }

  onHomeClick() {
    this.router.navigate([""]);
  }

  onDelete() {
    this.postsService.deletePost(this.post.post_id)
    .subscribe(message => {
      // This doesn't have to be logged
      this.router.navigate(['']);
    });
  }

}
