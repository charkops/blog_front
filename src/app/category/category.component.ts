import { Component, OnInit } from '@angular/core';
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
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    const category_id = +this.route.snapshot.params['category_id'];
    this.postsService.getAllPostsFromCategory(category_id)
    .subscribe(posts => {
      // NOTE (@charkops): Again please fix this posts.posts
      this.availablePosts = posts.posts;
    })

    this.category = new Category;
    this.categoriesService.getCategories
  }

  onHomeClick() {
    this.router.navigate(['']);
  }

  onPostClick() {
    
  }

}
