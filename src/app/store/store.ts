import { combineReducers, compose } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';

import * as fromPostItemsSelectors from './selectors/post-item.selectors';
import * as fromPostItems from './reducers/post-item.reducer';

export interface AppState {
  postItems: fromPostItems.State;
}

export const reducers = {
  postItems: fromPostItems.reducer
};

export const selectors = {
  fromPostItemsSelectors
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(
  reducers
);

const prodReducer: Function = compose(combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
  if (!environment.production) {
    return developmentReducer(state, action);
  } else {
    return prodReducer(state, action);
  }
}
