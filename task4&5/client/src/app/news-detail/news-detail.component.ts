import { Component, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent {
  post = {};
  constructor(public service: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.service.getNewsById(id);
  }

  onSubmit() {
    let id = this.route.snapshot.params['id'];
    this.service.postComment(id).subscribe((res) => {
      console.log(res);
      this.service.addCommentForm.reset();
      this.service.getNewsById(id);
    });
  }
}
