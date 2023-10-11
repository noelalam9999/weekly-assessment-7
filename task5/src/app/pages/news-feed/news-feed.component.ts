import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  newsList: any[] = [];
  sortedNewsList: any[] = [];

  constructor(private NewsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.NewsService.getAllNews().subscribe((data) => {
      this.newsList = data.filter((news) => news.visibility === 1);
      this.sortNewsByDate();
    });
  }

  sortNewsByDate() {
    this.sortedNewsList = [
      ...this.newsList.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    ];
  }

  createNews(news: any) {
    this.NewsService.createNews(news).subscribe(() => {
      this.loadNews();
    });
  }

  onSortChange(event: any) {
    const sortBy = event.target.value;
    if (sortBy === 'date') {
      this.sortNewsByDate();
    } else if (sortBy === 'upvotes') {
      this.sortedNewsList = [
        ...this.newsList.sort((a, b) => b.upvotes - a.upvotes),
      ];
    }
  }

  upvote(news: any) {
    console.log('Upvoting news:', news._id);
    this.NewsService.upvoteNews(news._id).subscribe(() => {
      news.upvotes += 1;
      console.log('News upvoted');

      this.sortNewsByUpvotes();
    });
  }

  sortNewsByUpvotes() {
    this.sortedNewsList = [
      ...this.newsList.sort((a, b) => b.upvotes - a.upvotes),
    ];
  }

  hide(news: any) {
    console.log('Hiding news:', news._id);
    this.NewsService.hideNews(news._id).subscribe(() => {
      console.log('News hidden');
      this.loadNews();
    });
  }
}
