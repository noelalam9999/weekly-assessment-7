import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/common/models/post';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post?: Post;
  constructor(public service: PostService, private toastr: ToastrService) {}

  // handle up vote btn click
  upVoteBtnClickHandler(_id: string) {
    this.service.upVoteAPost(_id).subscribe((res) => {
      this.service.fetchAllPosts();
      this.toastr.error('Up Vote successful');
    });
  }

  // handle down vote btn click
  downVoteBtnClickHandler(_id: string) {
    this.service.downVoteAPost(_id).subscribe((res) => {
      this.service.fetchAllPosts();
      this.toastr.error('Down Vote successful');
    });
  }

  deleteBtnClickHandler(_id: string) {
    this.service.deletePost(_id).subscribe((res) => {
      this.service.fetchAllPosts();
      this.toastr.error('Deleted successfully');
    });
  }
}
