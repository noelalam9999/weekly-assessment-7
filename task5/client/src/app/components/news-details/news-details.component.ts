import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  news: News = {
    id: '',
    title: '',
    details: '',
    createdOn: ''
  };
  id='';

  constructor(private route: ActivatedRoute, private api: NewsService) { }


  comment:string = ''


  addComment() {
    this.api.postComment(this.id,this.comment).then(res=>{
      console.log(res);
    })
    console.log(this.comment);
    this.comment = ''
  }


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.api.getOneNews(this.id).then(res=>{
      this.news = res;
    })
  }
}
