import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[] = [
    new Product('Descripcion 1', 2, 1),
    new Product('Descripcion 2', 6, 1),
    new Product('Descripcion 3', 4, 1),
    new Product('Descripcion 4', 8, 1)
  ];

  /*
    products: Array<Product> = [
      new Product('Descripcion 1', 2, 1),
      new Product('Descripcion 2', 6, 1),
      new Product('Descripcion 3', 4, 1),
      new Product('Descripcion 4', 8, 1)
    ];
    */

  constructor() { }

  ngOnInit(): void {
  }

}
