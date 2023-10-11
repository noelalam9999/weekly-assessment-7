import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  isSortByDate: boolean = false;
  isSortByPopularity: boolean = false;
  @Input() allNews!: BlogPost[];
  constructor(private apiClient: ApiService) {}

  ngOnInit(): void {

  }

  sortByVotes() {
    this.allNews.sort((a, b) => b.votes - a.votes)
    this.isSortByPopularity = false;
  }

  sortByDates() {
    this.allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.isSortByDate = false;
  }


  vote(id: string) {
    for (const key in this.allNews) {
      if (Object.prototype.hasOwnProperty.call(this.allNews, key)) {
        const element = this.allNews[key];
        if (element._id === id) {
          element.votes++;
          this.sortByVotes();
          break;
        }
      }
    }
    this.apiClient.updateVote(id)
      .subscribe(result => {
        console.log(result);


      })
  }

  hide(id: string) {
    for (const key in this.allNews) {
      if (Object.prototype.hasOwnProperty.call(this.allNews, key)) {
        const element = this.allNews[key];
        if (element._id === id) {
          // this.allNews.splice(key, 1);
          Array.prototype.splice.call(this.allNews, Number(key), 1)
          break;
        }
      }
    }
    this.apiClient.hideBlogPost(id).subscribe();
  }
}
