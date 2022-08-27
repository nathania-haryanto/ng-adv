import { createReducer, on } from '@ngrx/store';
import { Author } from '../authors/author.model';
import { toggleCredits, toggleMenu, setTitle } from './app.actions';

export const appFeatureKey = 'app';

export interface State {
  creditsVisible: boolean;
  menuVisible: boolean;
  title: string;
  authors: Author[];
}

export const initialState: State = {
  creditsVisible: false,
  menuVisible: true,
  title: 'ng-adv: using ngrx',
  authors: [],
};

export const reducer = createReducer(
  initialState,
  on(toggleMenu, (state, action) => {
    return { ...state, menuVisible: !state.menuVisible };
  }),
  on(toggleCredits, (state, action) => {
    return { ...state, creditsVisible: !state.creditsVisible };
  }),
  on(setTitle, (state, action) => {
    return { ...state, title: action.title };
  })
);
