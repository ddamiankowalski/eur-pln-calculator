import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../../shared/services/class-binder.service";

@Component({
  selector: 'ctr-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder]
})
export class CtrDisclaimer {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('ctr-disclaimer');
  }
}
