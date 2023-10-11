import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css'],
})
export class NewsFormComponent {
  constructor(public service: NewsService) {}

  onSubmit() {
    this.service.postNews().subscribe((res) => {
      console.log(res);
      this.service.addNewsForm.reset();
      this.service.getAllNews();
    });
  }
}
