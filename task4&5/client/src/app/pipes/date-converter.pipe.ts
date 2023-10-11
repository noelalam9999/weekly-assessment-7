import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter',
})
export class DateConverterPipe implements PipeTransform {
  transform(timeStamp: number, ...args: unknown[]): unknown {
    if ((Date.now() - timeStamp) / 1000 < 60) {
      return 'now';
    } else if ((Date.now() - timeStamp) / (1000 * 60) < 60) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60)),
        'min'
      );
    } else if ((Date.now() - timeStamp) / (1000 * 60 * 60) < 24) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60 * 60)),
        'hour'
      );
    } else if ((Date.now() - timeStamp) / (1000 * 60 * 60 * 24) < 7) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60 * 60 * 24)),
        'day'
      );
    } else if ((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 7) < 4) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 7)),
        'week'
      );
    } else if ((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 7 * 4) < 12) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 30)),
        'month'
      );
    } else if ((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 30 * 12) > 1) {
      return this.makePluralIfNeeded(
        Math.floor((Date.now() - timeStamp) / (1000 * 60 * 60 * 24 * 30 * 12)),
        'year'
      );
    } else {
      return;
    }
  }

  private makePluralIfNeeded(num: number, unit: string) {
    let ret = `${num} ${unit}`;
    if (num > 1) ret += 's ';
    else ret += ' ';
    ret += 'ago';
    return ret;
  }
}
