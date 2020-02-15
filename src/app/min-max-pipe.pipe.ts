import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minMaxPipe'
})
export class MinMaxPipePipe implements PipeTransform {
  transform(items: any[], minPrice: number, maxPrice: number): any[] {
    if (!items) { return []; }
    if (!minPrice && !maxPrice) { return items; }
    return items.filter(it => {
      if (minPrice && !maxPrice) {
        return it.price > minPrice;
      } else if (!minPrice && maxPrice) {
        return it.price < maxPrice;
      } else {
        return it.price > minPrice && it.price < maxPrice;
      }
    });
  }
}
