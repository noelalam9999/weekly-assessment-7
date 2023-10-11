import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
})
export class NewsFormComponent {
  title: string = '';
  url: string = '';

  @Output() create = new EventEmitter<any>();

  onSubmit() {
    const news = {
      title: this.title,
      url: this.url,
    };
    this.create.emit(news);
    this.title = '';
    this.url = '';
  }
}
