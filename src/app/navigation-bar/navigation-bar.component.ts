import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {

  public zoomOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

  constructor() { }

  ngOnInit() {
  }

}
