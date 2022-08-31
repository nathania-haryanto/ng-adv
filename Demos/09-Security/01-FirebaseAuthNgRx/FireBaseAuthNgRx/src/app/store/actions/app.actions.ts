import { Action } from '@ngrx/store';

export enum AppActionTypes {
  ChangeTitle = '[App] ChangeTitle',
}

export class ChangeTitleAction implements Action {
  readonly type = AppActionTypes.ChangeTitle;
  constructor(public payload: string) {}
}

export type AppActions = ChangeTitleAction;
