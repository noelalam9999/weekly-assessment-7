import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {
  transform(createdOn: string): string {
    const createdDate = new Date(createdOn);
    const now = new Date();

    const diffInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minutes ago`;
    } else {
      const datePipe = new DatePipe('en-US');
      return `Created on ${datePipe.transform(createdDate, 'short')}`;
    }
  }
}
