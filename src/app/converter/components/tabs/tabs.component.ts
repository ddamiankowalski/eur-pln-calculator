import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../../shared/services/class-binder.service";

@Component({
  selector: 'ctr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder]
})
export class CtrTabs {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('ctr-tabs');
  }
}