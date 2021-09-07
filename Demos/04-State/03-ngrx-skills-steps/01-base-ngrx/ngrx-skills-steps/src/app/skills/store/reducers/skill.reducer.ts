import { SkillActionsUnion, SkillActionTypes } from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

// State
export const skillFeatureKey = 'skills';

export interface SkillsState {
  map(arg0: (review: any) => any);
  slice(arg0: number, index: any);
  skills: Skill[];
  loaded: boolean;
  menuVisible: boolean;
}

export const initialState = {
  skills: [
    { id: '123', name: 'rxjs', completed: true },
    { id: '456', name: 'ngrx', completed: false },
  ],
  loaded: false,
  menuVisible: true,
};

// Reducer
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActionsUnion
) {
  switch (action.type) {
    case SkillActionTypes.AddSkill:
      const arrAdd = [...state.skills, action.payload];
      return { ...state, skills: arrAdd };
    case SkillActionTypes.DeleteSkill:
      const arrDel = state.skills.filter((s) => s.id !== action.payload.id);
      return { ...state, skills: arrDel };
    case SkillActionTypes.ToggleComplete:
      // State not really mutated
      return { ...state };
    case SkillActionTypes.ToggleMenuVisible:
      return { ...state, menuVisible: !state.menuVisible };
    default:
      return state;
  }
}
