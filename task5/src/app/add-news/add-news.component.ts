import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})

export class AddNewsComponent {
  baseUrl = 'http://localhost:5020/news'
  formData = {
    title: '',
    url:''
  }
  constructor(private http:HttpClient,private newService:NewsService){}
  onSubmit(){
    this.http.post(this.baseUrl, this.formData)
      .subscribe({
        next:(data:any)=>{
          console.log(data)
          this.newService.setNews(data)
        },
        error:(error)=>{
          console.log(error)
        }
      });


  }


}
