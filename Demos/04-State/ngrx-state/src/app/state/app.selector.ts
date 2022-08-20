import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, appFeatureKey } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getIsMockAuthenticated = createSelector(
  getAppState,
  (state: AppState) => state.IsMockAuthenticated
);

export const getSideNavVisible = createSelector(
  getAppState,
  (state: AppState) => state.sideNavVisible
);

export const getSideNavEnabled = createSelector(
  getAppState,
  (state: AppState) => state.sideNavEnabled
);

export const getSideNavPosition = createSelector(
  getAppState,
  (state: AppState) => state.sideNavPosition
);
