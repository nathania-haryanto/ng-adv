import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent implements OnInit {
  constructor(private service: SkillsService) {}

  title = 'Change Detection';
  skills = this.service.getSkills();

  ngOnInit() {}

  changeTitle() {
    this.title === 'Change Detection'
      ? (this.title = 'Welcome to Change Detection')
      : (this.title = 'Change Detection');
    console.log('Title changed');
  }
}
