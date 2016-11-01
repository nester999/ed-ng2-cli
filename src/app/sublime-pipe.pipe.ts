import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sublimePipe'
})
export class SublimePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
