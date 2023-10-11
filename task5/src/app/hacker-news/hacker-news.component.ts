import { Component, OnInit } from '@angular/core';
import { HackernewsService } from '../shared/hackernews.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styles: [
  ]
})
export class HackerNewsComponent implements OnInit{
  constructor(public service: HackernewsService) {}
  //as soon as the page loads, I want to fetch all of the news from db
  ngOnInit (): void {
    this.service.fetchNewsList();
  }


onRedirect(_id: string) {
  if (confirm('Are you sure you want to redirect to this link?')) {
    this.service.getNewsById(_id).subscribe((res: any) => {
      console.log(res);
      window.location.href = res.url;
    });
  }
}

sortByDate() {
  const newlist = this.service.fetchNewsList();
  console.log(newlist);
}


}
