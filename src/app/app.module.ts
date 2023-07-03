import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CtrConverterModule} from "./converter/converter.module";
import {CtrInputComponent} from "./shared/components/input/input.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CtrConverterModule,
    CtrInputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
