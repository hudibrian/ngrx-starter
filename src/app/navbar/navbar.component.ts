import { Component, OnInit, Input } from '@angular/core';
import * as fromStore from '../store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  favoriteCount: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) {
    this.favoriteCount = store.select(
      fromStore.selectors.fromPostItemsSelectors.getPostItemFavoritesCount
    );
  }

  ngOnInit() {}
}
