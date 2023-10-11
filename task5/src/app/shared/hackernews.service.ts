import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  //backend unchangeable url
  readonly baseUrl = 'http://localhost:5000/api/hacker-news/';
  //all news array holder
  list: News[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

 //using this form to design a form inside hackernews-form-component
  newsForm = this.fb.group({
    _id: [''],
    title: [''],
    url: [''],
  });

  //to get all of the news from db, need to consume getAllNews() method from server API
  //need to invoke this fetch method inside the parent hackernews.component.ts
  fetchNewsList(): any {
    this.http
      .get(this.baseUrl)
      .pipe(catchError(this.handleError))
      .subscribe((data) => {
        this.list = data as News[];
      });
  }

  //simple method for posting news to db with pipe() for grouping methods, this isn't rxjs pipe btw
  postNews() {
    return this.http
      .post(this.baseUrl, this.newsForm.value)
      .pipe(catchError(this.handleError));
  }

  getNewsById(_id: string) {
    return this.http
      .get(this.baseUrl + _id)
      .pipe(catchError(this.handleError));
  }

















  

  //this is just a copy-paste method from docs to handle error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

}
