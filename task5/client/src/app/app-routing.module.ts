import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualNewsComponent } from './individual-news/individual-news.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'news/:id', component: IndividualNewsComponent },
  { path: '', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
