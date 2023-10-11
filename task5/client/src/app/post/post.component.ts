import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent {

  constructor(public service:NewsService) {}

  ngOnInit(){
    this.service.fetchNews()
  }

  increase(item:News){
    item.score++
    this.service.updateNews(item).subscribe((res)=>{
      console.log('item updated successfully');
    })
    this.service.fetchNews()
  }

  sortByPopularity(){
    this.service.sortByPopularity(this.service.sortedNews)
  }
  sortByDate(){
    this.service.sortByDate(this.service.sortedNews)
  }
}
