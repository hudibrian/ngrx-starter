import { Action } from '@ngrx/store';

export const PostItemActionTypes = {
  ADD_FAVORITE: '[PostItem] Add favorite',
  REMOVE_FAVORITE: '[PostItem] Remove favorite'
};

export class AddToFavoritesAction implements Action {
  type = PostItemActionTypes.ADD_FAVORITE;
  constructor(public payload: number) {}
}

export class RemoveFromFavoritesAction implements Action {
  type = PostItemActionTypes.REMOVE_FAVORITE;
  constructor(public payload: number) {}
}

export type PostItemActions = AddToFavoritesAction | RemoveFromFavoritesAction;
