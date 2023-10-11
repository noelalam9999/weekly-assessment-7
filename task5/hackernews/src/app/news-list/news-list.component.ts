import { Component } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  news = {
    title: 'breaking news',
    url: 'bbc',
    desc: 'alsjfs alsdjfls ldsjfla'
  }
}
