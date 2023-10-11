import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'news/:id',
    component:CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
