import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { News } from './news';

@Injectable({
  providedIn: 'root',
})

// addTodoForm = this.fb.group({
//   topic: [''],
// });

// postTodo() {
//   console.log(this.addTodoForm.value);
//   return this.http
//     .post(this.baseURL, this.addTodoForm.value)
//     .pipe(catchError(this.errorHandler));
// }

// upVote(id: string, score: number) {
//   return this.http
//     .put(`${this.baseURL}${id}/up`, { score: score })
//     .pipe(catchError(this.errorHandler));
// }

// downVote(id: string, score: number) {
//   return this.http
//     .put(`${this.baseURL}${id}/down`, { score: score })
//     .pipe(catchError(this.errorHandler));
// }

// deleteTodo(_id: string) {
//   return this.http
//     .delete(this.baseURL + _id)
//     .pipe(catchError(this.errorHandler));
// }
export class NewsService {
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  readonly baseURL = `http://localhost:4000/news/`;
  list: News[] = [];
  post: News | undefined;

  addNewsForm = this.fb.group({
    title: [''],
    url: [''],
  });

  addCommentForm = this.fb.group({
    content: [''],
  });

  async getAllNews() {
    this.http
      .get(this.baseURL)
      .pipe(catchError(this.errorHandler))
      .subscribe((data) => {
        this.list = data as News[];
        const sortedList = this.list.sort((a, b) => b.votes - a.votes);
        console.log(typeof sortedList[0].date);
        return sortedList;
      });
  }

  async getNewsById(id: string) {
    this.http
      .get(`${this.baseURL}${id}`)
      .pipe(catchError(this.errorHandler))
      .subscribe((data) => {
        this.post = data as News;
        return this.post;
      });
  }

  postNews() {
    console.log(this.addNewsForm.value);
    return this.http
      .post(this.baseURL, this.addNewsForm.value)
      .pipe(catchError(this.errorHandler));
  }

  postComment(id: string) {
    console.log(this.addCommentForm.value);
    return this.http
      .put(`${this.baseURL}${id}`, this.addCommentForm.value)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}`, error.error);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
