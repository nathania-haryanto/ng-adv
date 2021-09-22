import { Component, OnInit } from '@angular/core';
import { SkillsFacadeService } from '../store/facades/skills-facade.service';
import { Skill } from '../skill.model';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-skill-list-with-row',
  templateUrl: './skill-list-with-row.component.html',
  styleUrls: ['./skill-list-with-row.component.scss'],
})
export class SkillListWithRowComponent implements OnInit {
  constructor(private sf: SkillsFacadeService) {}

  skills$ = this.sf.getSkills();
  // Remove 'true' and it does not work
  fcToggle = new FormControl(true);

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
    const newItem: Skill = { name: 'Container', completed: false };
    this.sf.addSkill(newItem);
  }

  deleteItem(item: Skill): void {
    this.sf.deleteSkill(item);
  }

  toggleItemComplete(item: Skill): void {
    this.sf.toggleComplete(item);
  }
}
