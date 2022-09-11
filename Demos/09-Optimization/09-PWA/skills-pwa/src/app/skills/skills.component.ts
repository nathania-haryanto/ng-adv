import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Skill } from '../model';
import { SkillsService } from '../skills.service';
import { map, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills$: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);
  skillToAdd = new FormControl<string>('', { nonNullable: true });

  constructor(private service: SkillsService) {}

  ngOnInit(): void {
    this.service.getSkills().subscribe((skills) => {
      this.skills$.next(skills);
    });
  }

  removeSkill(s: Skill) {
    const skills = this.skills$.getValue().filter((i: Skill) => i !== s);
    this.skills$.next(skills);
  }

  addSkill() {
    const skills = this.skills$.getValue();
    skills.push({ id: skills.length + 1, name: this.skillToAdd.value });
    this.skills$.next(skills);
    this.skillToAdd.setValue('');
  }
}
