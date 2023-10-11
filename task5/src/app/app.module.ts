import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { CommentComponent } from './pages/comment/comment.component';
import { NewsFormComponent } from './pages/news-form/news-form.component';
import { RelativeDatePipe } from './relative-date.pipe';

@NgModule({
  declarations: [AppComponent, NavComponent, NewsFeedComponent, NewsDetailComponent, CommentComponent, NewsFormComponent, RelativeDatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
