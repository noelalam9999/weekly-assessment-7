import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  dateDistance:string = ''
  constructor(private router: Router,private newService:NewsService,private http:HttpClient){
    
  }
  newsData:any[] = []
  baseUrl = 'http://localhost:5020/news'
  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe({
      next:(data:any)=>{
        this.newsData = data
        this.newService.setAllNews(data)
        console.log(this.newsData)
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }
  navigate(){
    this.router.navigate(['/news'])
  }
  newsSite(e:any){
    window.open("//" + e, '_blank')
  }

}
