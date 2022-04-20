import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [
    new Product('Descripcion 1', 2, 1),
    new Product('Descripcion 2', 6, 1),
    new Product('Descripcion 3', 4, 1),
    new Product('Descripcion 4', 8, 1)
  ];



  constructor() { }

  ngOnInit(): void {

      

    for(let i=0; i<this.products.length; i++) {
      if(i== 1){
        this.products[i].size=3;
        this.products[i].color= "Red";
      }
    }

    for(let product of this.products){
      product.color= 'Green';
    }


    this.products.forEach((product: Product)=> {
      product.size= 4;
    })


  }

}
