import {ChangeDetectorRef, inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConversionType} from "../../converter/interfaces/conversion-type";
import {map, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

interface ConversionResponse {
  code: string;
  currency: string;
  rates: Array<{
    effectiveDate: string,
    mid: number;
    no: string;
  }>;
  table: string;
}

@Injectable()
export class ConverterService {
  private _http = inject(HttpClient);
  private _cdRef = inject(ChangeDetectorRef);
  private _endpoint = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/last/1/?format=json';

  public getRate(): Observable<number> {
    return this._http.get<ConversionResponse>(this._endpoint).pipe(
      map(response => {
        const [rate] = response.rates;
        return rate.mid;
      })
    );
  }

  public convertWith(rate: number, type: ConversionType, formGroup: FormGroup) {
    const result = type === 'EURPLN' ? this.convertPLNtoEUR(rate, formGroup) : this.convertEURtoPLN(rate, formGroup);
    formGroup.get('converted')?.setValue(result);
    this._cdRef.markForCheck();
  }

  private convertPLNtoEUR(rate: number, formGroup: FormGroup): number {
    return rate * formGroup.get('amount')?.value;
  }

  private convertEURtoPLN(rate: number, formGroup: FormGroup): number {
    return (1 / rate) * formGroup.get('amount')?.value;
  }
}
