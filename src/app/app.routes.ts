import { PostContainerComponent } from './containers/postContainer/postContainer.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'news/:page',
    data: { feedType: 'news' },
    component: PostContainerComponent
  },
  {
    path: 'newest/:page',
    data: { feedType: 'newest' },
    component: PostContainerComponent
  },
  {
    path: 'show/:page',
    data: { feedType: 'show' },
    component: PostContainerComponent
  },
  {
    path: 'ask/:page',
    data: { feedType: 'ask' },
    component: PostContainerComponent
  },
  {
    path: 'jobs/:page',
    data: { feedType: 'jobs' },
    component: PostContainerComponent
  },
  { path: '', redirectTo: 'news/1', pathMatch: 'full' },
  { path: '**', redirectTo: 'news/1' }
];
