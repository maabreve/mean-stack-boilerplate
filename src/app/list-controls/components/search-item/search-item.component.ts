import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchActionTypes } from '../../actions/search.actions';


@Component({
  selector: 'app-search-item',
  templateUrl: 'search-item.component.html',
  styleUrls: ['search-item.component.css']
})

export class SearchItemComponent {
  private searchText: string;

  constructor(private _store: Store<any>) {
  }

  onSearchChange(value: string) {
      this._store.dispatch({
        type: SearchActionTypes.SEARCH,
        payload: value
      });
  }
}
