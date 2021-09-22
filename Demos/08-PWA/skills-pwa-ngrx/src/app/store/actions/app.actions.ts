import { Action } from '@ngrx/store';
import { Author } from '../../authors/author.model';

// You could also creat AuthorAction in a seperate file

export enum AppActionTypes {
  ToggleCredits = '[App] ToggleCredits',
  ToggleMenu = '[App] ToggleMenu',
  SetCreditsVisible = '[App] SetCreditsVisible',
  LoadAuthors = '[App] LoadAuthors',
  LoadAuthorsSuccess = '[App] LoadAuthorsSuccess',
  LoadAuthorsFailure = '[App] LoadAuthorsFailure',
  DeleteAuthorsFailure = '[App] DeleteAuthorsFailure',
}

export class ToggleCredits implements Action {
  readonly type = AppActionTypes.ToggleCredits;
}

export class ToggleMenu implements Action {
  readonly type = AppActionTypes.ToggleMenu;
}

export class SetCreditsVisible implements Action {
  readonly type = AppActionTypes.SetCreditsVisible;
  constructor(public payload: boolean) {}
}

export class LoadAuthors implements Action {
  readonly type = AppActionTypes.LoadAuthors;
}

export class LoadAuthorsSuccess implements Action {
  readonly type = AppActionTypes.LoadAuthorsSuccess;
  constructor(public payload: Author[]) {}
}

export class LoadAuthorsFailure implements Action {
  readonly type = AppActionTypes.LoadAuthorsFailure;
  constructor(public payload: Error) {}
}

export class DeleteAuthorsFailure implements Action {
  readonly type = AppActionTypes.LoadAuthorsFailure;
  constructor(public payload: Error) {}
}

// First pipe create by Prettier

export type AppActions =
  | ToggleCredits
  | ToggleMenu
  | SetCreditsVisible
  | LoadAuthors
  | LoadAuthorsSuccess
  | DeleteAuthorsFailure
  | LoadAuthorsFailure;
