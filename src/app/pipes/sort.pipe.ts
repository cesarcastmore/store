//Este pipe se crear con el comando ng generate  pipe pipes/sort
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
//Esta libreria es para ordenar nuestro arreglo, tiene muchos mas metodos que puede ser utilizandos 
//https://lodash.com/docs/4.17.15
import * as _ from 'lodash';


//https://github.com/ngx-translate/core

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  //Cuando el parametro no fue declarado, typescipt lo toma como undefined y toma el valor por defecto de 'name'
  transform(productos: Product[], order: Order = {key:'name', order:'asc' }): Product[] {


    //Este metdo es para ordernar nuestro productos
    productos = _.orderBy(productos, [order.key], [order.order]);


    return productos;
  }

}


interface Order {
  key: string;
  order: any;
}
