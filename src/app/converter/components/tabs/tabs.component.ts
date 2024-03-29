import {ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../../shared/services/class-binder.service";
import {ConversionType} from "../../interfaces/conversion-type";

@Component({
  selector: 'ctr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder]
})
export class CtrTabs {
  @Output() tab: EventEmitter<ConversionType> = new EventEmitter<ConversionType>();

  protected _activeTab: ConversionType = 'PLNEUR';

  constructor(classBinder: ClassBinder) {
    classBinder.bind('ctr-tabs');
  }

  protected onTabClick(type: ConversionType): void {
    this._activeTab = type;
    this.tab.emit(this._activeTab);
  }
}
