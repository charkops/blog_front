import { Component, OnInit } from '@angular/core';
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

  constructor(
    private categoriesService: CategoriesService,
    private blogService: BlogService
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

}
