import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url: string;
  private currencyObservable: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.exchangeratesapi.io/latest';
  }
  // getData(): Observable<any> {
  //
  // }
}
