import { Component, OnInit } from '@angular/core';
import { filter, map, mergeMap, scan } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsFacadeService } from '../store/facades/skills-facade.service';

@Component({
  selector: 'app-skills-kpi',
  templateUrl: './skills-kpi.component.html',
  styleUrls: ['./skills-kpi.component.scss'],
})
export class SkillsKpiComponent implements OnInit {
  constructor(private sf: SkillsFacadeService) {}

  skills = this.sf.getSkills();
  ct = this.skills.pipe(map((arr) => arr.length));

  //TODO: Err in sum
  completed = this.skills.pipe(
    mergeMap((skills: Skill[]) => skills),
    filter((v) => v.completed),
    scan((acc, curr) => acc + 1, 0)
  );

  ngOnInit(): void {}
}
