import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { News } from './news';
import {FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private fb:FormBuilder) { }

  readonly baseUrl ='http://localhost:3000/news'

  sortedNews:News[]=[]
  initialNews:News[]=[]

  news = this.fb.group({
    title:['', Validators.required],
    url:['', Validators.required],
  })

  fetchNews(){
    this.http.get(this.baseUrl).pipe(catchError(this.handleError)).subscribe((data)=>{
      this.initialNews=data as News[]
      this.sortedNews = this.sortByPopularity(this.initialNews)
    })
  }

  postNews(){
    return this.http.post(this.baseUrl,this.news.value,{ responseType: 'text' }).pipe(catchError(this.handleError))
  }

  updateNews(item:News){
    const url = `${this.baseUrl}/${item._id}`;
    const { score } = item
    
    
    return this.http.put(url, { score }, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  getNews(id:string):Observable<News>{
    this.fetchNews()
    const news =(this.sortedNews.find((item)=>item._id === id))
    if(news){

      return of(news)
    } else {
      return throwError(new Error('News not found.'));
    }
  }

  sortByPopularity(arr:News[]){
    return arr.sort((a,b) => b.score-a.score)
  }
  sortByDate(arr: News[]) {
    return arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
