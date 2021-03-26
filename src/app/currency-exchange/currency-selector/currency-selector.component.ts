import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Input()
  currencyCodes: string[];

  @Output()
  selectedCurrency: EventEmitter<string> = new EventEmitter<string>();

  currentCurrencyCode: string;

  ngOnInit() {
    this.currentCurrencyCode = this.currencyCodes[0];
  }

  onChange(event: Event) {
    this.currentCurrencyCode = (event.target as HTMLInputElement).value;
    this.selectedCurrency.emit(this.currentCurrencyCode);
  }

}

