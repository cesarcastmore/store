import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(productos: Product[], value: string): Product[] {



    let arreglo1: Product[] = productos.filter((product: Product) => {
      return product.name.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })


    return arreglo1;
  }

}
