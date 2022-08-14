import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { watch } from 'rxjs-watcher';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-watchrxjs',
  templateUrl: './watchrxjs.component.html',
  styleUrls: ['./watchrxjs.component.scss'],
})
export class WatchRxJsComponent implements OnInit {
  constructor() {}

  response: any;

  ngOnInit() {}

  watchRxJS() {
    interval(2000)
      .pipe(
        watch('Interval (2000)', 10),
        filter((v) => v % 2 === 0),
        watch('Filter odd numbers out', 10)
      )
      .subscribe();
  }
}
