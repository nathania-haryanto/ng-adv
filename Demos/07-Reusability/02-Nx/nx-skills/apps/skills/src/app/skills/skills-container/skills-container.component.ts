import { Component, OnInit } from '@angular/core';
import { SkillsFacadeService } from '../store/facades/skills-facade.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit {
  constructor(public sf: SkillsFacadeService) {}

  skills$ = this.sf.getSkills();

  ngOnInit(): void {
    this.sf.initSkills();
  }

  toggleShowAll() {}

  // deleteSkill(s: Skill) {}

  // addSkill(s: Skill) {}

  // toogleComplete(s: Skill) {}
}
