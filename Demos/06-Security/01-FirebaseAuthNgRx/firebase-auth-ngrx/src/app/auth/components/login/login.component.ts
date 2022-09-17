import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from '../../credential.model';
import { FBAuthService } from '../../fbauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private as: FBAuthService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  logIn(form: FormGroup) {
    let vm: LoginCredentials = form.value;
    this.as.signIn(vm.email, vm.password);
  }
}
