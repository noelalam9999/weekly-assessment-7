import { Component, inject } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
})
export class AllNewsComponent {
  constructor(public service: NewsService) {}

  ngOnInit(): void {
    this.service.getAllNews();
  }

  // upvoteTopic(_id: string, score: number) {
  //   this.service.upVote(_id, score).subscribe((res) => {
  //     this.service.fetchTodos();
  //   });
  // }

  // downvoteTopic(_id: string, score: number) {
  //   this.service.downVote(_id, score).subscribe((res) => {
  //     this.service.fetchTodos();
  //   });
  // }

  // deleteTopic(_id: string) {
  //   if (confirm('Are you sure to delete this record?')) {
  //     this.service.deleteTodo(_id).subscribe((res) => {
  //       this.service.fetchTodos();
  //     });
  //   }
  // }
}
