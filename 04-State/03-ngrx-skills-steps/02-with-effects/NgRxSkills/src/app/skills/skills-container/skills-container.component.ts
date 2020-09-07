import { Component, OnInit } from '@angular/core';
import { LoadSkillsAction } from '../store/actions/skill.actions';
import { Store } from '@ngrx/store';
import { SkillsState } from '../store/reducers/skill.reducer';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  // TODO: Refactered to In-Module-Container to make it more realistic -> dispatches load
  ngOnInit() {
    this.store.dispatch(new LoadSkillsAction());
  }
}
