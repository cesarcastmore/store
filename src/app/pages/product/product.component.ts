import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Esto es para indicar que puede ser nulo o tener un datps string
  productId: string | null = '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {



    //La documentacion nos dice que puede regresar nulo
    this.productId = this.route.snapshot.paramMap.get('id');

    console.log(this.productId);


  }

}
