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
    if(searchValue.trim().length === 0) {
      return;
    }
    this.gifsService.searchGif(searchValue);
    this.txtSearch.nativeElement.value = "";
  }
}
