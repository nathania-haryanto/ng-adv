import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment.prod';
import {
  SkillsState,
  SkillReducer
} from 'src/app/skills/store/reducers/skill.reducer';

export interface AppState {
  skills: SkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
  skills: SkillReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
