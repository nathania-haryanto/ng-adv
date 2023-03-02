import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getVisibleDemos } from 'src/app/demos/state/demo.selectors';
import { DemoState } from 'src/app/demos/state/demos.reducer';

@Component({
  selector: 'app-mockselector',
  templateUrl: './mockselector.component.html',
  styleUrls: ['./mockselector.component.scss']
})
export class MockselectorComponent {

  demos = this.store.select(getVisibleDemos);

  constructor(private store: Store<DemoState>) { }
}
