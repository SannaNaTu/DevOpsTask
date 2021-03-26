  import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // esitellään
  buttons: string[];
  result: string;

  constructor() {

    // alustetaan
    this.result = '';
    this.buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  }

  ngOnInit() {
  }

  addValue(value: string) {
    console.log(value);
    // tslint:disable-next-line:triple-equals
    if (value == 'C') {
      this.result = '';

      // tslint:disable-next-line:triple-equals
    } else if (value == '=') {

      {

        // tslint:disable-next-line:no-eval
        this.result = eval(this.result);
      }

    }
    // tslint:disable-next-line:triple-equals
    else if (value == '/' || value == '*' || value == '-' || value == '+') {

      if (this.result.endsWith('+')
        || this.result.endsWith('-')
        || this.result.endsWith('*')
        || this.result.endsWith('/')) {
      } else {
        this.result += value;
      }
    } else {
      this.result += value;
    }

  }


}


