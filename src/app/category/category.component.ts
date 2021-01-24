import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { Post } from '../models/post';
import { CategoriesService } from '../services/categories.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  availablePosts: Post[] = [];
  post: Post;
  category: Category;

  @Input() i: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) {
    this.post = new Post;
  }

  ngOnInit(): void {
    const category_id = +this.route.snapshot.params['category_id'];
    this.postsService.getAllPostsFromCategory(category_id)
    .subscribe(posts => {
      // NOTE (@charkops): Again please fix this posts.posts
      this.availablePosts = posts.posts;
    })

    this.category = new Category;
    this.categoriesService.getCategory(category_id)
    .subscribe(category => {
      this.category = category.category;
      console.log(category);
    })
  }

  onHomeClick() {
    this.router.navigate(['']);
  }

  onPostClick(i: number) {
    this.post = this.availablePosts[i];
    const post_id = this.post.post_id;
    this.router.navigate(['post', post_id]);
  }

  // Go to post creation page
  onCreatePost() {
    const category_id = +this.route.snapshot.params['category_id'];
    this.router.navigate(['createPost', category_id]);
  }
}
