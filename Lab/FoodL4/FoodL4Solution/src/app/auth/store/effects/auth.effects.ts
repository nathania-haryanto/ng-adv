import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, pluck } from 'rxjs/operators';
import { FBAuthService } from '../../fbauth.service';
import {
  AuthActionTypes,
  LoginErr,
  LoginSuccess,
  LogoutComplete,
  RegisterErr,
  RegisterSuccess
} from '../actions/auth.actions';
import { LoginVM } from '../../login-credential.model';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private as: FBAuthService) {}

  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    pluck('payload'),
    exhaustMap((pl: LoginVM) =>
      this.as
        .logOn(pl.email, pl.password)
        .then(usr => new LoginSuccess(usr))
        .catch(err => new LoginErr(err))
    )
  );

  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.Register),
    pluck('payload'),
    exhaustMap((pl: LoginVM) =>
      this.as
        .createUser(pl.email, pl.password)
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
