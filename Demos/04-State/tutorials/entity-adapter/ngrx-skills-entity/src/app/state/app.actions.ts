import { createAction, props } from '@ngrx/store';

export const toggleMenu = createAction('[App] toggleMenu');
export const toggleCredits = createAction('[App] toggleCredits');
export const setTitle = createAction(
  '[App] setTitle',
  props<{ title: string }>()
);
