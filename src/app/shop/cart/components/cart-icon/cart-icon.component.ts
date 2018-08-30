import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart-icon',
  templateUrl: 'cart-icon.component.html',
  styleUrls: ['cart-icon.component.css']
})

export class CartIconComponent implements OnInit {
  private cartItems: number;
  private _cartStore: any;

  constructor(private _store: Store<any>) {
    this.cartItems = 0;
    this._cartStore = this._store.select('cart').subscribe(cart => {
      this.cartItems = 0;
      if (cart && cart.length > 0) {
        const x = 0;
        cart.forEach(element => {
          if (element.quantity) {
            this.cartItems += parseInt(element.quantity, null);
          }
        });
      }
    });

  }

  ngOnInit() {
    this.cartItems = 0;
  }
}
