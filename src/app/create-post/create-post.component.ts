import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  category_id: number;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.category_id = +this.route.snapshot.params['category_id'];
  }

  // Getter efor easy access to Form field
  get f() {
    return this.createPostForm.controls;
  }

  onSubmit() {
    // Stop if form is invalid
    if (this.createPostForm.invalid) {
      return;
    }

    this.postsService.createPost({
      category_id: this.category_id,
      title: this.f.title.value,
      content: this.f.content.value
    }).subscribe(post => {
      this.router.navigate(['']);
    });
  }
}
