import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../store/facades/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private af: AuthFacade) {}

  loginForm: UntypedFormGroup;

  ngOnInit() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  logIn(form: UntypedFormGroup) {
    this.af.logIn(form.value);
  }
}
