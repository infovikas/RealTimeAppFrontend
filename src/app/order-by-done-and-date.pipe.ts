import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDoneAndDate',
  pure: false
})
export class OrderByDoneAndDatePipe implements PipeTransform {

  transform(values) {
    if (values) {
      return values.reverse();
    }
  }

  // sort(object) {
  //   const newObject = {};
  //   const keys = [];
  //   for (const key of object) {
  //     keys.push(key);
  //   }
  //   for (let i = keys.length - 1; i >= 0; i--) {
  //     const value = object[keys[i]];
  //     newObject[keys[i]] = value;
  //   }
  //   return newObject;
  // }

}
