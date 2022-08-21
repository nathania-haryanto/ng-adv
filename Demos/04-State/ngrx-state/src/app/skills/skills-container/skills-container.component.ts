import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  fcToggle = new FormControl(true);
  skills: Observable<Skill[]>;
  view: Observable<Skill[]>;

  constructor(private skillsService: SkillsEntityService) {
    this.skills = this.skillsService.entities$;
  }

  ngOnInit(): void {
    this.skillsService.getAll();

    this.view = combineLatest([
      this.skills,
      this.fcToggle.valueChanges.pipe(startWith(true)),
    ]).pipe(
      map(([skills, showAll]) => {
        return showAll
          ? skills
          : skills.filter((sk) => sk.completed === showAll);
      })
    );
  }

  addItem(): void {
    const newItem: Skill = { id: 0, name: 'Container', completed: false };
    this.skillsService.add(newItem);
  }

  deleteItem(item: Skill): void {
    this.skillsService.delete(item);
  }

  toggleItemComplete(item: Skill): void {}
}
