import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';
import { RouterStateUrl } from './router.reducer';

// State
export interface State {
  app: AppState;
  routerReducer: RouterReducerState<RouterStateUrl>;
  // demos: DemoState  -> Lazy Loaded
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  routerReducer: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
