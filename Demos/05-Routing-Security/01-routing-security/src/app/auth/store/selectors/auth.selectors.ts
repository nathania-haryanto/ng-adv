import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from '../reducers/auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const getUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getToken = createSelector(
  getAuthState,
  (state: AuthState) => state.token
);

export const getLoggedIn = createSelector(
  getAuthState,
  (state: AuthState) => state.isLoggedIn
);
