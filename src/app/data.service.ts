import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getRandom() {
    return this.http.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
  }
}
