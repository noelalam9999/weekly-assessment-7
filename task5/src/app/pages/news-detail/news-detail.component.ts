import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {
  news: any;
  comments: any[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private NewsService: NewsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const newsId = params.get('id');
      if (newsId) {
        this.loadNews(newsId);
        this.loadComments(newsId);
      }
    });
  }

  loadNews(newsId: string) {
    this.NewsService.getAllNews().subscribe((data: any[]) => {
      this.news = data.find((item) => item._id === newsId);
    });
  }

  loadComments(newsId: string) {
    this.NewsService.getCommentsForNews(newsId).subscribe((data) => {
      this.comments = data;
      console.log(this.comments);
    });
  }

  addComment() {
    if (this.newComment) {
      this.NewsService.createCommentForNews(this.news._id, { text: this.newComment }).subscribe(() => {
        this.loadComments(this.news._id);
        this.newComment = '';
      }, (error) => {
        console.error(error);
      });
    }
  }
}
