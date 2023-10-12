import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:id', component: NewsDetailComponent },

  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
