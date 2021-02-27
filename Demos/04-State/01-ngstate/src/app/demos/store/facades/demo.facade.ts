import { Injectable } from '@angular/core';
import { DemoState } from '../reducers/demos.reducer';
import { Store } from '@ngrx/store';
import { LoadDemos } from '../actions/demos.actions';
import { tap } from 'rxjs/internal/operators/tap';
import { getAllDemos } from '../selectors/demo.selectors';

@Injectable({
  providedIn: 'root'
})
export class DemoFacade {
  constructor(private store: Store<DemoState>) {}

  initData() {
    this.store.dispatch(new LoadDemos());
  }

  getDemos() {
    return this.store
      .select(getAllDemos)
      .pipe(tap(data => console.log('data received from store', data)));
  }
}
