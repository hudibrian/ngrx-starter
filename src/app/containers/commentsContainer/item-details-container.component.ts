import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsServiceService } from '../../services/hacker-news/hacker-news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'item-details-container',
  templateUrl: 'item-details-container.component.html'
})
export class ItemDetailsContainerComponent implements OnInit {
  item: Observable<any>;

  constructor(
    private _hnService: HackerNewsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = this._hnService.getComments(params['id']);
    });
  }
}
