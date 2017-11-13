import { createSelector } from '@ngrx/store/src/selector';

import * as fromPostItems from '../reducers/post-item.reducer';
import { AppState } from '../store';

export const getPostItemsState = (state: AppState) =>
  state['reducer'].postItems;

export const getPostItemFavorites = createSelector(
  getPostItemsState,
  (state: fromPostItems.State) => (state ? state.favorites : [])
);

export const getPostItemFavoritesCount = createSelector(
  getPostItemsState,
  (state: fromPostItems.State) => (state ? state.favorites.length : 0)
);
