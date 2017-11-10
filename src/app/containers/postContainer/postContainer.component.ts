import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { HackerNewsServiceService } from '../../services/hacker-news/hacker-news.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'post-container',
  templateUrl: './postContainer.component.html',
  styleUrls: ['./postContainer.component.css']
})
export class PostContainerComponent implements OnInit {
  posts: Observable<any>;
  feed: string;
  page: number;

  constructor(
    private _hnService: HackerNewsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.feed = data['feedType'];
      this.route.params.subscribe(params => {
        this.page = +params['page'];
        this.getPosts(this.feed, this.page);
      });
    });
  }

  getPosts(feedType: string, pageNumber: number) {
    this.posts = this._hnService.getFeed(feedType, pageNumber);
  }
}
