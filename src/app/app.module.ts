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
  MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { HackerNewsServiceService } from './services/hacker-news/hacker-news.service';
import { Http, HttpModule } from '@angular/http';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    PostContainerComponent,
    PostListComponent,
    NavbarComponent,
    PostItemComponent
  ],
  providers: [HttpModule, HackerNewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
