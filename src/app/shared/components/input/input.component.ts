import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {ClassBinder} from "../../services/class-binder.service";
import {ReactiveFormsModule} from "@angular/forms";

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
  @Input() formControlName!: string;

  constructor(classBinder: ClassBinder) {
    classBinder.bind('ctr-input');
  }
}
