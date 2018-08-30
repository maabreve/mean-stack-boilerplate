import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartConfirmComponent } from './components/cart-confirm/cart-confirm.component';

import { CartService } from './services';

@NgModule({
  imports: [
    MaterialModule,
    CartRoutingModule,
    CommonModule
    ],
  declarations: [
    CartListComponent,
    CartIconComponent,
    CartConfirmComponent
  ],
  providers: [ CartService ],
  exports: [CartIconComponent, CartListComponent, CartConfirmComponent]
})

export class CartModule { }
