import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';
import { Store } from '@ngrx/store';
import { CartService } from '../../../cart';


@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  private id: string;
  private product: Product;

  constructor(private _store: Store<any>, private activatedRoute: ActivatedRoute,
            private productService: ProductsService, private cartService: CartService) {

    this.activatedRoute.params.subscribe(p => {
      if (!p.id) {
        // todo: handle
      }

      this.id = p.id;

      this.productService.getById(p.id).subscribe(product => {
        this.product = product;
      });
    });
  }

  ngOnInit() {
  }

  addToCart(product: Product, quantity: any) {
    const qt = quantity && quantity.value ? quantity.value : 1;
    this.cartService.addCart(product, qt);
  }
}
