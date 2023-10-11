
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createNews(newsData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/news`, newsData);
  }

  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }

}
