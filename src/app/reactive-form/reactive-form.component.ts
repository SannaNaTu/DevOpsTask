import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // person:Person;
  profileForm: FormGroup;

  constructor(private fbuiler: FormBuilder) {
    // this.profileForm = fbuiler.group({
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // }, {
    //   validator: PassWord.MatchPassword // your validation method
    // })
  }

  ngOnInit() {
    this.profileForm = this.fbuiler.group(
      {
        firstName: ['Sanna', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
        lastName: ['Natunen', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
        personId: ['120464-126J', [Validators.required, Validators.minLength(6), Validators.pattern('^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[01]\dA)\d{3}[\dA-Z]$')]],
        eMail: ['testi@testi.com', [Validators.required, Validators.email]],
        userName: ['Käyttäjänimi', [Validators.required, Validators.minLength(6)]],
        passWord: ['A1a4a6a8aA', [Validators.required, Validators.minLength(10), Validators.pattern('(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
        confirmPassWord: ['A1a4a6a8aA', [Validators.required, Validators.minLength(10)]],
        termsAndConditions: ['', [Validators.requiredTrue]],
        // validator: PassWord.MatchPassword

      });
  }

  onSubmit() {
    console.log(this.profileForm);

  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personId() {
    return this.profileForm.get('personId');
  }

  get eMail() {
    return this.profileForm.get('eMail');
  }

  get userName() {
    return this.profileForm.get('userName');
  }

  get passWord() {
    return this.profileForm.get('passWord');
  }

  get confirmPassWord() {
    return this.profileForm.get('confirmPassWord');
  }

  get termsAndConditions() {
    return this.termsAndConditions.get('termsAndConditions');
  }

}
