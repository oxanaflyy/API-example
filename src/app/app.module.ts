import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ContainerComponent } from './container/container.component';
import { ResultsComponent } from './results/results.component';


import { SearchService } from './search/search.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContainerComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    // Step 2
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
