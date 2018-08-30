import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';
import { Cart, CartService } from '../../../cart';
import { CONFIG } from '../../../../config/app.config';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

  private productList: Array<Product> = [];
  private productListRepo: Array<Product> = [];
  private apiUrl: string;
  private cart: Array<Cart>;
  private _cartStore: any;

  constructor(private _store: Store<any>, private router: Router,
    private productService: ProductsService,
    private cartService: CartService) {
    this._store.select('search').subscribe(searchText => {
      console.log(searchText);
      this.productList = this.productListRepo.filter(item => item.description.toLowerCase().indexOf(searchText) >= 0);
    });

  }

  ngOnInit() {
    this.getProducts();
    this.apiUrl = CONFIG.baseURL + '/product/';
  }

  getProducts() {
    this.productService.getAll().subscribe(productList => {
      this.productListRepo = productList;
      this.productList = productList;
    });
  }

  addToCart(product: Product, quantity: any) {
    const qt = quantity && quantity.value ? quantity.value : 1;
    this.cartService.addCart(product, qt);
    // this.router.navigate(['/cart']);
  }
}

