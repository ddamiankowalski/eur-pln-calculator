import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConversionType} from "./converter/interfaces/conversion-type";
import {debounceTime, startWith, switchMap} from "rxjs";
import {ConverterService} from "./api/services/converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConverterService]
})
export class AppComponent {
  protected _formGroup: FormGroup;

  get amount(): FormControl<number> {
    return this._formGroup.get('amount') as FormControl<number>;
  }

  get converted(): FormControl<number> {
    return this._formGroup.get('converted') as FormControl<number>;
  }

  get currency(): ConversionType {
    return this._formGroup.get('currency')?.value;
  }

  protected onTabChange(type: ConversionType): void {
    this._formGroup.get('currency')?.setValue(type);
    this.clearValues();
  }

  constructor(private fb: FormBuilder, private converter: ConverterService) {
    this._formGroup = fb.group({
      amount: fb.control(null, { validators: [Validators.required] }),
      converted: fb.control(null, { validators: [Validators.required] }),
      currency: fb.control('PLNEUR')
    })

    this.watchInput();
  }

  private watchInput(): void {
    this._formGroup.get('currency')?.valueChanges.pipe(
      startWith({}),
      switchMap(currency => (this._formGroup.get('amount') as FormControl).valueChanges.pipe(debounceTime(500))),
      switchMap(() => this.converter.getRate())
    ).subscribe((rate) => this.converter.convertWith(rate, this.currency, this._formGroup))
  }

  private clearValues(): void {
    this._formGroup.get('converted')?.setValue(null, { emitEvent: false });
    this._formGroup.get('amount')?.setValue(null, { emitEvent: false });
  }
}
