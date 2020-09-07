import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addSkill,
  deleteSkill,
  toggleComplete,
} from '../actions/skill.actions';
import { Skill } from '../models/skill.model';
import { SkillsState } from '../reducers/skill.reducer';
import { getAllSkills } from '../selectors/skill.selector';

@Injectable({
  providedIn: 'root',
})
export class SkillFacade {
  constructor(private store: Store<SkillsState>) {}

  getSkills() {
    return this.store.select(getAllSkills);
  }

  addSkill(skill: Skill) {
    this.store.dispatch(addSkill({ skill }));
    // ES 2015 - property shorthand
    // this.store.dispatch(addSkill({skill: skill}));
  }

  deleteSkill(skill: Skill) {
    this.store.dispatch(deleteSkill({ skill }));
  }

  toggleComplete(skill: Skill) {
    this.store.dispatch(toggleComplete({ skill }));
  }
}
