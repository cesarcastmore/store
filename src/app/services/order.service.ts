import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {



  constructor(private http: HttpClient) {

  }


  public getOrders(): Observable<Order> {
    return this.http.get<Order>(environment.url + "/orders.json").pipe(
      map((result: any)=> {

        for (let key in result) {
          let order: Order= result[key];
          order.id = key;

          if(order.active){
            return order;
          }

        }

        return {
          active: false, 
          id: '', 
          total:0
        }

      })
    )


  }




}
