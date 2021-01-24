import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  // NOTE (@charkops): Does this also need a AuthGuard ?
  // Probably right ?
  {path: 'category/:category_id', component: CategoryComponent},
  {path: 'post/:post_id', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createPost/:category_id', component: CreatePostComponent},

  // Otherwise redirect to home
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
