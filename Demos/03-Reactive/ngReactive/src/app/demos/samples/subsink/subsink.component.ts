import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-subsink',
  templateUrl: './subsink.component.html',
  styleUrls: ['./subsink.component.scss'],
})
export class SubsinkComponent implements OnInit, OnDestroy {
  fcSearch = new FormControl();

  constructor() {}

  sub: SubSink = new SubSink();
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngOnInit() {
    this.sub.add(
      this.fcSearch.valueChanges.subscribe((val) => console.log(val))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('Subscription unsubscribed');
  }
}
