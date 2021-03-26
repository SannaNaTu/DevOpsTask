import { Component, OnInit } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  person: Person;
  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.person);


  }

}
