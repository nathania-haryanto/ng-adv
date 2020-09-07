import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SkillsState,
  skillFeatureKey,
  skillAdapter
} from '../reducers/skill.reducer';

export const getSkillsState = createFeatureSelector<SkillsState>(
  skillFeatureKey
);

// Note: Selector refactor to use Entity
export const getSkillsEntities = createSelector(
  getSkillsState,
  skillAdapter.getSelectors().selectAll
);

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

// Note: Make this structure iterable again for the template
export const getAllSkills = createSelector(getSkillsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
