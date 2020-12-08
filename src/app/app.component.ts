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
  ingredients = [];
  measures = [];
  keys = [];

  getRandomDrink() {
    this.dataSvc.getRandom().subscribe((res: any) => {
      console.log(res);

      this.clearOldState();

      this.drink = res.drinks[0];
      this.keys = Object.keys(this.drink);

      this.keys.forEach((element) => {
        if (
          element.startsWith("strIngredient") &&
          !(this.drink[element] == null || this.drink[element] == "")
        ) {
          this.ingredients.push(element);
        }
        if (
          element.startsWith("strMeasure") &&
          !(this.drink[element] == null || this.drink[element] == "")
        ) {
          this.measures.push(element);
        }
      });
      console.log("Ingredients", this.ingredients);
      console.log("Measure", this.measures);
    });
  }

  clearOldState() {
    this.drink = null;
    this.ingredients = [];
    this.measures = [];
    this.keys = [];
  }
}
