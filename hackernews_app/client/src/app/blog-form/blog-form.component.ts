import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {
  title!: string;
  url!: string;
  @Output() dataPostedEvent = new EventEmitter<boolean>();
  constructor(private apiClient: ApiService) {}

  onSubmit() {
    if (this.title && this.url) {
      this.apiClient.postNews(this.title, this.url)
        .subscribe(result => {
          this.title = '';
          this.url = '';
          this.dataPostedEvent.emit(true);
        });

    }
  }
}
