import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    id:string = ''
    news:any = {}
    comment:string = ''
    private routeSub: Subscription | undefined;
    constructor(private route: ActivatedRoute,private http:HttpClient){

    }

    ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
        console.log(params['id']) //log the value of id
        this.id = params['id']
      });
      this.http.get(`http://localhost:5020/news/${this.id}`).subscribe({
        next:(data:any)=>{
          this.news = data
          console.log(this.news)
          console.log(data)
        },
        error:(error)=>{
          console.log(error)
        }
      });
    }
    onSubmit(){
      
      this.http.post(`http://localhost:5020/news/${this.id}`,this.comment )
      .subscribe({
        next:(data:any)=>{
          console.log(data)
          console.log(this.comment)
          
        },
        error:(error)=>{
          console.log(error)
        }
      });
    }
}
