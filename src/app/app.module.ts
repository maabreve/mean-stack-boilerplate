import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';

// store - app state management
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './shop/cart/reducers/cart.reducers';
import { productsReducer } from './shop/products/reducers/products.reducers';
import { searchReducer } from './list-controls/reducers/search.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    [StoreModule.forRoot({ cart: cartReducer, search: searchReducer, products: productsReducer })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
