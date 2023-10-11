import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news/:id',
    component: SingleBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
