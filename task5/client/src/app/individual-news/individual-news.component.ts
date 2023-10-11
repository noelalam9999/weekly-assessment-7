import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';
import { News } from '../news';


@Component({
  selector: 'app-individual-news',
  templateUrl: './individual-news.component.html',
  styles: [
  ]
})
export class IndividualNewsComponent {

  news: News | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: NewsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.service.fetchNews()
    this.getNews();
  }

  goBack(): void {
    this.location.back();
  }
  
  getNews(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getNews(id)
    .subscribe(item => this.news = item);
  }
}
