import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
    if (!items) { return []; }
    const brands = [];
    const rams = [];
    const roms = [];
    if (filterItems) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < filterItems.length; i++) {
        brands.push(filterItems[i].brand);
        rams.push(filterItems[i].ram);
        roms.push(filterItems[i].rom);
      }
    }
    if (!filterItems || filterItems.length === 0) {
      return items;
    }
    if (filter.property === 'brand') {
      if (items && filterItems) {
        return items.filter(
          element => brands.includes(element.brand)
        );
      }
    }
    if (filter.property === 'ram') {
      if (items && filterItems) {
        return items.filter(
          element => rams.includes(element.ram)
        );
      }
    }
    if (filter.property === 'rom') {
      if (items && filterItems) {
        return items.filter(
          element => roms.includes(element.rom)
        );
      }

    }
  }
}
