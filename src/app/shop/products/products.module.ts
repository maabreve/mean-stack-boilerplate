import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ListsModule  } from '../../list-controls/lists.module';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';

const COMPONENTS = [
  ProductDetailComponent,
    ProductListComponent ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ListsModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ProductsModule { }
