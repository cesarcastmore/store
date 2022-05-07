import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { OrderLine } from '../../models/order-line';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-detail-order-line',
  templateUrl: './detail-order-line.component.html',
  styleUrls: ['./detail-order-line.component.css']
})
export class DetailOrderLineComponent implements OnInit {

  @Input() orderLine: OrderLine | null = null;
  @Output() onUpdateQuantity: EventEmitter<number> = new EventEmitter<number>();

  formOrderLine: FormGroup= new FormGroup({
    quantity: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {

    this.formOrderLine.get('quantity')?.valueChanges
    .subscribe(value=> this.onUpdateQuantity.emit(value)
    );


  }

}
