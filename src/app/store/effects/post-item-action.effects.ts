import * as postItemActions from '../actions/post-item.actions';
import { Actions, Effect } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class PostItemActionsEffects {
  constructor(private _actions: Actions, private _snackbar: MatSnackBar) {}

  @Effect({ dispatch: false })
  addToFavorites$ = this._actions
    .ofType(postItemActions.PostItemActionTypes.ADD_FAVORITE)
    .do(() =>
      this._snackbar.open('Post added to favorites!', 'Dismiss', {
        duration: 2000
      })
    );
}
