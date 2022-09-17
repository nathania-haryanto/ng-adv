import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { exhaustMap, pluck } from 'rxjs/operators';
import { LoginCredentials } from '../credential.model';
import { FBAuthService } from '../fbauth.service';
import {
  logIn,
  logInFailure,
  logInSuccess,
  logOut,
  logOutComplete,
  registerUser,
  registerUserSuccess,
  registerUserFailure,
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
      ofType(logIn),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .logIn(pl.email, pl.password)
          .then((cred) => logInSuccess({ user: cred }))
          .catch((err: Error) => logInFailure({ err }))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .createUser(pl.email, pl.password)
          .then((cred) => registerUserSuccess({ user: cred }))
          .catch((err) => registerUserFailure(err))
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      pluck('payload'),
      exhaustMap(() => this.as.logOut().then(() => logOutComplete()))
    )
  );

  // Redirect to login page

  // loginRedirect$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(this.loginRedirect$),
  //       pluck('payload'),
  //       exhaustMap(() => {
  //         this.router.navigate(['demos', 'login']);
  //         return EMPTY;
  //       })
  //     ),
  //   { dispatch: false }
  // );

  // Redirects after RegisterSuccess and RegisterErr

  // registerUserResult$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(registerSuccess, registerFailure),
  //       pluck('payload'),
  //       exhaustMap(() => {
  //         this.router.navigate(['demos']);
  //         return EMPTY;
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
