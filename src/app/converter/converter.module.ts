import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import * as components from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    components.CtrTabs,
    components.CtrContainer,
    components.CtrDisclaimer
  ],
  exports: [
    components.CtrContainer,
    components.CtrTabs,
    components.CtrDisclaimer
  ]
})
export class CtrConverterModule {}
