import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginCredentials } from '../credential.model';
import { logIn, redirectToLogin, registerUser, setUser } from './auth.actions';
import { AuthState } from './auth.reducer';
import { getLoggedIn, getUser, hasToken } from './auth.selectors';
import { logOut } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store<AuthState>) {}

  get User() {
    return this.store.select(getUser);
  }

  isAuthenticated() {
    return this.store.select(getLoggedIn).pipe(
      map((loggedIn) => {
        return environment.authEnabled == false || loggedIn;
      })
    );
  }

  hasToken() {
    return this.store
      .select(hasToken)
      .pipe(map((token) => environment.authEnabled == false || token));
  }

  signIn(login: LoginCredentials) {
    this.store.dispatch(logIn({ credentials: login }));
  }

  signOut() {
    this.store.dispatch(logOut());
  }

  register(login: LoginCredentials) {
    this.store.dispatch(registerUser({ credentials: login }));
  }

  redirectToLogin() {
    this.store.dispatch(redirectToLogin());
  }

  userChanged(user: any) {
    if (user)
      user
        .getIdToken()
        .then((token: string) => this.store.dispatch(setUser({ user, token })));
  }
}
