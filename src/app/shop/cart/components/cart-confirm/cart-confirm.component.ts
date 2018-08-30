import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: 'cart-confirm.component.html',
  styleUrls: ['cart-confirm.component.css']
})

export class CartConfirmComponent implements OnInit {

  constructor(private _store: Store<any>) {
  }

  ngOnInit() {
  }
}
