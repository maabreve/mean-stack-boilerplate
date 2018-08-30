import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartConfirmComponent } from './components/cart-confirm/cart-confirm.component';

export const routes: Routes = [
  { path: '',  component: CartListComponent},
  { path: 'cart', component: CartListComponent },
  { path: 'confirm', component: CartConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CartRoutingModule {}
