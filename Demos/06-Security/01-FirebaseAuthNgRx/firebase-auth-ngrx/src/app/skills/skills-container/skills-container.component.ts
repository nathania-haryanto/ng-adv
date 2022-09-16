import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { combineLatestWith, map, startWith } from 'rxjs/operators';
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

  constructor(private skillsService: SkillsEntityService) {
    this.skills = this.skillsService.entities$.pipe(
      combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
      map(([skills, showAll]) => {
        return showAll
          ? skills
          : skills.filter((sk) => sk.completed === showAll);
      })
    );
  }

  ngOnInit(): void {
    this.skillsService.getAll();
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
