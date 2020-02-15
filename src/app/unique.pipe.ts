import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

// @Pipe({
//   name: 'unique',
//   pure: false
// })

// export class UniquePipe implements PipeTransform {
//     transform(value: any): any {
//         if (value !== undefined && value !== null) {
//             return _.uniqBy(value, 'name');
//         }
//         return value;
//     }
// }

@Pipe({
    name: 'unique',
    pure: false
})
export class UniquePipe implements PipeTransform {
    transform(items: any[], value: string): any {
        const values = [];
        let i;
        let unique: boolean;
        const results = [];
        let obj;
        if (items) {
            for (i = 0; i < items.length; i++) {
                obj = items[i];
                unique = true;
                // tslint:disable-next-line: prefer-for-of
                for (let v = 0; v < values.length; v++) {
                    if (obj[value] === values[v]) {
                        unique = false;
                    }
                }
                if (unique) {
                    values.push(obj[value]);
                    results.push(obj);
                }
            }
        }
        return results;
    }
}
