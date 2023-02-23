import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../store/facades/auth.facade';

@Component({
  selector: 'app-fblogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class FBLoginComponent implements OnInit {
  constructor(private af: AuthFacade) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  logIn(form: FormGroup) {
    this.af.logIn(form.value);
  }
}
