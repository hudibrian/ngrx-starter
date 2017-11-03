import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { HackerNewsServiceService } from '../../services/hacker-news/hacker-news.service';

@Component({
  selector: 'post-container',
  templateUrl: './postContainer.component.html',
  styleUrls: ['./postContainer.component.css']
})
export class PostContainerComponent {
  posts: Observable<any>;
  constructor(private _hnService: HackerNewsServiceService) {}

  ngOnInit() {
    this.posts = this._hnService.getFeed('news', 1);
  }
}
