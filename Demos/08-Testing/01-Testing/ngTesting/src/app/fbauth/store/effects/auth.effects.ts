import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, pluck, tap } from 'rxjs/operators';
import { FBAuthService } from '../../fbauth.service';
import { LoginVM } from '../../login-credential.model';
import {
  AuthActionTypes,
  LoginErr,
  LoginSuccess,
  LogoutComplete,
  RegisterErr,
  RegisterSuccess,
} from '../actions/auth.actions';

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
      exhaustMap((pl: LoginVM) =>
        this.as
          .logOn(pl.email, pl.password)
          .then((cred) => new LoginSuccess(cred.user))
          .catch((err) => new LoginErr(err))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      pluck('payload'),
      exhaustMap((pl: LoginVM) =>
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
      exhaustMap(() => this.as.logOff().then(() => new LogoutComplete()))
    )
  );

  // Redirect to login page
  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  // Redirects after RegisterSuccess and RegisterErr
  registerUserResult$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.RegisterSuccess, AuthActionTypes.RegisterErr),
        tap(() => {
          this.router.navigate(['/demos']);
        })
      ),
    { dispatch: false }
  );
}
