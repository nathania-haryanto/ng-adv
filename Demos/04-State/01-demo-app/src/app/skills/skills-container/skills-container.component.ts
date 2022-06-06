import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { SkillsService } from '../skills.service';
import { FormControl } from '@angular/forms';
import { startWith, map, tap } from 'rxjs/operators';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  fcToggle = new FormControl(true);
  skills: Observable<Skill[]> = of([]);
  view = combineLatest([
    this.skills,
    this.fcToggle.valueChanges.pipe(startWith(true)),
  ]).pipe(
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk) => sk.completed === showAll);
    })
  );

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getAll();
  }

  addItem(): void {
    const newItem: Skill = { id: 0, name: 'Container', completed: false };
    this.skillsService.add(newItem);
  }

  deleteItem(item: Skill): void {}

  toggleItemComplete(item: Skill): void {}
}
