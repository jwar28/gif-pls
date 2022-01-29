import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchGifsResponse, Images } from "../models/gifs";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  private _history: string[] = [];
  private _endpoint: string  = "https://api.giphy.com/v1/gifs";
  public  gifsResults: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history    = JSON.parse(localStorage.getItem("history")!) || [];
    this.gifsResults = JSON.parse(localStorage.getItem("results")!) || [];
  }

  stringToLowerCase(query: string): string {
    return query.trim().toLocaleLowerCase();
  }

  saveQueryToHistory(query: string): void {
    this.stringToLowerCase(query);
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem("history", JSON.stringify(this._history));
    }
  }

  createHttpParams(query: string): HttpParams {
    return new HttpParams()
      .set("api_key", "FwXoJHYXV0kverNpuOQsdXoz8LnofPVA")
      .set("limit", "10")
      .set("q", query);
  }

  searchGif(query: string): void {
    this.http
      .get<SearchGifsResponse>(`${this._endpoint}/search?${this.createHttpParams(query)}`)
      .subscribe((res) => {
        console.log(res.data);
        this.gifsResults = res.data;
        localStorage.setItem("results", JSON.stringify(this.gifsResults));
      });

    this.saveQueryToHistory(query);
  }
}
