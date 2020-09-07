import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SkillsState, skillFeatureKey } from '../reducers/skill.reducer';

export const getSkillsState = createFeatureSelector<SkillsState>(
  skillFeatureKey
);

export const getSkillData = createSelector(
  getSkillsState,
  (state: SkillsState) => state.skills
);
