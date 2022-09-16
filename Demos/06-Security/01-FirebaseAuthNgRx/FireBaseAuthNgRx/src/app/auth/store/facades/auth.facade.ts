import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';
import {
  Login,
  Logout,
  Register,
  SetToken,
  LoginRedirect,
} from '../actions/auth.actions';
import { getUser, getLoggedIn, hasToken } from '../selectors/auth.selectors';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LoginCredentials } from '../../credential.model';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store<AuthState>) {}

  get User() {
    return this.store.select(getUser);
  }

  isAuthenticated() {
    return this.store
      .select(getLoggedIn)
      .pipe(map((loggedIn) => environment.authEnabled == false || loggedIn));
  }

  hasToken() {
    return this.store
      .select(hasToken)
      .pipe(map((token) => environment.authEnabled == false || token));
  }

  logIn(login: LoginCredentials) {
    this.store.dispatch(new Login(login));
  }

  logOff() {
    this.store.dispatch(new Logout());
  }

  register(login: LoginCredentials) {
    this.store.dispatch(new Register(login));
  }

  redirectToLogin() {
    this.store.dispatch(new LoginRedirect());
  }

  userChanged(user: firebase.default.User) {
    if (user != null) {
      user
        .getIdToken()
        .then((token) => this.store.dispatch(new SetToken(token)));
    }
  }
}
