import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-cart',
  templateUrl: './buttons-cart.component.html',
  styleUrls: ['./buttons-cart.component.css']
})
export class ButtonsCartComponent implements OnInit {


  @Output() onAction: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onUpdate(){

    this.onAction.emit('Update');
  }


  onDelete(){
    this.onAction.emit('Delete');

  }

  mouseOver(event: any){
    console.log(event)
  }

}
