import { Pipe, PipeTransform } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    // debugger;
    const newItems = [];
    const resultArr = [];
    if (!items) { return []; }
    items.forEach(el => {
      if (!el.result) {
        const array = Object.entries(el);
        let str = '';
        array.forEach(data => {
          if (data[0] === 'ram' || data[0] === 'brand' || data[0] === 'rom') {
            if (data[0] === 'ram') {
              str = str + ' ' + data[1].toString().toLowerCase() + 'gb';
              return;
            }
            str = str + ' ' + data[1].toString().toLowerCase();
          }
        });
        // console.log(str);

        el.result = str;
      }
    });

    // console.log(items);

    // if (!items) { return []; }
    if (!searchText) { return items; }
    const ram = 'ram';
    const rom = 'rom';
    const brand = 'brand';
    let withoutRam = '';
    let withoutRom = '';
    let withoutBrand = '';

    let newSearchText = '';
    if ((searchText.match(ram)) || (searchText.match(rom)) || (searchText.match(brand))) {
      withoutRam = searchText.replace(ram, '');
      withoutRom = withoutRam.replace(rom, '');
      withoutBrand = withoutRom.replace(brand, '');
      newSearchText = (withoutBrand.replace(/  +/g, ' ')).trim();
      // newSearchText.trim();
    } else {
      newSearchText = searchText;
    }




    items.forEach(el => {
      // const keyss = Object.keys(el);
      // const valuess = Object.values(el);
      const array = Object.entries(el);
      array.forEach(data => {
        // if (data[0] === 'ram' || data[0] === 'brand' || data[0] === 'rom')
        if (data[0] === 'result') {
          // console.log('matching or not? ', data);
          if (data[1].toString().toLowerCase().match(newSearchText.toString().toLowerCase())) {
            newItems.push(el);
          }
          // if (el.result.toString().toLowerCase().includes(searchText.toString().toLowerCase())) {
          //   newItems.push(el);
          // }
        }
      });
    });


    //   // if (valuess.includes(searchText.toString())) {
    //   //   newItems.push(el);
    //   // }
    // });
    return newItems;
  }

}
