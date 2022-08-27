import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey, State } from './app.reducer';

export const getAppState = createFeatureSelector<State>(appFeatureKey);

export const getMenuVisible = createSelector(
  getAppState,
  (state: State) => state.menuVisible
);

export const getCreditsVisible = createSelector(
  getAppState,
  (state: State) => state.creditsVisible
);

export const getTitle = createSelector(
  getAppState,
  (state: State) => state.title
);

export const getAuthors = createSelector(
  getAppState,
  (state: State) => state.authors
);
