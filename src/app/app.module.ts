import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CtrConverterModule} from "./converter/converter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CtrConverterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
