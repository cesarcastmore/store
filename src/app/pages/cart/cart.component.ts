import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  //lifecycle event

  products: Product[] = [
    new Product('Descripcion 1', 2, 1),
    new Product('Descripcion 2', 6, 1),
    new Product('Descripcion 3', 4, 1),
    new Product('Descripcion 4', 8, 1)
  ];


  sumatoria=0;


  sum = (): number => {
    let contador = 0;
    for (let product of this.products) {
      contador += product.getAmount();
    }
    return contador;
  }



  constructor() {
    
  }

  ngOnInit(): void {



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

    this.sumatoria= this.sum();


  }


  invoke(action: string, product: Product): void {

    if (action === 'Delete') {

      /*for(let i=0; i<this.products.length; i++){
        if(product.id === this.products[i].id){
          this.products.splice(i, 1);
        }
      }*/


      //Arrow Functions
      let index = this.products.findIndex((product_item: Product) => {
        return product_item.id === product.id;
      });
      this.products.splice(index, 1);
      this.sumatoria= this.sum();


    }



  }

}
