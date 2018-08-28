import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';

const COMPONENTS = [
  ProductDetailComponent,
    ProductListComponent ];

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ProductsModule { }
