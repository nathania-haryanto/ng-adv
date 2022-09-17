import { AuthActions, AuthActionTypes } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  token: string | null;
}

export const initialState: AuthState = {
  user: {},
  token: '',
};

export function AuthReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.RegisterSuccess: {
      // add your code
      return {
        ...state,
        user: action.payload as firebase.default.User,
      };
    }
    case AuthActionTypes.RegisterErr: {
      // add your code
      return { ...state, user: null, token: null };
    }
    case AuthActionTypes.LoginErr: {
      // add your code
      return { ...state, user: null, token: null };
    }
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload as firebase.default.User,
      };
    }
    case AuthActionTypes.LogoutComplete: {
      // add your code
      return { ...state, user: null, token: null };
    }
    case AuthActionTypes.SetToken: {
      // add your code
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
}
