import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancPostContent'
})
export class TrancPostContentPipe implements PipeTransform {

  transform(value: string, numWords: number = 100): string {
    return value.split(' ').splice(0, numWords).join(' ');
  }

}
