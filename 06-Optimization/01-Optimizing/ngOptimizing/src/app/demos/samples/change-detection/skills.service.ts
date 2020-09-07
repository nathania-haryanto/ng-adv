import { Injectable } from '@angular/core';
import { Skill } from '../../../model/skills/skills';
import { Observable, EmptyError, EMPTY, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {
    this.fillSkills();
  }

  // TODO: Change number to something you can "feel" on your machine
  items = 500;
  skills: Observable<Skill[]> = EMPTY;

  fillSkills() {
    const arr = [];
    for (let i = 0; i < this.items; i++) {
      arr.push({
        id: i,
        topicId: 2,
        name: `skill ${i}`,
        hours: 3,
        completed: false,
      });
    }
    this.skills = of(arr);
  }

  getSkills() {
    return this.skills;
  }
}
