export const appFeatureKey = 'app';

export interface AppState {
  title: string;
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development',
};

import { createReducer, on, props } from '@ngrx/store';
import * as app from './app.actions';

export const reducer = createReducer(
  initialAppState,
  on(app.changeTitle, (state, action) => ({ ...state, title: action.title }))
);
