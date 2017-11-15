import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducer } from './store/store';
import { PostItemActionsEffects } from './store/effects/post-item-action.effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { PostContainerComponent } from './containers/postContainer/postContainer.component';
import { PostListComponent } from './post-list/post-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostItemComponent } from './post-item/post-item.component';
import { ContentLayoutComponent } from './content-layout-component/content-layout.component';
import { UserDetailContainerComponent } from './containers/userDetailContainer/user-detail-container.component';
import { UserDetailItemComponent } from './user-detail-item/user-detail-item.component';
import { ItemDetailsContainerComponent } from './containers/commentsContainer/item-details-container.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailsCommentsComponent } from './item-details/item-details-comments/item-details-comments.component';
import { PostItemActionsComponent } from './post-item-actions/post-item-actions.component';
import { PostItemActionsContainerComponent } from './containers/postItemActionContainer/post-item-action.container';
import { HackerNewsServiceService } from './services/hacker-news/hacker-news.service';
import {
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatSnackBarModule
} from '@angular/material';

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
