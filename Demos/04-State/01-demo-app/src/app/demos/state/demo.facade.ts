import { Injectable } from '@angular/core';
import { DemoState } from './demos.reducer';
import { Store } from '@ngrx/store';
import {
  applyFilter,
  loadDemos,
  deleteDemo,
  setSelected,
} from './demos.actions';
import { getAllDemos, getFilter, getSelected } from './demo.selectors';
import { tap } from 'rxjs/operators';
import { DemoItem } from '../demo-base/demo-item.model';
import { toggleVisiblity } from './demos.actions';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  constructor(private store: Store<DemoState>) {}

  initData() {
    this.store.dispatch(loadDemos());
  }

  getDemos() {
    return this.store
      .select(getAllDemos)
      .pipe(tap((data) => console.log('data received from store', data)));
  }

  getSelectedDemo() {
    return this.store.select(getSelected);
  }

  deleteDemo(item: DemoItem) {
    this.store.dispatch(deleteDemo({ item }));
  }

  selectDemo(item: DemoItem) {
    this.store.dispatch(setSelected({ item }));
  }

  changeVisibility(item: DemoItem) {
    this.store.dispatch(toggleVisiblity({ item }));
  }

  setFilter(filter: string) {
    this.store.dispatch(applyFilter({ filter }));
  }

  getFilter() {
    return this.store.select(getFilter);
  }
}
