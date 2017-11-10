import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: any;
  @Input() feedType: string;

  constructor() {}

  ngOnInit() {}

  get hasUrl(): boolean {
    return this.post.url.indexOf('http') === 0;
  }
}
