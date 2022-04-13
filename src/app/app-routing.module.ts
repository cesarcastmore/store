import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import {CartComponent } from './pages/cart/cart.component'

const routes: Routes = [{
  path: 'productos', 
  component: ProductsComponent
},{
  path: 'carrito', 
  component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
