import { Action } from '@ngrx/store';
import { LoginCredential } from '../../login-credential.model';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] RegisterSuccess',
  RegisterErr = '[Auth] RegisterErr',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginErr = '[Auth] LoginErr',
  Logout = '[Auth] Logout',
  LogoutComplete = '[Auth] LogoutComplete',
  SetToken = '[Auth] SetToken'
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;

  constructor(public payload: LoginCredential) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;

  constructor(public payload: firebase.User) {}
}

export class RegisterErr implements Action {
  readonly type = AuthActionTypes.RegisterErr;

  constructor(public payload: string) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginCredential) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: firebase.User) {}
}

export class LoginErr implements Action {
  readonly type = AuthActionTypes.LoginErr;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor() {}
}

export class LogoutComplete implements Action {
  readonly type = AuthActionTypes.LogoutComplete;
  constructor() {}
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SetToken;
  constructor(public payload: string) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginErr
  | Register
  | RegisterSuccess
  | Logout
  | LogoutComplete
  | RegisterErr
  | SetToken;
