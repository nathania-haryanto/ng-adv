import { createAction, props } from '@ngrx/store';
import { Skill } from '../../skill.model';

export const loadSkills = createAction('[Skills] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skills] Load Skills Success',
  props<{ data: Skill[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills] Load Skills Failure',
  props<{ error: Error }>()
);

// addSkill action -> easy creation using: ngrx-create-action-props
export const addSkill = createAction('[Skills] Add', props<{ data: Skill }>());

export const addSkillsSuccess = createAction(
  '[Skills] Add Skills Success',
  props<{ data: Skill }>()
);

export const addSkillsFailure = createAction(
  '[Skills] Add Skills Failure',
  props<{ error: Error }>()
);

// just a mock to save time - not persisted
export const toggleSkillComplete = createAction(
  '[Skill] Toggle Skill Complete',
  props<{ data: Skill }>()
);

// just a mock to save time - not persisted
export const deleteSkill = createAction(
  '[Skills] Delete Skill',
  props<{ data: Skill }>()
);

//  just a mock to save time - not persisted
export const deleteSkillsFailure = createAction(
  '[Skills] Delete Skills Failure',
  props<{ error: Error }>()
);
