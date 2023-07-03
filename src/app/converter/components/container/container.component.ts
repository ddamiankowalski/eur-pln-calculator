import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../../shared/services/class-binder.service";

@Component({
  selector: 'ctr-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder]
})
export class CtrContainer {

}
