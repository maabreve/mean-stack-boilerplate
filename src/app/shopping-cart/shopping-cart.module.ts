import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsModule } from '../products/products.module'

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartIconComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule
    ],
  providers: [ShoppingCartService]
})

export class ShoppingCartModule { }
