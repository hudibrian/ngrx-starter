import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  @Input() posts;
}