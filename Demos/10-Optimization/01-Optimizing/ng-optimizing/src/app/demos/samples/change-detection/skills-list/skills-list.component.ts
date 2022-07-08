import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Skill } from 'src/app/model/skills/skills';

// TODO: Toggle changeDetection from ChangeDetectionStrategy.Default to ChangeDetectionStrategy.OnPush
@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Skill[];

  constructor() {}

  ngOnInit() {}

  trackByItems(index: number, skill: Skill): number {
    return skill.id;
  }

  check() {
    console.log('check SkillsListComponent');
  }
}
