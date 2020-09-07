import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from './skill.model';
@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Skill[];
  @Output() skillsSaved: EventEmitter<Skill[]> = new EventEmitter();
  skillToAdd: string;

  constructor() {}

  ngOnInit(): void {}

  removeSkill(item: Skill): void {
    this.skills = this.skills.filter((s) => s.id !== item.id);
  }

  addSkill(): void {
    const sk: Skill = {
      id: this.skills.length + 1,
      name: this.skillToAdd,
      hours: 4,
      completed: false,
    };
    this.skills.push(sk);
  }

  saveSkills(): void {
    this.skillsSaved.emit(this.skills);
  }
}
