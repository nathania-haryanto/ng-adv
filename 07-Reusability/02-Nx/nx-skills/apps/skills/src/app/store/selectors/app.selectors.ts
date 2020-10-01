import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, appFeatureKey } from '../reducers/app.reducer';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getCreditsVisible = createSelector(
  getAppState,
  (state: AppState) => state.creditsVisible
);

export const getMenuVisible = createSelector(
  getAppState,
  (state: AppState) => state.menuVisible
);

export const getAuthors = createSelector(
  getAppState,
  (state: AppState) => state.authors
);
