import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginCredential } from '../../login-credential.model';
import { Login } from '../../store/actions/auth.actions';
import { AuthState } from '../../store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  login: LoginCredential = {
    email: '',
    pwd: '',
    remember: false
  };

  logIn() {
    this.store.dispatch(new Login(this.login));
  }
}
