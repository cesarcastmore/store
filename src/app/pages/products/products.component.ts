import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ToastService } from '../../services/toast.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {


  products: Product[] = [];

  constructor(private _toastService: ToastService, private _productsService: ProductsService) {

  }

  ngOnInit(): void {

    this.products = this._productsService.getProductos();



  }

}
