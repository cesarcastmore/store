import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { DescriptionComponent } from './components/description/description.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonsCartComponent } from './components/buttons-cart/buttons-cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CardComponent,
    ImagenComponent,
    DescriptionComponent,
    ButtonsComponent,
    MenuComponent,
    ButtonsCartComponent,
    ProductComponent,
    ProfileComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
