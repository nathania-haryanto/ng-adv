import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DemoItem } from '../../../model/demo/DemoItem';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-action-streams',
  templateUrl: './action-streams.component.html',
  styleUrls: ['./action-streams.component.scss'],
})
export class ActionStreamsComponent implements OnInit {
  constructor(private ds: DemoService) {}

  // Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getItems();
  // Action Stream
  filter = new FormControl('');

  // Stream to bind the view to
  // Allways make sure to take combineLatest from rxjs and NOT rxjs/operators!!!!
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
}
