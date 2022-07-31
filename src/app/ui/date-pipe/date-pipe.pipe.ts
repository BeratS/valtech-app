import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  datePipe = new DatePipe('en-US')

  transform(date: any): string {
    if (!date) { return ''; }
    const dt = this.datePipe.transform(date, 'd MMMM yyyy') as string;
    const splitDT = dt.split(' ');
    splitDT[0] = `${splitDT[0]}th`;
    return splitDT.join(' ');
  }

}
