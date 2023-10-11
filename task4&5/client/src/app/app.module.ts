import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { DateConverterPipe } from './pipes/date-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    NewsFormComponent,
    HomeComponent,
    NewsDetailComponent,
    DateConverterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
