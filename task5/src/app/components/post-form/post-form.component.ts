import { Component } from '@angular/core';
import { PostService } from 'src/app/common/services/post.service';

import { ToastrService } from 'ngx-toastr';
import { PostComponent } from '../post-lists/post/post.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [],
})
export class PostFormComponent {
  submitted: boolean = false;
  constructor(public service: PostService, private toastr: ToastrService) {}
 
  // on form submit
  onSubmit() {
    this.submitted = true;
    if (this.service.postForm.valid) {
      console.log(this.service.postForm.value);
      this.service.postEmployee().subscribe((res) => {
        console.log('got the response');
        this.service.fetchAllPosts();
        this.toastr.success('Created successfully', 'Employee Register');
        this.resetForm();
      });
    } else {
      alert('Form is not valid.');
    }
  }
  // on form reset
  resetForm() {
    this.service.postForm.reset();
    this.submitted = false;
  }
}
