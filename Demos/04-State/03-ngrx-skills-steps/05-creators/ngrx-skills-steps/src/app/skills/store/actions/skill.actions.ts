import { createAction, props } from '@ngrx/store';
import { Skill } from '../models/skill.model';

export const loadSkills = createAction('[Skill] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skill] Load Skills Success',
  props<{ skills: Skill[] }>()
);

export const loadSkillsError = createAction(
  '[Skill] Load Skills Error',
  props<{ err: Error }>()
);

export const addSkill = createAction(
  '[Skill] Add Skills',
  props<{ skill: Skill }>()
);

export const deleteSkill = createAction(
  '[Skill] Delete Skills',
  props<{ skill: Skill }>()
);

export const toggleComplete = createAction(
  '[Skill] ToggleComplete',
  props<{ skill: Skill }>()
);
