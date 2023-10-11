import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const difference: number = Date.now() - new Date(value).getTime();
    const seconds = difference / 1000;

    if (seconds > 365 * 24 * 60 * 60) {
      return `${Math.floor(seconds / (365 * 24 * 60 * 60))} years ago`;
    } else if (seconds > 30 * 24 * 60 * 60) {
      return `${Math.floor(seconds / (30 * 24 * 60 * 60))} months ago`;
    } else if (seconds > 7 * 24 * 60 * 60) {
      return `${Math.floor(seconds / (7 * 24 * 60 * 60))} weeks ago`;
    } else if (seconds > 24 * 60 * 60) {
      return `${Math.floor(seconds / ( 24 * 60 * 60))} days ago`;
    } else if (seconds >   60 * 60) {
      return `${Math.floor(seconds / ( 60 * 60))} hours ago`;
    } else if (seconds >  60) {
      return `${Math.floor(seconds / ( 60))} minutes ago`;
    }
    return ' min ago';
  }


}
