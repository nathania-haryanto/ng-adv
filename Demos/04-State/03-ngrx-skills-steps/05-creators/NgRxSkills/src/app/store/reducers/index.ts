import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import {
  SkillsState,
  skillReducer,
} from 'src/app/skills/store/reducers/skill.reducer';

export interface AppState {
  skills: SkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
  skills: skillReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
