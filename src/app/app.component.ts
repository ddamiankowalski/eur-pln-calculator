import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConversionType} from "./converter/interfaces/conversion-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'EUR/PLN Converter';

  protected _formGroup: FormGroup;

  get amount(): FormControl<number> {
    return this._formGroup.get('amount') as FormControl<number>;
  }

  get converted(): FormControl<number> {
    return this._formGroup.get('amount') as FormControl<number>;
  }

  get currency(): ConversionType {
    return this._formGroup.get('currency')?.value;
  }

  protected onTabChange(type: ConversionType): void {
    this._formGroup.get('currency')?.setValue(type);
  }

  constructor(private fb: FormBuilder) {
    this._formGroup = fb.group({
      amount: fb.control(0, { validators: [Validators.required] }),
      converted: fb.control(0, { validators: [Validators.required] }),
      currency: fb.control('PLNEUR')
    })
  }
}
