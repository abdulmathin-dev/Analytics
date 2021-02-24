import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResults'
})
export class FilterResultsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
