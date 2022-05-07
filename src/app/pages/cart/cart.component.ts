import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ToastService, ProductsService, OrderService } from '../../services';
import { Order } from '../../models/order';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { OrderLine } from '../../models/order-line';
import { OrderLineService } from '../../services/order-line.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  //lifecycle event

  products: Product[] = [];

  //Esta variables es para usarla en la platilla html
  order: Order | null = null;

  orderLines: OrderLine[] = [];


  sumatoria = 0;


  sum = (): number => {
    let contador = 0;
    for (let product of this.products) {
      contador += product.getAmount();
    }


    //Obtengo la orden del servico 
    let order: Order = this.orderService.getOrder();

    //Actualizo el nuevo total
    order.total = contador;

    //Aplico el cambio en el backend
    let putOrder$: Observable<Order> = this.orderService.putOrder(order);
    putOrder$.subscribe((order: Order) => {
      //Actualizo la nueva orden en el servicio
      this.orderService.setOrder(order);
    })


    return contador;
  }



  constructor(private _toastService: ToastService,
    private _productService: ProductsService,
    private orderService: OrderService,
    private _orderLineService: OrderLineService,
    private router: Router) {

  }

  ngOnInit(): void {


    //Aqui estoy haciendo la peticion al servidor, recordando que esta variable se carga cuando se
    //inicializa el app.component.ts
    this.order = this.orderService.getOrder();

    //si el servidor es falso, se redireccion a productos
    if (!this.order.active) {
      this.router.navigate(['/productos']);
    } else {

      //Vamos a obtener todos los productos del API
      let getAllProduct$: Observable<Product[]> = this._productService.getProducts();

      getAllProduct$.subscribe(product => {
        this.products = product;
        let orderId: string = this.order?.id ?? '';
        let getAllOrderLines$: Observable<OrderLine[]> = this._orderLineService.getOrderLines(orderId);
        getAllOrderLines$.subscribe(orderLines => {

          for (let orderLine of orderLines) {
            orderLine.product = this.products.find(product => product.id === orderLine.product_id);
          }

          this.orderLines = orderLines;

        });





      })




      //this.products = this._productService.getProductos();
      this.sumatoria = this.sum();
    }






  }


  invoke(action: string, orderLine: OrderLine | undefined): void {

    if (orderLine === undefined) {
      return;
    }

    if (action === 'Delete') {

      /*for(let i=0; i<this.products.length; i++){
        if(product.id === this.products[i].id){
          this.products.splice(i, 1);
        }
      }*/


      //Arrow Functions
      /*let index = this.products.findIndex((product_item: Product) => {
        return product_item.id === product.id;
      });
      this.products.splice(index, 1);
      this.sumatoria = this.sum();
      this._toastService.alert('Error', 'Se ha borrado el producto');
      this._productService.setProductos(this.products);*/



      let deleteOrderLine$: Observable<any> = this._orderLineService.deleteOrderLine(orderLine.id ?? '');
      deleteOrderLine$.subscribe(line=> {



        let index = this.orderLines.findIndex(line=> line.id=== orderLine.id );
        this.orderLines.splice(index, 1);


      });











    } else if (action === 'Update') {
      this._toastService.alert('Success', 'Se ha actualizado el producto');

    }



  }


  updateQuantity(quantity: number, orderLine:OrderLine) {

    orderLine.quantity= quantity;
    orderLine.amount=orderLine.quantity* orderLine.price;
    let putOrderLine$: Observable<OrderLine> = this._orderLineService.putOrderLine(orderLine);
    putOrderLine$.subscribe(orderLine => {
      this.sum();
    });






  }

}
