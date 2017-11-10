import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-details-comments',
  template: `
  <div *ngIf="!comment.deleted">
    <div>
      <b>
        <span class="collapsable" (click)="collapse = !collapse">[{{collapse ? '+' : '-'}}]</span>
        <a [routerLink]="['/user', comment.user]" routerLinkActive="active">{{comment.user}}</a>
        <span class="time">{{comment.time_ago}}</span>
      </b>
    </div>
    <div class="content" [hidden]="collapse">
      <p class="comment-text" [innerHTML]="comment.content"></p>
      <ul>
        <li *ngFor="let subComment of comment.comments">
          <item-details-comments [comment]="subComment"></item-details-comments>
        </li>
      </ul>
    </div>
  </div>
  <div *ngIf="comment.deleted">
    <span class="collapsable">[deleted]</span> | Comment Deleted
  </div>
  `,
  styleUrls: ['./item-details-comments.component.css']
})
export class ItemDetailsCommentsComponent implements OnInit {
  @Input() comment: any;
  collapse: boolean;

  constructor() {}

  ngOnInit() {
    this.collapse = false;
  }
}
