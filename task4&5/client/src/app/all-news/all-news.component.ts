import { Component, inject } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
})
export class AllNewsComponent {
  constructor(public service: NewsService) {}

  ngOnInit(): void {
    this.service.getAllNews();
  }

  upvoteTopic($event: any, _id: string, score: number) {
    $event.preventDefault();
    this.service.upVote(_id, score).subscribe((res) => {
      this.service.getAllNews();
    });
  }
}
