import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { OrderLine } from '../models/order-line';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private http: HttpClient) {

  }

  public postOrderLine(orderLine: OrderLine) {
    return this.http.post<OrderLine>(environment.url + "/order_lines.json", orderLine).pipe(
      map((result: any) => {

        orderLine.id = result.name;
        //order.id= result['name'];

        return orderLine;

      })
    )
  }


  public getOrderLines(orderId: string | null): Observable<OrderLine[]> {

    return this.http.get<OrderLine[]>(environment.url + "/order_lines.json").pipe(
      map(result => {

        let orderLines: OrderLine[] = [];

        for (let key in result) {
          let orderLine = result[key];
          orderLine.id= key;

          if (orderLine.order_id === orderId) {
            orderLines.push(orderLine);
          }
        }

        return orderLines;

      })
    )


  }

  public deleteOrderLine(id: string): Observable<any> {

    return this.http.delete<any>(environment.url + '/order_lines/' + id + '.json')



  }








}
