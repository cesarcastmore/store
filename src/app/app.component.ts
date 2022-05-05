import { Component, OnInit } from '@angular/core';
import { menus } from './data/menus';
import { Menu } from './models/menu';
import { ToastService, OrderService } from './services';

import { Observable, Observer } from 'rxjs';
import { Order } from './models/order';


//Estoy importanta la contante que tendra las configraciones que cambiaran mi estilo de la aplicacion 
import { configuration } from './data/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  //Estoy iniciando esta variable para utilizar en la platilla html
  configuration = configuration;

  list_menus: Menu[] = menus;

  isOpen: boolean = false;

  title = 'store';
  constructor(public _toastService: ToastService, private orderService: OrderService) {


  }

  ngOnInit(): void {


    let orders$: Observable<Order> = this.orderService.getOrders();

    orders$.subscribe((order: Order) => {

      if (!order.active) {
        order.active = true;
        let create_order$: Observable<Order> = this.orderService.postOrder(order);
        create_order$.subscribe((order: Order) => {
          this.orderService.setOrder(order);
        });

      }else {
        this.orderService.setOrder(order);
      }


    })




    /*let cambios: Observable<number> = this.createObservable();

    console.log("INICIO");
    cambios.subscribe(value => console.log(value));
    console.log("FIN");*/





  }


  public createObservable(): Observable<number> {

    return Observable.create((observer: Observer<number>) => {

      let contador: number = 0

      setTimeout(() => {
        contador += 1;
        observer.next(contador)

      }, 1000);


      setTimeout(() => {
        contador += 1;
        observer.next(contador)

      }, 2000);


      setTimeout(() => {
        contador += 1;
        observer.next(contador)

      }, 4000);


      setTimeout(() => {
        observer.complete()

        console.log("termine");

      }, 5000);

    })


  }


  open() {

    this.isOpen = !this.isOpen;

  }




}
