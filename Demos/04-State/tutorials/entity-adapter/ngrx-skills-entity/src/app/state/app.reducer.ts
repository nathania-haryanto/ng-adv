import { Action, createReducer, on } from '@ngrx/store';
import { Author } from '../authors/author.model';

export const appFeatureKey = 'app';

export interface State {
  creditsVisible: boolean;
  authors: Author[];
  menuVisible: boolean;
}

export const initialState: State = {
  creditsVisible: false,
  authors: [],
  menuVisible: true,
};

export const reducer = createReducer(initialState);
