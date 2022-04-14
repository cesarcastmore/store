import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() description: string='Many desktop';
  @Input() price: number= 20;
  claseProducto: string='product-name';

  

  constructor() { }

  ngOnInit(): void {
  }

}
