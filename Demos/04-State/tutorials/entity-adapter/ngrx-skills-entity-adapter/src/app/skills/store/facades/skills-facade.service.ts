import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadSkills,
  addSkill,
  deleteSkill,
  toggleSkillComplete,
} from '../actions/skills.actions';
import { SkillsState } from '../reducers/skills.reducer';
import { getAllSkills } from '../selectors/skills.selectors';
import { Skill } from '../../skill.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsFacadeService {
  constructor(private store: Store<SkillsState>) {}

  initSkills(): void {
    this.store.dispatch(loadSkills());
  }

  getSkills(): Observable<Skill[]> {
    return this.store.select(getAllSkills);
  }

  addSkill(s: Skill): void {
    this.store.dispatch(addSkill({ data: s }));
  }

  deleteSkill(s: Skill): void {
    this.store.dispatch(deleteSkill({ data: s }));
  }

  toggleComplete(s: Skill): void {
    this.store.dispatch(toggleSkillComplete({ data: s }));
  }
}
