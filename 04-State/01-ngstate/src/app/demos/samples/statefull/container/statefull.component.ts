import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DemoItem } from 'src/app/demos/demo-item.model';
import { StatefulDemoService } from 'src/app/demos/samples/statefull/stateful-demo.service';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.scss'],
})
export class StatefullComponent implements OnInit {
  constructor(private ds: StatefulDemoService) {}

  // Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getDemos();

  // Action Stream
  filter = new FormControl('');

  // Stream to bind the view to
  demos$ = combineLatest([
    this.demosData$,
    this.filter.valueChanges.pipe(startWith('')),
  ]).pipe(
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
    console.log('change visibility', item);
  }
}
