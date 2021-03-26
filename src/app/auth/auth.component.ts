import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  private authService: AuthService;
  private router: Router;
  private fb: FormBuilder;

  constructor() {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {

      // @ts-ignore
      this.authService.login(this.form.value)
        .then(result => console.log('User logged in'));
      this.formSubmitAttempt = true;
    }
  }

  cancelLogin() {
    this.router.navigate(['calculator']);
  }
}
