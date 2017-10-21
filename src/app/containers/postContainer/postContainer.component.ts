import { Component } from "@angular/core";

@Component({
  selector: "post-container",
  templateUrl: "./postContainer.component.html",
  styleUrls: ["./postContainer.component.css"]
})
export class PostContainerComponent {
  posts = [
    { title: "something" },
    { title: "something" },
    { title: "something" }
  ];
}
