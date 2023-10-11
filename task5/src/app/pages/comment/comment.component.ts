import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input() comment: any;
}
