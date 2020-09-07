import { Component, OnInit } from '@angular/core';
import { LoadSkillsAction } from '../store/actions/skill.actions';
import { SkillFacade } from '../store/facades/skill.facades';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit {
  constructor(private sf: SkillFacade) {}

  // Note: Refactered to In-Module-Container to make it more realistic -> dispatches load
  ngOnInit() {
    this.sf.initSkills();
  }
}
