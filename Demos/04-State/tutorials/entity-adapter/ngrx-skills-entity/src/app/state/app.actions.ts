import { createAction, props } from '@ngrx/store';
import { Author } from '../authors/author.model';

export const toggleMenu = createAction('[App] toggleMenu');
export const toggleCredits = createAction('[App] toggleCredits');
export const setTitle = createAction(
  '[App] setTitle',
  props<{ title: string }>()
);

export const loadAuthors = createAction('[App] loadAuthors');
export const loadAuthorsSuccess = createAction(
  '[App] loadAuthors Success',
  props<{ items: Author[] }>()
);
export const loadAuthorsFailure = createAction(
  '[App] loadAuthors Failure',
  props<{ err: Error }>()
);
