import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  blog: Blog;

  constructor(
    private authenticationService: AuthenticationService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
    // NOTE (@charkops): To avoid annoying angular ctx.blog is undefined error
    this.blog = new Blog;
    this.blogService.getBlog()
    .subscribe(blog => {
      this.blog = blog;
    });
  }

}
