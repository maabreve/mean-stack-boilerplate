import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { ProductsActionTypes } from '../actions/products.actions';

@Injectable({
  providedIn: 'root',
})


export class ProductsService {
  constructor(private _store: Store<any>) {
  }

  getAll(): Observable<Product[]> {
    const mock = this.getMock();
    this._store.dispatch({
      type: ProductsActionTypes.ADDPRODUCT,
      payload: mock
    });

    return Observable.create(observer => {
      observer.next(mock);
    });
  }

  getById(id: string): Observable<Product> {
    return Observable.create(observer => {
      observer.next(this.getMock().find(p => p.id === id));
    });
  }

  private getMock(): Array<Product> {
    const productList: Array<Product> = [];

    for (let x = 1; x <= 10; x++) {
      const product: Product = {
        id: x.toString(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien sollicitudin ' +
        'Fusce vel hendrerit orci. Pellentesque vel lobortis enim, quis venenatis ligula. Nullam mi turpis, pharetra ' +
        ' non lacinia non, fringilla a arcu. Sed libero nisi, lacinia interdum ligula et, lacinia aliquet urna. Morbi ut ' +
        ' rutrum velit. Sed congue tincidunt arcu, a consectetur felis suscipit at.',
        name: 'Lore Ipsum',
        price: 100,
        imageUrl: 'assets/products/product.jpg',
      };
      productList.push(product);
    }
    return productList;
  }
}
