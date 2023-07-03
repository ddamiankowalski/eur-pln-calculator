import {NgModule} from "@angular/core";
import {CtrContainer} from "./components/container/container.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [CtrContainer],
  declarations: [CtrContainer]
})
export class CtrConverterModule {}
