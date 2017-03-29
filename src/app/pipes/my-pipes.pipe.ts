import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes',
  pure: false
})
export class MyPipesPipe implements PipeTransform {

  transform(value: number, exponent: string): string {
    let exp = parseFloat(exponent);
    return value.toFixed(isNaN(exp) ? 1 : exp);
  }

}
