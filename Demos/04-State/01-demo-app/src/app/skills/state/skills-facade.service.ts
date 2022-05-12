import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadSkills,
  addSkill,
  deleteSkill,
  toggleSkillComplete,
} from './skills.actions';
import { SkillsState } from './skills.reducer';
import { Skill } from '../skill.model';
import { Observable } from 'rxjs';
import { getAllSkills, selectAll } from './skills.selectors';

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
