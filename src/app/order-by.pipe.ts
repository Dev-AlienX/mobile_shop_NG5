import { Pipe, PipeTransform } from '@angular/core';
import { BrandFilterPipe } from './brand-filter.pipe';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], type: string, method: string): any {
    if (!items) { return []; }
    if (!type && !method || type === 'new') {
      return items;
    }
    if (type === 'price' && method === 'asc') {
      return items.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (type === 'price' && method === 'dsc') {
      return items.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (type === 'rating' && method === 'asc') {
      return items.sort((a, b) => {
        return b.rateing - a.rateing;
      });
    }
  }
}
