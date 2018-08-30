import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartActionTypes } from '../actions/cart.actions';
import { Cart } from '../model/cart.model';
import { Product } from '../../products/model/product.model';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cart: Array<any>;

  constructor(private _store: Store<any>) {
  }

  public addCart(product: Product, quantity: number): void {
    const uuid = Math.random();
    const cart: Cart = {
      id: uuid.toString(),
      product: product,
      quantity: quantity
    };

    this._store.dispatch({
      type: CartActionTypes.ADD,
      payload: cart
    });

  }

  public deleteCart(id: string): void {
    this._store.dispatch({
      type: CartActionTypes.REMOVE,
      payload: { id: id }
    });
  }
}
