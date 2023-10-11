import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsUrl = 'http://localhost:3001/news';
  private commentUrl = 'http://localhost:3001/comments';

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.newsUrl}`);
  }

  createNews(news: any): Observable<any> {
    return this.http.post<any>(`${this.newsUrl}/`, news);
  }

  upvoteNews(newsId: string) {
    return this.http.post(`${this.newsUrl}/upvote/${newsId}`, null);
  }

  hideNews(newsId: string) {
    return this.http.post(`${this.newsUrl}/hide/${newsId}`, null);
  }

  getCommentsForNews(newsId: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.commentUrl}/${newsId}`);
  }

  createCommentForNews(newsId: any, comment: any) {
    return this.http.post(`${this.commentUrl}/${newsId}`, comment);
  }
}
