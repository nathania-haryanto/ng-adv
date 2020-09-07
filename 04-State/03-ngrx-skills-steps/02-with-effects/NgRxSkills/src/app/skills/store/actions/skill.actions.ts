import { Action } from '@ngrx/store';
import { Skill } from '../models/skill.model';

export enum SkillActionTypes {
  LoadSkills = '[Skill] Load Skills',
  LoadSkills_Success = '[Skill] Load Skills Success',
  LoadSkills_Error = '[Skill] Load Skills Error',
  AddSkill = '[Skill] Add Skills',
  DeleteSkill = '[Skill] Delete Skills',
  ToggleComplete = '[Skill] ToggleComplete',
}

export class LoadSkillsAction implements Action {
  readonly type = SkillActionTypes.LoadSkills;
}

export class LoadSkillsSuccess implements Action {
  readonly type = SkillActionTypes.LoadSkills_Success;
  constructor(public payload: Skill[]) {}
}

export class LoadSkillsError implements Action {
  readonly type = SkillActionTypes.LoadSkills_Error;
  constructor(public payload: Error) {}
}

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

export type SkillActionsUnion =
  | LoadSkillsAction
  | LoadSkillsSuccess
  | LoadSkillsError
  | AddSkillAction
  | DeleteSkillAction
  | ToggleCompleteAction;
