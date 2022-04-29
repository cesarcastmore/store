import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService} from '../../services/products.service';
import { Product} from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Esto es para indicar que puede ser nulo o tener un datps string
  productId: string | null = '';
  public product: Product | null = null;

  

  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit(): void {



    //La documentacion nos dice que puede regresar nulo
    this.productId = this.route.snapshot.paramMap.get('id');


    let product$: Observable<Product> = this.productService.getProduct(this.productId);
    product$.subscribe(product=>{
      this.product= product;
    })

    console.log(this.productId);


  }

}
