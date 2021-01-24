import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  availablePosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    const category_id = +this.route.snapshot.params['category_id'];
    this.postsService.getAllPostsFromCategory(category_id)
    .subscribe(posts => {
      // NOTE (@charkops): Again please fix this posts.posts
      this.availablePosts = posts.posts;
    })
  }

  onHomeClick() {
    this.router.navigate(['']);
  }

}
