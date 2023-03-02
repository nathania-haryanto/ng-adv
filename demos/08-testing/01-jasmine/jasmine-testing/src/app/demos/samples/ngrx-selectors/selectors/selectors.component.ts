import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoState } from '../../../state/demos.reducer';
import { getVisibleDemos } from '../../../state/demo.selectors';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent {
  demos = this.store.select(getVisibleDemos);

  constructor(private store: Store<DemoState>) { }
}