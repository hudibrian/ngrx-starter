import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: any;
  @Input() feedType: string;
  @Input() page: number;

  listStart: number = 1;

  ngOnChanges() {
    this.listStart = (this.page - 1) * 30 + 1;
  }
}
