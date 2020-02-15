import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ramFilter'
})
export class RamFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    // if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    // let ganesh = Object.keys(items[0])
    debugger
    let newv = Object.keys(items[0]);
    console.log(newv.includes(searchText.toString()));

    // return items.filter(it => {
    //   return it.rom.toLowerCase().includes(searchText);
    // });
  }
}


