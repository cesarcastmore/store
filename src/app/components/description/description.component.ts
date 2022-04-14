import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  description: string='Many desktop';
  price: number= 20;
  claseProducto: string='product-name';

  

  constructor() { }

  ngOnInit(): void {
  }

}
