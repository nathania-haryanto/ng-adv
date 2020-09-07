import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { SkillActionsUnion, SkillActionTypes } from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

// Feature & Feature-State

export const skillFeatureKey = 'skills';

export interface SkillsState extends EntityState<Skill> {
  // Note: We dont need this any more - provided by EntityState<T>
  // skills: Skill[];
  loading: boolean;
  loaded: boolean;
}

// Entity

export const skillAdapter: EntityAdapter<Skill> = createEntityAdapter<Skill>();
export const defaultSkillState: SkillsState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
};

export const initialState = skillAdapter.getInitialState(defaultSkillState);

// Reducer

// Note: state.kills -> state.entities, now using adapter-methods: allAll, addOne, ....
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActionsUnion
) {
  switch (action.type) {
    case SkillActionTypes.LoadSkills: {
      return { ...state, loading: true };
    }
    case SkillActionTypes.LoadSkills_Success: {
      return skillAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
    case SkillActionTypes.LoadSkills_Error: {
      return { ...state, loaded: false, loading: false };
    }
    case SkillActionTypes.AddSkill:
      return skillAdapter.addOne(action.payload, { ...state });
    case SkillActionTypes.DeleteSkill:
      return skillAdapter.removeOne(action.payload.id, { ...state });
    case SkillActionTypes.ToggleComplete:
      const updateSkill: Update<Skill> = {
        id: action.payload.id,
        changes: { completed: !action.payload.completed },
      };
      return skillAdapter.updateOne(updateSkill, { ...state });
    default:
      return state;
  }
}
