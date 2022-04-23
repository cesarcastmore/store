import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  

  products: Product[] = [
    new Product('Pantalon', 2.3241, 1),//Estoy colocando varios decimales para usar decimal pipe y solo ajustarlo con dos
    new Product('Camisa', 6.5412, 1),
    new Product('Zapatos', 4, 1),
    new Product('Abrigo', 8, 1)
  ];



  constructor() {

   }

   public getProductos(){

    for (let i = 0; i < this.products.length; i++) {

      this.products[i].id = i;

      if (i == 1) {
        this.products[i].size = 3;
        this.products[i].color = "Red";
      }
    }

    for (let product of this.products) {
      product.color = 'Green';
    }


    //Arrow Functions
    this.products.forEach((product: Product) => {
      product.size = 4;
    })


     return this.products;
   }


   public setProductos(products: Product[]): void{
     this.products=products;

   }
}
