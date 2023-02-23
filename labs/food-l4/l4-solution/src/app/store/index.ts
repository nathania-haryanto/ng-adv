import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppReducer, AppState } from './reducers/app.reducer';
import { AuthState, AuthReducer } from '../auth/store/reducers/auth.reducer';

export interface State {
  app: AppState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer,
  auth: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
