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

  useSwitchMap() {
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }

  useConcatMap() {
    const source = of('Hello', 'Goodbye');
    //example with promise
    const examplePromise = (val) =>
      new Promise((resolve) => resolve(`${val} World!`));
    //result of first param passed to second param selector function before being  returned
    const example = source.pipe(
      concatMap(
        (val) => examplePromise(val),
        (result) => `${result} w/ selector!`
      )
    );
    //output: 'Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
    const subscribe = example.subscribe((val) =>
      console.log('Example w/ Selector:', val)
    );
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
      .subscribe((r) => console.log('Saved!', r));
  }

  useExhaustMap() {
    // @Effect()
    // login$ = this.actions$.pipe(
    //   ofType(AuthActionTypes.Login),
    //   map((action: Login) => action.payload),
    //   exhaustMap((auth: Authenticate) =>
    //     this.authService
    //       .login(auth)
    //       .pipe(
    //         map(user => new LoginSuccess({ user })),
    //         catchError(error => of(new LoginFailure(error)))
    //       )
    //   )
    // );
  }
}
