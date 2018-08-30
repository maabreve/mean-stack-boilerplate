import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: 'cart-list.component.html',
  styleUrls: ['cart-list.component.css']
})
export class CartListComponent {
  private _cartStore: any;
  private _cartList: Array<Cart>;
  private _total: number;

  constructor(private _store: Store<any>, private _cartService: CartService) {
    this._total = 0;
    this._cartStore = this._store.select('cart').subscribe(cart => {
      this._total = 0;
      this._cartList = cart;
      this._cartList.forEach(c => {
        this._total += c.product.price * c.quantity;
      });
    });
  }

  delete(cart: Cart): void {
    console.log(cart);
    this._cartService.deleteCart(cart.id);
  }
}
