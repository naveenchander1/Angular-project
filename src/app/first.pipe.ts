import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+'sd';
  }

}
