import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { OrderLineService } from '../../services/order-line.service';
//Este servicio es para obtener la actual pedido de venta que se esta usando
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { OrderLine } from '../../models/order-line';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  unit_price: number = 32;

  @Input() product: Product = new Product('', 1, 1);

  constructor(private orderService: OrderService,
    private orderLineService: OrderLineService) { }

  ngOnInit(): void {
  }

  apply(action: string) {

    if (action === 'Agregar') {

      //Estamos creando un observable
      let postOrderLIne$: Observable<OrderLine> = this.orderLineService.postOrderLine({
        product_id: this.product.id,
        order_id: this.orderService.getOrder().id,
        price: this.product.price,
        quantity: 1,
        amount: this.product.price * 1
      });

      postOrderLIne$.subscribe(orderLine=> {
        //anadir aqui el toast service que ya se agrego al carrito
      });




    }
  }

}
