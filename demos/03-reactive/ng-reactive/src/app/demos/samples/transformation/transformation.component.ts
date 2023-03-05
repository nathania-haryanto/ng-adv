import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { TopicService } from '../../topics/topic.service';
import { tap, take } from 'rxjs/operators';
import {
  concatMap,
  delay,
  mapTo,
  mergeMap,
  switchMap,
  map,
  exhaustMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss'],
})
export class TransformationComponent implements OnInit {
  @ViewChild('btnSave', { static: true }) saveButton: ElementRef;

  constructor(private ts: TopicService) { }

  ngOnInit() { }

  useSwitchMap() {
    console.clear();
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000).pipe(take(5)))
      )
      .subscribe(console.log);
  }

  useConcatMap() {
    const source = of('Hello', 'Goodbye', 'Nevermind');

    //can also be used with promises
    const examplePromise = (val: string) =>
      new Promise((resolve) => resolve(`${val} World!`));

    //result of first param passed to second param selector function before being  returned
    const example = source.pipe(concatMap((val) => examplePromise(val)));

    //output: 'Result: 'Hello World', Result: 'Goodbye Goodbye', ....
    example.subscribe((val) => console.log('Result:', val));
  }

  //mergeMap is also know under its alias: flatMap
  useMergeMap() {
    // faking network request for save
    const saveLocation = (location: any) => {
      return of(location).pipe(delay(1500));
    };

    // click as stream
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap((e: Event) => {
          return saveLocation({
            x: (e as MouseEvent).clientX,
            y: (e as MouseEvent).clientY,
            timestamp: Date.now(),
          });
        })
      )
      .subscribe((r) => console.log('Saved!', r));
  }

  useExhaustMap() {
    fromEvent(document, 'click')
      .pipe(
        exhaustMap(() =>
          this.ts.insertTopicSlow({ id: 0, title: 'a new topic', sortOrder: 9 })
        ),
        delay(3000),
        tap(() => console.log('save completed'))
      )
      .subscribe();
  }
}
