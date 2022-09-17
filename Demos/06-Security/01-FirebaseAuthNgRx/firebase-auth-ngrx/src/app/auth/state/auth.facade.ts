import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginCredentials } from '../credential.model';
import {
  Login,
  LoginRedirect,
  Logout,
  Register,
  SetToken,
} from './auth.actions';
import { AuthState } from './auth.reducer';
import { getLoggedIn, getUser, hasToken } from './auth.selectors';

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

  signIn(login: LoginCredentials) {
    this.store.dispatch(new Login(login));
  }

  signOut() {
    this.store.dispatch(new Logout());
  }

  register(login: LoginCredentials) {
    this.store.dispatch(new Register(login));
  }

  redirectToLogin() {
    this.store.dispatch(new LoginRedirect());
  }

  userChanged(user: any) {
    if (user != null) {
      user
        .getIdToken()
        .then((token: string) => this.store.dispatch(new SetToken(token)));
    }
  }
}
