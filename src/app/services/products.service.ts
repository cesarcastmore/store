import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
//Aqui estan almacenadas todas las variables de entorno
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  products: Product[] = [
    new Product('Pantalon', 2.3241, 1),//Estoy colocando varios decimales para usar decimal pipe y solo ajustarlo con dos
    new Product('Camisa', 6.5412, 1),
    new Product('Zapatos', 4, 1),
    new Product('Abrigo', 8, 1)
  ];

  //Estamos instanciando el servio de http para hacer peticiones y ya esta listo para usarse
  constructor(private http: HttpClient) {

  }

  //Este metodo hacer un GET al servidor y esta regresando un observable
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url + '/productos.json').pipe(
      map(result=>{

        //El servicio necesito devolver un arreglo y estamos inicializando uno para irlo llenando
        let productos: Product[]=[];

        //Hacermos un loop por los resultados que nos regreso firebase

        for(let key in result){

          //instanciamos un producto y le asignamos sus propiedades
          let prd = result[key];
          let producto: Product= new Product(prd.name, prd.price, 1);
          producto.color= prd.color;
          producto.size= prd.size;
          producto.id= key;

          //Lo estamos agregando a un arreglo
          productos.push(producto); 

        }

        //El resultdo final es un arreglo de productos
        return productos;

      }))
  }

  public getProductos() {

    for (let i = 0; i < this.products.length; i++) {

      //this.products[i].id = i;

      if (i == 1) {
        this.products[i].size = 3;
        this.products[i].color = "Red";
      }
    }

    for (let product of this.products) {
      product.color = 'Green';

      //Este estamos simulando que es un timestamp
      product.created = 1519482900000;
    }


    //Arrow Functions
    this.products.forEach((product: Product) => {
      product.size = 4;
    })


    return this.products;
  }





  public setProductos(products: Product[]): void {
    this.products = products;

  }
}
