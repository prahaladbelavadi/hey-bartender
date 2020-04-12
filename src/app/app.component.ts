import { Component } from "@angular/core";

import { setTheme } from "ngx-bootstrap/utils";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dataSvc: DataService) {
    setTheme("bs4");
  }
  title = "Bartender";
  drink: any;
  getRandomDrink() {
    this.dataSvc.getRandom().subscribe((res: any) => {
      this.drink = res.drinks[0];
    });
  }
}
