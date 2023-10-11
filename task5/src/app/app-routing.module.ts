import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { NewsFormComponent } from './pages/news-form/news-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsFeedComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'submit', component: NewsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
