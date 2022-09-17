import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { exhaustMap, pluck } from 'rxjs/operators';
import { LoginCredentials } from '../credential.model';
import { FBAuthService } from '../fbauth.service';
import {
  AuthActionTypes,
  LoginErr,
  LoginSuccess,
  LogoutComplete,
  RegisterErr,
  RegisterSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private as: FBAuthService,
    private router: Router
  ) {}

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      pluck('payload'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .logIn(pl.email, pl.password)
          .then((cred) => new LoginSuccess(cred.user))
          .catch((err) => new LoginErr(err))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      pluck('payload'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .createUser(pl.email, pl.password)
          .then((cred) => new RegisterSuccess(cred.user))
          .catch((err) => new RegisterErr(err))
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Logout),
      pluck('payload'),
      exhaustMap(() => this.as.logOut().then(() => new LogoutComplete()))
    )
  );

  // Redirect to login page

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect),
        pluck('payload'),
        exhaustMap(() => {
          this.router.navigate(['demos', 'login']);
          return EMPTY;
        })
      ),
    { dispatch: false }
  );

  // Redirects after RegisterSuccess and RegisterErr

  registerUserResult$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.RegisterSuccess, AuthActionTypes.RegisterErr),
        pluck('payload'),
        exhaustMap(() => {
          this.router.navigate(['demos']);
          return EMPTY;
        })
      ),
    { dispatch: false }
  );
}
