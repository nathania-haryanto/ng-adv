import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SkillsState, skillFeatureKey } from '../reducers/skill.reducer';

// Selects the State Slice
export const getSkillsState = createFeatureSelector<SkillsState>(
  skillFeatureKey
);

export const getSkillData = createSelector(
  getSkillsState,
  (state: SkillsState) => state.skills
);

export const getMenuVisible = createSelector(
  getSkillsState,
  (state: SkillsState) => state.menuVisible
);
