import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  news!: BlogPost;
  comment!: string;
  id!: string;
  constructor(private activatedRoute: ActivatedRoute, private apiClient: ApiService) {}

  ngOnInit(): void {
    const _id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);
    if (_id) {
      this.id = _id;
      this.getNews(this.id);
    }
  }

  getNews(id: string) {
    this.apiClient.getNewsById(id)
      .subscribe(result => {
        this.news = result;
      });
  }
  onSubmit() {
    if (this.comment) {
      this.apiClient.postComment(this.id, this.comment)
        .subscribe();
      this.news.comments.push({comment: this.comment, _id: ''});
      this.comment = '';

    }
  }

}
