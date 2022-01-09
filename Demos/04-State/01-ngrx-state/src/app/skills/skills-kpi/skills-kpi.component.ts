import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsFacadeService } from '../state/skills-facade.service';

@Component({
  selector: 'app-skills-kpi',
  templateUrl: './skills-kpi.component.html',
  styleUrls: ['./skills-kpi.component.scss'],
})
export class SkillsKpiComponent implements OnInit {
  constructor(private sf: SkillsFacadeService) {}

  skills = this.sf.getSkills();
  ct = this.skills.pipe(map((arr) => arr.length));

  completed = this.skills.pipe(
    map((skills) => skills.filter((sk: Skill) => !sk.completed))
  );

  ngOnInit(): void {}
}
