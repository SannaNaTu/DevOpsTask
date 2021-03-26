import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Subject, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

import { ConversionRatesService } from 'src/app/service/conversion-rates.service';
import { ConversionRate } from 'src/app/currency-exchange/model/conversion-rate.model';
import { Currencies } from 'src/app/currency-exchange/model/currencies.model';
import {CurrencyListService} from '../service/currency-list.service';


@Component({


  // tslint:disable-next-line:component-selector
  selector: 'simple-root',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  newRates: ConversionRate;
  isLoading = false;
  responseErrorMessage: string;
  baseCurrencies: Currencies;
  currencies: Currencies;

  constructor(
    private conversionRatesService: ConversionRatesService,
    private currencyListService: CurrencyListService
  ) { }

  ngOnInit() {
    this.currencies = this.currencyListService.getCurrencies();
    this.baseCurrencies = this.currencyListService.generateBaseCurrencies(['EUR', 'USD', 'GBP']);

    this.subscription = this.conversionRatesService
      .getLoadingStatus()
      .subscribe(isLoading => {
        this.isLoading = isLoading;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onExchangeRateUpdate(newRates: ConversionRate) {
    this.newRates = newRates;
  }
}
