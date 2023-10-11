import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllNews() {
    return this.http.get<BlogPost[]>(`${this.baseUrl}/news`);
  }
  getNewsById(id: string) {
    return this.http.get<BlogPost>(`${this.baseUrl}/news/${id}`);
  }
  postNews(title: string, body: string) {
    return this.http.post(`${this.baseUrl}/news`, {title, body})
  }
  postComment(id: string, comment: string) {
    return this.http.put(`${this.baseUrl}/comment`, {id, comment})
  }
  updateVote(id: string) {
    return this.http.put(`${this.baseUrl}/vote/${id}`, {})
  }
  hideBlogPost(id: string) {
    return this.http.put(`${this.baseUrl}/hide/${id}`, {})
  }
}
