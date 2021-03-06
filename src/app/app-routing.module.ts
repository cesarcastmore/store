import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import {CartComponent } from './pages/cart/cart.component';
import {ProductComponent } from './pages/product/product.component';
import {ProfileComponent } from './pages/profile/profile.component';
import {DetailsProductComponent} from './pages/details-product/details-product.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'productos',
  pathMatch: 'full'
},{
  path: 'productos', 
  component: ProductsComponent
},{
  path: 'carrito', 
  component: CartComponent
}, {
  path: 'productos/:id', //esto es para pasar parametros en la ruta 
  component: ProductComponent

},{
  path: 'perfil',
  component: ProfileComponent

}, {
  path: 'detalles/producto/:id', 
  component: DetailsProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
