import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../../models/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() name: string = 'INFO';

  contador: number = 0;


  buttons: Button[] = [{
    action: 'Agregar',
    type: 'primary',
    title: 'Agregar'
  }, {
    action: 'Borrar',
    type: 'danger',
    title: 'Borrar'
  }]


  @Output() onAction: EventEmitter<string> = new EventEmitter<string>();




  constructor() {

   }

  ngOnInit(): void {



  }


  public onClick(event: any, action: string): void {


    this.contador += 1;
    this.onAction.emit(action);

  }

}
