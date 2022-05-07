import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  productId: string | null = '';
  product: Product = new Product('', 1, 1);

  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');

    let getProduct$: Observable<Product> = this.productService.getProduct(this.productId);
    getProduct$.subscribe(product => this.product = product);


  }

}
