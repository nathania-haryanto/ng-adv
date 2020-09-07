import { Component } from '@angular/core';
import { Skill } from './skills-list/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skills-elements';
  data = [
    { id: 1, name: 'node.js', hours: 2, completed: false },
    { id: 2, name: 'type script', hours: 2, completed: false },
    { id: 3, name: 'java script', hours: 1, completed: false },
  ];

  onSave(skills: Skill[]): void {
    console.log('saved skills:', skills);
  }
}
