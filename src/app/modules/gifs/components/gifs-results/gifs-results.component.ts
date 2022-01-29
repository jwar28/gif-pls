import { Component } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
  selector   : "app-gifs-results",
  templateUrl: "./gifs-results.component.html",
})
export class GifsResultsComponent {
  get gifsResults() {
    return this.gifsService.gifsResults;
  }

  constructor(private gifsService: GifsService) {}
}
