import { Component, OnInit } from '@angular/core';
import { fromEvent, of, interval } from 'rxjs';
import {
  delay,
  mapTo,
  mergeMap,
  concatMap,
  take,
  exhaustMap,
  switchMap,
} from 'rxjs/operators';
import { AccountService } from '../account.service';
import { VouchersService } from '../voucher.service';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss'],
})
export class TransformationComponent implements OnInit {
  constructor(private vs: VouchersService, private as: AccountService) {}

  ngOnInit() {}

  // can be used like an "event handler"
  useMapTo() {
    const clicks = fromEvent(document, 'click');
    clicks.pipe(mapTo('You clicked the button')).subscribe(console.log);
  }

  //mergeMap is also know under its alias: flatMap
  useMergeMap() {
    // faking network request for save
    const saveLocation = (location) => {
      return of(location).pipe(delay(1500));
    };

    // click as stream
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now(),
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      .subscribe((r) => console.log('Saved!', r));
  }

  useConcatMap() {
    //emit delay value
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe((val) =>
      console.log(`With concatMap: ${val}`)
    );

    // showing the difference between concatMap and mergeMap
    const mergeMapExample = source
      .pipe(
        // just so we can log this after the first example has run
        delay(5000),
        mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe((val) => console.log(`With mergeMap: ${val}`));
  }

  useSwitchMap() {
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }

  useExhaustMap() {
    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(2));

    const exhaustSub = firstInterval
      .pipe(
        exhaustMap((f) => {
          console.log(`Emission Corrected of first interval: ${f}`);
          return secondInterval;
        })
      )
      .subscribe((s) => console.log(s));
  }
}
