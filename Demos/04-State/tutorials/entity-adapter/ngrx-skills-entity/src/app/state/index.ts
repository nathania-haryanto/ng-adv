import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as app from './app.reducer';

export interface State {
  app: app.State;
}

export const reducers: ActionReducerMap<State> = {
  app: app.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
