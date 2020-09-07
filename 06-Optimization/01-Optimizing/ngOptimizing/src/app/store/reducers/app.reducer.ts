import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppActionTypes, AppActions } from '../actions/app.actions';

//TODO: Notice Root Reducer

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development'
};

export function AppReducer(
  state: AppState = initialAppState,
  action: AppActions
) {
  switch (action.type) {
    case AppActionTypes.ChangeTitle:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
