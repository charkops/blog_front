import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { Category } from '../models/category';
import { BlogService } from '../services/blog.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {

  availableCategories: Category[] = [];
  blog: Blog;

  @Input() i: number;

  constructor(
    private categoriesService: CategoriesService,
    private blogService: BlogService,
    private router: Router
  ) {
    this.blog = new Blog;
  }

  ngOnInit(): void {
    // Get current blog
    this.blogService.getBlog().subscribe(blog => {
      this.blog = blog;
    });

    // Retrieve and list all categories of blog
    this.categoriesService.getCategories().subscribe(categories => {
      this.availableCategories = categories;
    })
  }

  onCategoryClick(i: number) {
    const category = this.availableCategories[i];
    const category_id = category.category_id;
    this.router.navigate(['category', category_id]);
  }

}
