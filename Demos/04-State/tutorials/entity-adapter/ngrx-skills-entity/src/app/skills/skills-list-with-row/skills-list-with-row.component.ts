import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest, startWith, map } from 'rxjs';
import { Skill } from '../skill.model';
import { SkillsFacadeService } from '../state/skills-facade.service';

@Component({
  selector: 'app-skills-list-with-row',
  templateUrl: './skills-list-with-row.component.html',
  styleUrls: ['./skills-list-with-row.component.scss'],
})
export class SkillsListWithRowComponent implements OnInit {
  constructor(private sf: SkillsFacadeService) {}

  skills$ = this.sf.getSkills();
  // Remove 'true' and it does not work
  fcToggle = new UntypedFormControl(true);

  view$ = combineLatest([
    this.skills$,
    this.fcToggle.valueChanges.pipe(startWith(true)),
  ]).pipe(
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk) => sk.completed === showAll);
    })
  );

  ngOnInit(): void {}

  toggleShowAll(): void {}

  addItem(): void {
    const newItem: Skill = { name: 'Container', completed: false } as Skill;
    this.sf.addSkill(newItem);
  }

  deleteItem(item: Skill): void {
    this.sf.deleteSkill(item);
  }

  toggleItemComplete(item: Skill): void {
    this.sf.toggleComplete(item);
  }
}
