import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { LoadDemos } from '../actions/demos.actions';
import { DemoState } from '../reducers/demos.reducer';
import { getAllDemos } from '../selectors/demo.selectors';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  constructor(private store: Store<DemoState>) {}

  initDemoData() {
    this.store.dispatch(new LoadDemos());
  }

  getDemos() {
    return this.store
      .select(getAllDemos)
      .pipe(tap((data) => console.log('data received from store', data)));
  }
}
