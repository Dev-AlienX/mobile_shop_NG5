import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    if (value === null) { return 'Not assigned'; }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
