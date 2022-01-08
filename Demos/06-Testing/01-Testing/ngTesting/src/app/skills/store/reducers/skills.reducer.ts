import { Action, createReducer, on } from '@ngrx/store';
import { Skill } from '../../skill.model';
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update,
} from '@ngrx/entity';
import {
  loadSkills,
  loadSkillsSuccess,
  loadSkillsFailure,
  addSkillsSuccess,
  addSkillsFailure,
  deleteSkillsFailure,
  deleteSkill,
  toggleSkillComplete,
} from '../actions/skills.actions';

export const skillsFeatureKey = 'skills';

export interface SkillsState extends EntityState<Skill> {
  // Note: We dont need this any more - provided by EntityState<T>
  // skills: Skill[];
  loading: boolean;
}

// Entity

export const skillAdapter: EntityAdapter<Skill> = createEntityAdapter<Skill>();

export const initialState = skillAdapter.getInitialState({
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(loadSkills, (state, action) => {
    return { ...state, loading: true };
  }),
  on(loadSkillsSuccess, (state, action) => {
    return skillAdapter.setAll(action.data, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(addSkillsSuccess, (state, action) => {
    return skillAdapter.addOne(action.data, { ...state });
  }),
  on(toggleSkillComplete, (state, action) => {
    const updateSkill: Update<Skill> = {
      id: action.data.id,
      changes: { completed: !action.data.completed },
    };
    return skillAdapter.updateOne(updateSkill, { ...state });
  }),
  on(deleteSkill, (state, action) => {
    // Actually this is just a mock implementation as it is not persisted as there is no effect
    return skillAdapter.removeOne(action.data.id, { ...state });
  }),
  on(
    loadSkillsFailure,
    addSkillsFailure,
    deleteSkillsFailure,
    (state, action) => {
      console.log('NGRX Error:', action.error);
      return { ...state };
    }
  )
);
