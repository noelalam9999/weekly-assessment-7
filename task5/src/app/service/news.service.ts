import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsSubject: Subject<any> = new Subject<any>();
  private allNewsSubject: Subject<any> = new Subject<any>();

  setNews(news: any) {
    this.newsSubject.next(news);
  }

  getNews(): Observable<any> {
    return this.newsSubject.asObservable();
  }

  setAllNews(news: any) {
    this.allNewsSubject.next(news);
  }
  getAllNews():Observable<any>{
    return this.allNewsSubject.asObservable();
  }
}
