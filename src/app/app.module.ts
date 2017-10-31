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
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.hackernewsFirebase),
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    PostContainerComponent,
    PostListComponent,
    NavbarComponent,
    LayoutContainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
