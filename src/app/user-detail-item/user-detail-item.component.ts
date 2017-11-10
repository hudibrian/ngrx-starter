import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-detail-item',
  templateUrl: './user-detail-item.component.html',
  styleUrls: ['./user-detail-item.component.css']
})
export class UserDetailItemComponent implements OnInit {
  @Input() user: any;

  constructor() {}

  ngOnInit() {}
}
