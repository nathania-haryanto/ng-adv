import { SkillActionsUnion, SkillActionTypes } from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

export const skillFeatureKey = 'skills';

export interface SkillsState {
  skills: Skill[];
  loading: boolean;
  loaded: boolean;
}

export const initialState = {
  skills: [],
  loaded: false,
  loading: false,
};

// Reducer

// Note: Added the "Load"-related parts to reducer
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActionsUnion
) {
  switch (action.type) {
    case SkillActionTypes.LoadSkills: {
      return { ...state, loading: true };
    }
    case SkillActionTypes.LoadSkills_Success: {
      return { ...state, skills: action.payload, loaded: true, loading: false };
    }
    case SkillActionTypes.LoadSkills_Error: {
      return { ...state, loaded: false, loading: false };
    }
    case SkillActionTypes.AddSkill:
      const arrAdd = [...state.skills, action.payload];
      return { ...state, skills: arrAdd };
    case SkillActionTypes.DeleteSkill:
      const arrDel = state.skills.filter((s) => s.id !== action.payload.id);
      return { ...state, skills: arrDel };
    case SkillActionTypes.ToggleComplete:
      return { ...state };
    default:
      return state;
  }
}
