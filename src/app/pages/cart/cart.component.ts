import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import {ToastService} from '../../services/toast.service';
import {ProductsService} from '../../services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  //lifecycle event

  products: Product[] = [];


  sumatoria=0;


  sum = (): number => {
    let contador = 0;
    for (let product of this.products) {
      contador += product.getAmount();
    }
    return contador;
  }



  constructor(private _toastService: ToastService, private _productService: ProductsService) {
    
  }

  ngOnInit(): void {

    this.products= this._productService.getProductos();


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
      this._toastService.alert('Error', 'Se ha borrado el producto');
      this._productService.setProductos(this.products);


    }else if(action==='Update'){
      this._toastService.alert('Success', 'Se ha actualizado el producto');

    }



  }

}
