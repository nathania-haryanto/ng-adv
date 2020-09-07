import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoState } from '../../store/reducers/demos.reducer';
import { Observable } from 'rxjs';
import { DemoItem } from '../../demo-item.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { getAllDemos } from '../../store/selectors/demo.selectors';
import {
  ToggleVisiblity,
  SetSelected,
} from '../../store/actions/demos.actions';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss'],
})
export class DemoListComponent implements OnInit {
  constructor(private store: Store<DemoState>) {}

  demos$: Observable<DemoItem[]> = this.store.select(getAllDemos);

  ngOnInit() {}

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe((arr) => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  // Actually you should implement this using an action :-)
  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach((item) => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    console.log('deleting item', item);
  }

  changeVisibility(item: DemoItem) {
    this.store.dispatch(new ToggleVisiblity(item));
  }

  selectItem(item: DemoItem) {
    this.store.dispatch(new SetSelected(item));
  }
}
