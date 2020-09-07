import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, pluck } from 'rxjs/operators';
import { FBAuthService } from '../../fbauth.service';
import { LoginCredential } from '../../login-credential.model';
import {
  AuthActionTypes,
  LoginErr,
  LoginSuccess,
  LogoutComplete,
  RegisterErr,
  RegisterSuccess
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private as: FBAuthService) {}

  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    pluck('payload'),
    exhaustMap((pl: LoginCredential) =>
      this.as
        .logOn(pl.email, pl.pwd, pl.remember, null)
        .then(usr => new LoginSuccess(usr))
        .catch(err => new LoginErr(err))
    )
  );

  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.Register),
    pluck('payload'),
    exhaustMap((pl: LoginCredential) =>
      this.as
        .createUser(pl.email, pl.pwd)
        .then(usr => new RegisterSuccess(usr))
        .catch(err => new RegisterErr(err))
    )
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    pluck('payload'),
    exhaustMap(() => this.as.logOff().then(() => new LogoutComplete()))
  );
}
