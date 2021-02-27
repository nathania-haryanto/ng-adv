import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { Skill } from '../models/skill.model';
import { createReducer, on } from '@ngrx/store';
import {
  loadSkills,
  loadSkillsSuccess,
  loadSkillsError,
  addSkill,
  deleteSkill,
  toggleComplete,
} from '../actions/skill.actions';

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

export const skillReducer = createReducer(
  initialState,
  on(loadSkills, (state, action) => {
    return { ...state, loading: true };
  }),
  on(loadSkillsSuccess, (state, action) => {
    return skillAdapter.setAll(action.skills, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(loadSkillsError, (state, action) => {
    return { ...state, loaded: false, loading: false };
  }),
  on(addSkill, (state, action) => {
    return skillAdapter.addOne(action.skill, { ...state });
  }),
  on(deleteSkill, (state, action) => {
    return skillAdapter.removeOne(action.skill.id, { ...state });
  }),
  on(toggleComplete, (state, action) => {
    const updateSkill: Update<Skill> = {
      id: action.skill.id,
      changes: { completed: !action.skill.completed },
    };
    return skillAdapter.updateOne(updateSkill, { ...state });
  })
);
