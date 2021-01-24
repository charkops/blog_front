import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './alert/alert.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { TrancPostContentPipe } from './pipes/tranc-post-content.pipe';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    CategoriesDetailsComponent,
    PostsDetailsComponent,
    PostComponent,
    CategoryComponent,
    TrancPostContentPipe,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
