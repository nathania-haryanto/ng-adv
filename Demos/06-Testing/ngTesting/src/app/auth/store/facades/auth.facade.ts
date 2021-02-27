import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';
import { Login, Logout, Register } from '../actions/auth.actions';
import { LoginVM } from '../../login-credential.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(private store: Store<AuthState>) {}

  logIn(login: LoginVM) {
    this.store.dispatch(new Login(login));
  }

  logOff() {
    this.store.dispatch(new Logout());
  }

  register(login: LoginVM) {
    this.store.dispatch(new Register(login));
  }
}
