import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romFilter'
})
export class RomFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    debugger;
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.rom.toLowerCase().includes(searchText);
    });
  }

}
