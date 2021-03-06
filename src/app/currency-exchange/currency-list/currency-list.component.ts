import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { ConversionRate } from 'src/app/currency-exchange/model/conversion-rate.model';
import { Currencies } from 'src/app/currency-exchange/model/currencies.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnChanges {

  @Input() rates: ConversionRate;
  @Input() responseErrorMessage: string;
  @Input() currencies: Currencies;
  wCurrencies: Currencies;

  ngOnChanges(changes: SimpleChanges) {
    const rates = changes.rates;
    const keys = Object.keys(this.currencies);
    if (
      rates && rates.currentValue && (!rates.previousValue ||
      (rates.previousValue && rates.previousValue.baseCurrencyCode !== rates.currentValue.baseCurrencyCode))
    ) {
      this.wCurrencies = keys
        .filter(key => key !== this.rates.baseCurrencyCode)
        .reduce((prevValue, currentValue) => {
          prevValue[currentValue] = {
            ...this.currencies[currentValue],
            rate: this.rates.rates[currentValue]
          };
          return prevValue;
        }, {});
    }
  }

  customListOrder(obj1, obj2): number {
    return obj2.value.weight - obj1.value.weight;
  }
}

