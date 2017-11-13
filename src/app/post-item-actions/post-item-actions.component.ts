import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-item-actions',
  templateUrl: 'post-item-actions.component.html'
})
export class PostItemActionsComponent implements OnInit {
  @Input() favorite: boolean;
  @Output() favoriteAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
