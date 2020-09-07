import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemoItem } from '../../demo-item.model';
import {
  DeleteDemo,
  SetSelected,
  ToggleVisiblity,
} from '../../store/actions/demos.actions';
import { DemoState } from '../../store/reducers/demos.reducer';
import { getAllDemos, getFilter } from '../../store/selectors/demo.selectors';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss'],
})
export class DemoListComponent implements OnInit {
  @Output() onEditDemo: EventEmitter<null> = new EventEmitter();

  constructor(private store: Store<DemoState>) {}

  demos$ = this.store.select(getAllDemos);
  filter$ = this.store.select(getFilter);

  view$ = combineLatest([this.demos$, this.filter$]).pipe(
    map(([demos, filter]) => {
      console.log(demos);
      return filter !== ''
        ? demos.filter((d) =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  ngOnInit() {}

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe((arr) => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  // Throws an err because of immutalble store
  // Actually you should implement this using an action :-)
  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach((item) => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    this.store.dispatch(new DeleteDemo(item));
  }

  changeVisibility(item: DemoItem) {
    this.store.dispatch(new ToggleVisiblity(item));
  }

  selectItem(item: DemoItem) {
    this.store.dispatch(new SetSelected(item));
  }

  editItem(item: DemoItem) {
    this.store.dispatch(new SetSelected(item));
    this.onEditDemo.emit();
  }
}
