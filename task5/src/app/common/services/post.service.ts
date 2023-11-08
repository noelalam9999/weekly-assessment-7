import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostResponse } from '../models/post-response';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  readonly baseURL = 'http://localhost:5000/api/posts/';
  list: Post[] = [];

  // form builder object
  postForm = this.fb.group({
    _id: [null],
    title: ['', Validators.required],
    url: ['', Validators.required],
  });

  // fetch all posts
  fetchAllPosts() {
    this.http
      .get<PostResponse>(this.baseURL)
      .pipe(
        catchError(this.handleError),
        map((res) => res.data)
      )
      .subscribe((res) => {
        this.list = res as Post[];
        console.log(res);
      });
  }

  // create a new post
  createPost() {
    return this.http
      .post(this.baseURL, this.postForm.value)
      .pipe(catchError(this.handleError));
  }

  // upvote a post
  upVoteAPost(id: string) {
    const url = `${this.baseURL}${id}/${'up'}`;
    return this.http.put(url, {}).pipe(catchError(this.handleError));
  }

  // down vote a post
  downVoteAPost(id: string) {
    const url = `${this.baseURL}${id}/${'down'}`;
    return this.http.put(url, {}).pipe(catchError(this.handleError));
  }

  // delete post
  deletePost(id: string) {
    return this.http
      .delete(this.baseURL + id)
      .pipe(catchError(this.handleError));
  }

  // handle error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
