import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  skills$: Observable<Skill[]>;
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getAll().subscribe(() => {
      this.skills$ = this.skillsService.entities$;
    });
  }

  // constructor(public sf: SkillsFacadeService) {}
  // skills$ = this.sf.getSkills();
  // ngOnInit(): void {
  //   this.sf.initSkills();
  // }
  // toggleShowAll() {}
  // deleteSkill(s: Skill) {}
  // addSkill(s: Skill) {}
  // toogleComplete(s: Skill) {}
}
