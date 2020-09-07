import { Injectable } from '@angular/core';
import { SkillsState } from '../reducers/skill.reducer';
import { Store } from '@ngrx/store';
import { getAllSkills } from '../selectors/skill.selector';
import { Skill } from '../models/skill.model';
import {
  ToggleCompleteAction,
  AddSkillAction,
  DeleteSkillAction,
  LoadSkillsAction,
} from '../actions/skill.actions';

@Injectable({
  providedIn: 'root',
})
export class SkillFacade {
  constructor(private store: Store<SkillsState>) {}

  initSkills() {
    this.store.dispatch(new LoadSkillsAction());
  }

  getSkills() {
    return this.store.select(getAllSkills);
  }

  addSkill(skill: Skill) {
    this.store.dispatch(new AddSkillAction(skill));
  }

  deleteSkill(skill: Skill) {
    this.store.dispatch(new DeleteSkillAction(skill));
  }

  toggleComplete(skill: Skill) {
    this.store.dispatch(new ToggleCompleteAction(skill));
  }
}
