import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillBS } from './skills-bs';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsState {
  constructor(private service: SkillsService) {
    this.service.getSkills().subscribe((data) => {
      this.skills.next(data);
    });
  }

  private skills: BehaviorSubject<SkillBS[]> = new BehaviorSubject<SkillBS[]>(
    []
  );

  getAllSkills() {
    return this.skills.asObservable();
  }

  getSkill(id: number) {
    return this.skills.pipe(map((m) => m.find((mi) => mi.id == id)));
  }

  insertSkill(s: SkillBS) {
    return this.service.insertSkill(s);
  }

  updateSkill(s: SkillBS) {
    return this.service.updateSkill(s);
  }

  deleteSkill(s: SkillBS) {
    return this.service.deleteSkill(s.id);
  }
}
