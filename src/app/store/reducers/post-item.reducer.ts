import * as postItemActions from '../actions/post-item.actions';

export interface State {
  favorites: number[];
}

const initialState: State = {
  favorites: []
};

export function reducer(
  state = initialState,
  action: postItemActions.PostItemActions
): State {
  switch (action.type) {
    case postItemActions.PostItemActionTypes.ADD_FAVORITE: {
      const id = action.payload;
      const favorites = state.favorites.slice();
      favorites.push(id);

      return Object.assign({}, state, { favorites: favorites });
    }
    case postItemActions.PostItemActionTypes.REMOVE_FAVORITE: {
      const id = action.payload;
      const favorites = state.favorites.slice();
      favorites.splice(favorites.indexOf(id), 1);

      return Object.assign({}, state, { favorites: favorites });
    }
  }
}
