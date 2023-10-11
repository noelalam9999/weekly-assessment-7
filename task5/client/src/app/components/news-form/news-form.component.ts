import { Component,Output,EventEmitter } from '@angular/core';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  
})
export class NewsFormComponent {
  formData = {
    title: '',
    details: '',
  };

  @Output() addNewNews = new EventEmitter<News>();

  constructor(private api: NewsService){}
  onSubmit() {
    this.api.postNews(this.formData).then(res=>{
      this.addNewNews.emit(res);
    })
  }
}
