import { Pipe, PipeTransform } from '@angular/core';

//Esta libreria es de gran ayuda para hacer la conversion de timestamp a Date
//https://momentjs.com/
import * as moment from 'moment';


@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(timestamp: number, ...args: unknown[]): Date {


    //Estamos haciendo la conversion number a Date usando la libreria de momentjs
    let date: Date= moment(timestamp).toDate();

    return date;
  }

}
