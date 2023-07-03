import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../services/class-binder.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ConversionType} from "../../../converter/interfaces/conversion-type";

@Component({
  standalone: true,
  selector: 'ctr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
  imports: [ReactiveFormsModule]
})
export class CtrInputComponent {
  static id = 0;

  protected _id: number = CtrInputComponent.id;

  @Input({ required: true }) control!: FormControl<number>;
  @Input({ required: true }) currency!: ConversionType;
  @Input() label: string = '';

  constructor(classBinder: ClassBinder) {
    classBinder.bind('ctr-input');

    CtrInputComponent.id++;
  }
}
