import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
  selector   : "app-gifs-search",
  templateUrl: "./gifs-search.component.html",
})
export class GifsSearchComponent {
  @ViewChild("txtSearch") txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const searchValue = this.txtSearch.nativeElement.value;
    this.gifsService.searchGif(searchValue);
    this.txtSearch.nativeElement.value = "";
  }
}
