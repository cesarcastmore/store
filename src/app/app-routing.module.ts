import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import {CartComponent } from './pages/cart/cart.component';
import {ProductComponent } from './pages/product/product.component';
import {ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [{
  path: 'productos', 
  component: ProductsComponent
},{
  path: 'carrito', 
  component: CartComponent
}, {
  path: 'producto',
  component: ProductComponent

},{
  path: 'perfil',
  component: ProfileComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
