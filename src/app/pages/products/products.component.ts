import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ToastService } from '../../services/toast.service';
import { ProductsService } from '../../services/products.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {


  products: Product[] = [];

  queryForm: FormGroup= new FormGroup({
    query: new FormControl('')
  });

  constructor(private _toastService: ToastService, private _productsService: ProductsService) {

  }

  ngOnInit(): void {

    this.products = this._productsService.getProductos();



  }

}
