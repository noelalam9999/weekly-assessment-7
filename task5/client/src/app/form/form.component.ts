import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  constructor(public service: NewsService) {}

  onSubmit() {
    this.service.postNews().subscribe(()=>{
      console.log('posted successfully');
      this.service.fetchNews()
      this.resetForm()
    })
  }

  resetForm() {
    this.service.news.reset({
      title: '',
      url: '',
    });
  }
}
