import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { News } from '../interface/news';
import { Comment } from '../interface/comment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://192.168.68.83:3333/api/news'

  constructor() { }

  getNews = async (): Promise<News[]> => {
    const res = await axios.get(this.url);
    console.log(res.data);
    return res.data;
  } 

  getOneNews = async (id:string): Promise<News> => {
    const res = await axios.get(`${this.url}/${id}`);
    return res.data;
  } 

  postNews = async (data: { title: string; details: string; }): Promise<News> => {
    const res = await axios.post(this.url, data);
    return res.data;
  } 

  postComment = async (id: string, comment: string): Promise<Comment> => {
    const res = await axios.put(`${this.url}/${id}`, {comment});
    return res.data;
  } 

  // getCategory(): Observable<any>{
  //   return this.http.get(`${this.url}categories`)
  // }

  // getCategoryMovies(categoryId: number){
  //   return this.http.get(`${this.url}categories/${categoryId}`)
  // }

  // getMovie(id: number){
  //   return this.http.get(`${this.url}movie/${id}`)
  // }
}
