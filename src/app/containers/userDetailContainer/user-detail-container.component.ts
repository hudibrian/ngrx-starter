import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsServiceService } from '../../services/hacker-news/hacker-news.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-detail-container',
  templateUrl: 'user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.css']
})
export class UserDetailContainerComponent implements OnInit {
  userId: string;
  user: Observable<any>;

  constructor(
    private _hnService: HackerNewsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this._hnService.getUser(params['id']);
    });
  }
}
