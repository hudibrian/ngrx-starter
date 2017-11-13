import { reducers } from './reducers';
import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';

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
