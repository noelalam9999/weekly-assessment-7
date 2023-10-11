import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styles: [],
})
export class PostListsComponent implements OnInit {
  constructor(public service: PostService) {}

  ngOnInit(): void {
    // on load fetch data
    this.service.fetchAllPosts();
  }
}
