import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.round(value * 100) / 100;
  }

}
