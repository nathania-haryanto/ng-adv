import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';

export interface State {
  app: AppState;
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    // var ai: ApplicationInsights = AILoggerService.getInstance();
    console.log('ngrx', action.type);

    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [debug]
  : [];
