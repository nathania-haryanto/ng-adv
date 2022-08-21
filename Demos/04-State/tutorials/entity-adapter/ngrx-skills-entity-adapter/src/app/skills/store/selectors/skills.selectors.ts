import { createFeatureSelector, createSelector } from '@ngrx/store';
import { skillsFeatureKey, skillAdapter } from '../reducers/skills.reducer';

export const getSkillsState = createFeatureSelector<any>(skillsFeatureKey);

// Note: State now looks like this ....
// let stateStructure: {
//   "ids": [
//     "123",
//     "456"
//   ],
//   "entities": {
//     "123": {
//       "id": "123",
//       "name": "rxjs from api",
//       "completed": true
//     },
//     "456": {
//       "id": "456",
//       "name": "ngrx from api",
//       "completed": false
//     }
//   },
//   "loading": false,
//   "loaded": true
// }

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = skillAdapter.getSelectors();

export const getAllSkills = createSelector(getSkillsState, selectAll);
