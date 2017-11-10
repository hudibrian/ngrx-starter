import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit() {}
}
