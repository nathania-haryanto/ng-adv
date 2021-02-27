import { Action } from '@ngrx/store';
import { Skill } from '../models/skill.model';

// Action Type -> Enum
export enum SkillActionTypes {
  AddSkill = '[Skill] Add Skills',
  DeleteSkill = '[Skill] Delete Skills',
  ToggleComplete = '[Skill] ToggleComplete',
  ToggleMenuVisible = '[Skill] ToggleMenuVisible',
}

// Action Creator
export class AddSkillAction implements Action {
  readonly type = SkillActionTypes.AddSkill;
  constructor(public payload: Skill) {}
}

export class DeleteSkillAction implements Action {
  readonly type = SkillActionTypes.DeleteSkill;
  constructor(public payload: Skill) {}
}

export class ToggleCompleteAction implements Action {
  readonly type = SkillActionTypes.ToggleComplete;
  constructor(public payload: Skill) {}
}

export class ToggleMenuVisibleAction implements Action {
  readonly type = SkillActionTypes.ToggleMenuVisible;
}

// Add The Action to the union type

export type SkillActionsUnion =
  | AddSkillAction
  | DeleteSkillAction
  | ToggleCompleteAction
  | ToggleMenuVisibleAction;
