import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillBS } from './skills';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsState {
  constructor(private service: SkillsService) {
    this.initData();
  }

  private arrSkills: SkillBS[] = [];
  private skills: BehaviorSubject<SkillBS[]> = new BehaviorSubject(
    this.arrSkills
  );

  private initData() {
    this.service.getSkills().subscribe((data) => {
      this.arrSkills = data;
      this.skills.next(this.arrSkills);
    });
  }

  getAllSkills(): Observable<SkillBS[]> {
    return this.skills;
  }

  getSkill(id: number): Observable<SkillBS> {
    return this.skills.pipe(map((m) => m.find((mi) => mi.id == id)));
  }

  insertSkill(s: SkillBS): Observable<SkillBS> {
    return this.service.insertSkill(s);
  }

  updateSkill(s: SkillBS): Observable<void> {
    return this.service.updateSkill(s);
  }

  deleteSkill(s: SkillBS): Observable<void> {
    return this.service.deleteSkill(s.id);
  }
}
