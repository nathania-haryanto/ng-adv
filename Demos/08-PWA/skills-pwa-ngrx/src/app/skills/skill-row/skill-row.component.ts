import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
})
export class SkillRowComponent implements OnInit {
  @Input() skill: Skill;
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(item: Skill): void {
    this.itemDeleted.emit(item);
  }

  toggleItemCompleted(item: Skill): void {
    this.itemCompleted.emit(item);
  }
}
