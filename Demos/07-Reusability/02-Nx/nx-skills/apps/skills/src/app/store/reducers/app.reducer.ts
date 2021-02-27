import { Action } from '@ngrx/store';
import { AppActionTypes, AppActions, ToggleMenu } from '../actions/app.actions';
import { Author } from '../../authors/author.model';

// TODO: 1 Define State

export const appFeatureKey = 'app';

export interface AppState {
  creditsVisible: boolean;
  authors: Author[];
  menuVisible: boolean;
}

export const initialState: AppState = {
  creditsVisible: false,
  authors: [],
  menuVisible: true,
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.ToggleMenu:
      return { ...state, menuVisible: !state.menuVisible };
    case AppActionTypes.ToggleCredits:
      return { ...state, creditsVisible: !state.creditsVisible };
    case AppActionTypes.SetCreditsVisible:
      return { ...state, creditsVisible: action.payload };
    case AppActionTypes.LoadAuthorsSuccess:
      return { ...state, authors: action.payload };
    case AppActionTypes.LoadAuthorsFailure:
      return { ...state };
    default:
      return state;
  }
}
