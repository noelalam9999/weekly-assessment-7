import { Component } from '@angular/core';
import { HackernewsService } from 'src/app/shared/hackernews.service';

@Component({
  selector: 'app-hacker-news-form',
  templateUrl: './hacker-news-form.component.html',
  styles: [],
})
export class HackerNewsFormComponent {
  constructor(public service: HackernewsService) {}

  //save form Data
  onSubmit() {
    this.service.postNews().subscribe((res: any) => {
      console.log(res);
      this.service.fetchNewsList();
    });
  }




  //sort by date coming from db













}
