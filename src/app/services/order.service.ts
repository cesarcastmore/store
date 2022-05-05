import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order = { id: '', active: false, total: 0 };



  constructor(private http: HttpClient) {

  }


  public getOrders(): Observable<Order> {
    return this.http.get<Order>(environment.url + "/orders.json").pipe(
      map((result: any) => {



        for (let key in result) {
          console.log(result);

          let order: Order = result[key];
          console.log(order);

          order.id = key;

          if (order.active) {
            return order;
          }

        }

        return {
          active: false,
          id: '',
          total: 0
        }

      })
    )


  }


  public postOrder(order: Order) {

    return this.http.post<Order>(environment.url + "/orders.json", order).pipe(
      map((result: any) => {

        console.log(result);

        order.id = result.name;
        //order.id= result['name'];

        return order;

      })
    )

  }

  public putOrder(order: Order) {

    return this.http.put<Order>(environment.url + "/orders/" + order.id + ".json", order);


  }


  public getOrder(): Order {
    return this.order;
  }


  public setOrder(order: Order) {
    this.order = order;
  }




}
