import { createReducer, on } from '@ngrx/store';
import {
  logInFailure,
  logInSuccess,
  logOutComplete,
  registerUserFailure,
  registerUserSuccess,
  setUser,
} from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  token: string | null;
}

export const initialState: AuthState = {
  user: {},
  token: '',
};

export const reducer = createReducer(
  initialState,
  on(registerUserSuccess, logInSuccess, (state, action) => ({
    ...state,
    user: action.user as firebase.default.User,
  })),
  on(logOutComplete, (state) => ({
    ...state,
    user: null,
    token: null,
  })),
  on(registerUserFailure, logInFailure, (state, action) => {
    console.log('register or logIn error:', action.err);
    return {
      ...state,
      user: null,
      token: null,
    };
  }),
  on(setUser, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
    };
  })
);
