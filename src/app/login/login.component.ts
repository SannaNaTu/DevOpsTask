import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from './user';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      eMail: ['testi@testi.com', [Validators.required, Validators.email]],
      // tslint:disable-next-line:max-line-length
      passWord: ['Asdfghj1234', [Validators.required, Validators.minLength(10), Validators.pattern('(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
    });
  }

  onSubmit() {
    console.log(this.profileForm);
    this.router.navigate(['/admin']);
    // this.authService.login(eMail,passWord);
  }

  cancel() {
    this.router.navigate(['/']);
  }


  get eMail() {
    return this.profileForm.get('eMail');
  }

  get passWord() {
    return this.profileForm.get('passWord');
  }

}
