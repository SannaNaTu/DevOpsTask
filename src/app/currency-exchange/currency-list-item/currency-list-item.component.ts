import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-currency-list-item',
  templateUrl: './currency-list-item.component.html',
  styleUrls: ['./currency-list-item.component.css']
})
export class CurrencyListItemComponent  {

  @Input() baseCurrencyCode: string;
  @Input() amount: number;
  @Input() otherCurrencyCode: string;
  @Input() otherCurrencyConversionRate: number;

}
