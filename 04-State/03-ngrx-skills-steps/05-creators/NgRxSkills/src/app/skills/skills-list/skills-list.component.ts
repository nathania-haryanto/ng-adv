import { Component, OnInit } from '@angular/core';
import { SkillFacade } from '../store/facades/skill.facades';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  constructor(public sf: SkillFacade) {}

  title = 'ngrxSkills';
  skills$ = this.sf.getSkills();

  ngOnInit() {}

  addItem() {
    this.sf.addSkill({ id: '890', name: 'schematics', completed: false });
  }
}
