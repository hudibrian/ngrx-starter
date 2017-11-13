import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PostListComponent } from './post-list/post-list.component';
import { PostContainerComponent } from './containers/postContainer/postContainer.component';
import {
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { HackerNewsServiceService } from './services/hacker-news/hacker-news.service';
import { Http, HttpModule } from '@angular/http';
import { PostItemComponent } from './post-item/post-item.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContentLayoutComponent } from './content-layout-component/content-layout.component';
import { UserDetailContainerComponent } from './containers/userDetailContainer/user-detail-container.component';
import { UserDetailItemComponent } from './user-detail-item/user-detail-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailsContainerComponent } from './containers/commentsContainer/item-details-container.component';
import { ItemDetailsCommentsComponent } from './item-details/item-details-comments/item-details-comments.component';
import { metaReducer } from './store/store';
import { StoreModule } from '@ngrx/store';
import { PostItemActionsComponent } from './post-item-actions/post-item-actions.component';
import { PostItemActionsContainerComponent } from './containers/postItemActionContainer/post-item-action.container';
import { EffectsModule } from '@ngrx/effects';
import { PostItemActionsEffects } from './store/effects/post-item-action.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ reducer: metaReducer }),
    EffectsModule.forRoot([PostItemActionsEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : []
  ],
  declarations: [
    AppComponent,
    PostContainerComponent,
    PostListComponent,
    NavbarComponent,
    PostItemComponent,
    ContentLayoutComponent,
    UserDetailContainerComponent,
    UserDetailItemComponent,
    ItemDetailsContainerComponent,
    ItemDetailsComponent,
    ItemDetailsCommentsComponent,
    PostItemActionsComponent,
    PostItemActionsContainerComponent
  ],
  exports: [RouterModule],
  providers: [HttpModule, HackerNewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
