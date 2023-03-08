import { appFeatureKey, AppState } from "./app.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

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