import { Component, OnInit, Input } from '@angular/core';

import * as fromStore from '../../store/store';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  AddToFavoritesAction,
  RemoveFromFavoritesAction
} from '../../store/actions/post-item.actions';

@Component({
  selector: 'post-item-action-container',
  template: `<post-item-actions [favorite]="favorite" (favoriteAction)="addRemoveFavorite()" ></post-item-actions>`
})
export class PostItemActionsContainerComponent implements OnInit {
  @Input() id: number;

  favorite: boolean;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store
      .select(fromStore.selectors.fromPostItemsSelectors.getPostItemFavorites)
      .subscribe(
        favorites => (this.favorite = favorites.indexOf(this.id) > -1)
      );
  }

  addRemoveFavorite() {
    let action;

    if (!this.favorite) {
      action = new AddToFavoritesAction(this.id);
    } else {
      action = new RemoveFromFavoritesAction(this.id);
    }

    this.store.dispatch(action);
  }
}
