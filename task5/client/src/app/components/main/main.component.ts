import { Component } from '@angular/core';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  news: News[] = [];
  constructor(private api: NewsService){}


  addNewNews(newItem: News) {
    this.news.unshift(newItem);
  }
  
  ngOnInit(): void {
    this.api.getNews().then(res => {
      this.news = res;
    });
  }
}
