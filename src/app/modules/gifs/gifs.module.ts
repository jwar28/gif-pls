import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { GifsSearchComponent } from './components/gifs-search/gifs-search.component';
import { GifsResultsComponent } from './components/gifs-results/gifs-results.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    GifsSearchComponent,
    GifsResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
