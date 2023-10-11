import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allNews!: BlogPost[];
  constructor(private apiClient: ApiService) {}

  ngOnInit(): void {
    this.getNews();
  }

  newDataPosted(event: any) {
    this.getNews();
  }

  getNews() {
    this.apiClient.getAllNews()
    .subscribe(results => {
      this.allNews=results;
    });
  }

}
