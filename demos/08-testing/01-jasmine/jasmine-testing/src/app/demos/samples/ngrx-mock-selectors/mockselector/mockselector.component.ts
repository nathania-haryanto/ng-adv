import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoState } from 'src/app/demos/state/demos.reducer';
import { getVisibleDemos } from '../../../state/demo.selectors';

@Component({
  selector: 'app-mockselector',
  templateUrl: './mockselector.component.html',
  styleUrls: ['./mockselector.component.scss']
})
export class MockselectorComponent {
  demos = this.store.select(getVisibleDemos);

  constructor(private store: Store<DemoState>) { }
}
