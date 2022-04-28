import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() description: string='Many desktop';
  @Input() price: number= 20;


  //Pedimos al padre el objecto producto para usarlo en routerlink y  usar el id para abrir su respetivo enlace
  @Input() product: Product= new Product('', 0, 0);


  claseProducto: string='product-name';

  

  constructor() { }

  ngOnInit(): void {
  }

}
